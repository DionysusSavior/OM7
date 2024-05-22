import React, { useState } from 'react';
import { create } from 'ipfs-http-client';

// Connect to an IPFS node
const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });

function FileUpload() {
  const [fileUrl, setFileUrl] = useState('');

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    try {
      const added = await ipfs.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
      console.log('File URL:', url);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      {fileUrl && <audio controls src={fileUrl}>Your browser does not support the audio element.</audio>}
    </div>
  );
}

export default FileUpload;
