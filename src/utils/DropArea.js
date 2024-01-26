import React from 'react';
import { fileUploadState } from '../utils/constants';
import excelLogo from '../assets/excel.png';

const DropArea = ({ handleFileUpload, loader, fileName }) => {

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    handleFileUpload(event, 'drop');
  };

  return (
    <div
      style={{
        border: '1px dashed #EBEBEB',
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <img src={excelLogo} alt='excel logo' style={{ width: '36px', height: '36px' }} />
      <p
        style={{
          fontFamily: "Figtree",
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '24px',
          color: '#999CA0',
          margin: fileUploadState.uploading !== loader ? '16px 0' : '16px 0 0 0',
        }}
      >
        {
          fileUploadState.uploading === loader
            ? (<>{fileName}</>)
            : (<>Drop you excel sheet or <span style={{ color: '#605BFF' }}>browse</span></>)
        }
      </p>
      {
        fileUploadState.uploading === loader && (<span
          style={{
            fontFamily: "Figtree",
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#D33030',
          }}
        >Remove</span>)
      }
    </div>
  )
}

export default DropArea;
