import React, { useState, useRef } from 'react';
import DropArea from '../utils/DropArea';
import DisplayData from './DisplayData';
import Papa from 'papaparse';
import UploadIcon from '../assets/upload.png';
import LoaderIcon from '../assets/loader.png';
import * as XLSX from 'xlsx';
import { fileUploadState } from '../utils/constants';


const Body = ({ fileName, setFileName, data, setData }) => {
  const [loader, setLoader] = useState(fileUploadState.upload);

  return (
    <>
      <div
        style={{
          // border: '1px solid blue',
          margin: '0 auto',
          width: '90%',
          height: '608px',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <UploadContainer
          loader={loader}
          setLoader={setLoader}
          fileName={fileName}
          setFileName={setFileName}
          data={data}
          setData={setData}
        />
      </div>
      { 
        data.length !== 0 && loader === fileUploadState.uploaded && (
          <DisplayData
            data={data}
            setData={setData}
          />
        )
      }
    </>

  )
};

const UploadContainer = ({ loader, setLoader, fileName, setFileName, data, setData }) => {
  const csvRef = useRef(null);

  const handleFileUpload = (event, mode) => {
    // console.log("event mode >", mode);
    setLoader(fileUploadState.uploading);
    let uploadedFileName = '';

    if (mode === 'drop') {
      uploadedFileName = event.dataTransfer.files[0].name;

      Array.from(event.dataTransfer.files).map(async file => {
        let text = await file.text();
        let output = Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: result => {
            // console.log("result >", result)
            return result.data;
          }
        })

        setFileName(uploadedFileName);
        setData(output.data.map(el => ({
          id: Number(Object.values(el)[0]),
          links: Object.values(el)[1],
          prefix: Object.values(el)[2],
          selectTags: Object.values(el)[3] !== '' ? Object.values(el)[3].split(',') : [],
          selectedTags: Object.values(el)[4] !== '' ? Object.values(el)[4].split(',') : [],
        })))

      });
    } else {
      uploadedFileName = event.target.files[0].name;

      const reader = new FileReader();
      reader.readAsBinaryString(event.target.files[0]);
      reader.onload = event => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet);

        setFileName(uploadedFileName);
        setData(parsedData.map(el => ({
          id: Number(Object.values(el)[0]),
          links: Object.values(el)[1],
          prefix: Object.values(el)[2],
          selectTags: Object.values(el)[3] !== ("" || undefined) ? Object.values(el)[3].split(', ') : [],
          selectedTags: Object.values(el)[4] !== ("" || undefined) ? Object.values(el)[4].split(', ') : [],
        })))
      }
    }

    setTimeout(() => {
      setLoader(fileUploadState.uploaded);
    }, 2000);
  }

  return (
    <div
      style={{
        // border: '1px solid red',
        width: '596px',
        height: '367px',
        borderRadius: '8px',
        background: '#fff',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <DropArea
        handleFileUpload={handleFileUpload}
        loader={loader}
        fielName={fileName}
      />
      <UploadButton
        csvRef={csvRef}
        handleFileUpload={handleFileUpload}
        loader={loader}
      />
    </div >
  )
}

const UploadButton = ({ csvRef, handleFileUpload, loader }) => {

  return <button
    style={{
      backgroundColor: '#605BFF',
      color: '#fff',
      width: '100%',
      height: '56px',
      borderRadius: '8px',
      marginTop: '21px',
      cursor: loader !== fileUploadState.uploaded ? 'pointer' : 'default',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: loader !== fileUploadState.uploaded ? '100%' : '40%',
    }}
    disabled={loader === fileUploadState.uploaded}
    onClick={() => csvRef.current.click()}
  >
    {
      loader === fileUploadState.uploading
        ? (<>
          <img src={LoaderIcon} alt="loader-icon" style={{ width: '19px', height: '19px' }} />
        </>)
        : (<>
          <input
            ref={csvRef}
            type="file"
            hidden
            accept='text/csv'
            onChange={(event) => handleFileUpload(event, 'click')}
          />
          <img src={UploadIcon} alt="upload-icon" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
          <span
            style={{
              fontFamily: "Figtree",
              fontSize: "14px",
              fontWeight: "600",
              lineHeight: "24px",
              textAlign: "left",
              letterSpacing: '0.5px',
            }}
          >Upload</span>
        </>)
    }
  </button>
}

export default Body;
