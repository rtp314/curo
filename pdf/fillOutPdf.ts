import { PDFDocument } from 'pdf-lib';
import { tm7Fields } from './fieldMap.js';
import { resolve } from 'path';

export default async function fillOutPdf(
  fileName: string,
  data: Record<string, string> | null,
  outputFileName: string = fileName,
) {
  const outputPath = resolve('output', outputFileName);
  const pdfFile = Bun.file(resolve('files', fileName));
  const bytes = await pdfFile.arrayBuffer();
  if (!data) {
    await Bun.write(outputPath, bytes);
    return outputPath;
  }

  const pdfDoc = await PDFDocument.load(bytes);
  const form = pdfDoc.getForm();
  Object.entries(tm7Fields).forEach(([fieldKey, dataKey]) => {
    const field = form.getTextField(fieldKey);
    const fieldValue = data[dataKey] || '';
    field.setText(fieldValue);
  });

  const pdfBytes = await pdfDoc.save();
  await Bun.write(outputPath, pdfBytes);
  return outputPath;
}
