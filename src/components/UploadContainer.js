import React, { useState } from 'react';
import Headers from './Headers';
import Body from './Body';

const UploadComponent = () => {
  const [fileName, setFileName] = useState('');
  const [data, setData] = useState([]);

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: '#fafafb',
      }}
    >
      <Headers />
      <Body
        fileName={fileName}
        setFileName={setFileName}
        data={data}
        setData={setData}
      />
    </div>
  )
}

export default UploadComponent;
