import factory from '../../factory/factory.js';
import getTransactionDocuments from './getTransactionDocuments.js';
import fillOutPdf from 'pdf/fillOutPdf.js';
import fillOutDocx from 'docx/fillOutDocx.js';
import { resolve } from 'path';
import { readdir, unlink } from 'node:fs/promises';
import generateUserData from './generateUserData.js';

const app = factory.createApp();

app.post('/files', async c => {
  try {
    // delete old output files
    const existingFiles = await readdir(resolve('output'));
    await Promise.all(existingFiles.map(f => unlink(f)));

    // get new files
    const { userId, transaction } = await c.req.parseBody();
    if (!userId || typeof userId !== 'string') return c.json({ status: 'error', message: 'userId is required' }, 400);
    if (!transaction || typeof transaction !== 'string') {
      return c.json({ status: 'error', message: 'transaction is required' }, 400);
    }
    const db = c.get('db');
    const data = generateUserData(db, userId);

    const { pdf, docx } = getTransactionDocuments(transaction);

    const files: string[] = await Promise.all([
      ...pdf.map(p => fillOutPdf(p, data)),
      ...docx.map(d => fillOutDocx(d, data)),
    ]);

    return c.json({ status: 'ok', files });
  } catch (error) {
    return c.json({ status: 'error', message: error.message }, 500);
  }
});

export default app;
