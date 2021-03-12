import { createWorker } from 'tesseract.js';

const worker = createWorker();

const handleRead = async (req, res) => {
  const { url } = req.params;
  if (!url) return null;

  await worker.load();
  await worker.loadLanguage('eng');
  await worker.initialize('eng');

  try {
    const response = await worker.recognize(url);
    const { data } = response;
    const { text } = data;

    return res.send({ status: 200, text });
  } catch (err) {
    return res.send({ status: 500, error: err.message });
  }
};

export { handleRead };
export default handleRead;
