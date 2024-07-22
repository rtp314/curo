import { patchDocument, PatchType, TextRun } from 'docx';
import { resolve } from 'path';

export default async function fillOutDocx(
  fileName: string,
  data: Record<string, string> | null,
  outputFileName: string = fileName,
) {
  const outputPath = resolve('output', `${outputFileName}.docx`);

  if (fileName.includes('.docx')) {
    fileName = fileName.replace('.docx', '');
  }
  const file = Bun.file(resolve('files', `${fileName}.docx`));
  const bytes = await file.arrayBuffer();
  if (!data) {
    await Bun.write(outputPath, bytes);
    return outputPath;
  }

  const patches = {};
  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'string') {
      patches[key] = {
        type: PatchType.PARAGRAPH,
        children: [new TextRun(value)],
      };
    } else {
      patches[key] = value;
    }
  });

  const output = await patchDocument(bytes, {
    outputType: 'nodebuffer',
    patches,
    keepOriginalStyles: true,
  });

  await Bun.write(outputPath, output);

  return outputPath;
}
