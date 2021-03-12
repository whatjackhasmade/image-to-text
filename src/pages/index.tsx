import * as React from 'react';
import { createWorker } from 'tesseract.js';
import { useDropzone } from 'react-dropzone';
import { useFormik } from 'formik';

import { PageTemplate } from 'to-text';

const CreateReport = props => {
  return (
    <PageTemplate {...props} center={true}>
      <UploadForm />
    </PageTemplate>
  );
};

const UploadForm = () => {
  const [error, setError] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      data: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { handleChange, setFieldValue } = formik;
  const { values } = formik;
  const { data } = values;

  const onDrop = React.useCallback(async acceptedFiles => {
    setLoading(true);

    // Do something with the files
    const [file] = acceptedFiles;

    const image = new Image();
    image.src = URL.createObjectURL(file);

    const worker = createWorker();

    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    try {
      const response = await worker.recognize(file);
      const { data } = response;
      const { text } = data;

      setFieldValue(`data`, text);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <section>
      {loading && "We're figuring out what the text in the image says. Please wait..."}
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
      </div>
      {data && <textarea id="data" name="data" onChange={handleChange} value={data}></textarea>}
    </section>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get pages
  const data = {};

  return {
    props: data, // will be passed to the page component as props
  };
}

export default CreateReport;