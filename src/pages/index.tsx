import * as React from 'react';
import { useRouter } from 'next/router';
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

function titleCase(sentence: string) {
  let newString = sentence.toLowerCase().split(' ');
  for (let i = 0; i < newString.length; i++) {
    newString[i] = newString[i][0].toUpperCase() + newString[i].slice(1);
  }

  return newString.join(' ');
}

function blobToFile(theBlob, fileName) {
  //A Blob() is almost a File() - it's just missing the two properties below which we will add
  theBlob.lastModifiedDate = new Date();
  theBlob.name = fileName;
  return theBlob;
}

const worker = createWorker();

const UploadForm = () => {
  const router = useRouter();
  const url = router?.query?.url;

  const [original, setOriginal] = React.useState<string>(``);
  const [image, setImage] = React.useState<any>(null);
  const [error, setError] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      data: '',
    },
    onSubmit: undefined,
  });

  const { handleChange, setFieldValue } = formik;
  const { values } = formik;
  const { data } = values;

  const readImage = async file => {
    setLoading(true);
    setFieldValue(`data`, ``);
    setOriginal(``)

    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    try {
      const response = await worker.recognize(file);
      const { data } = response;
      const { text } = data;

      setFieldValue(`data`, text);
      setOriginal(text)
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (!url) return;

    const fetchBlob = async () => {
      const externalSrc = await fetch('https://nomore-cors.herokuapp.com/' + String(url));
      const blob = await externalSrc.blob();
      const file = blobToFile(blob, `external`);
      readImage(file);
    };

    fetchBlob();
  }, [url]);

  const onDrop = React.useCallback(async acceptedFiles => {
    // Do something with the files
    const [file] = acceptedFiles;

    const imageObject = new Image();
    imageObject.src = URL.createObjectURL(file);
    setImage(imageObject);
    readImage(file);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleClickRevert = e => {
    e.preventDefault();
    const hasOriginal: boolean = Boolean(original);
    if(!hasOriginal) return;

    setFieldValue(`data`, original);
  };

  const handleClickTitleCase = e => {
    e.preventDefault();
    const toTitle = titleCase(data);
    setFieldValue(`data`, toTitle);
  };

  return (
    <section className="upload-form">
      {url && <img style={{display: `block`, maxWidth: `400px`}} src={String(url)} />}
      {image && <img style={{display: `block`, maxWidth: `400px`}} src={image.src} />}
      {loading && <p>"We're figuring out what the text in the image says. Please wait..."</p>}
      {data && (
        <React.Fragment>
          <textarea id="data" name="data" onChange={handleChange} value={data}></textarea>
          <button onClick={handleClickRevert}>Undo Changes</button>
          <button onClick={handleClickTitleCase}>Convert to Title Case</button>
        </React.Fragment>
      )}
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {isDragActive ? <p>Drop the files here ...</p> : <p>Drag 'n' drop some files here, or click to select files</p>}
      </div>
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
