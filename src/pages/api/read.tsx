import { VercelRequest, VercelResponse } from '@vercel/node';
import { createWorker } from 'tesseract.js';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: VercelRequest, res: VercelResponse) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = './';
  form.keepExtensions = true;

  const worker = createWorker();

  form.parse(req, async (err, fields, { file }) => {
    if (!file) return res.json({ status: 500, error: 'No file provided' });

    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    try {
      const response = await worker.recognize(file.path);
      const { data } = response;
      const { text } = data;

      return res.json({ status: 200, text });
    } catch (err) {
      return res.json({ status: 500, error: err.message });
    }
  });
};
