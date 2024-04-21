"use client";
import React, { useState } from 'react';
import { CldImage, CldUploadButton } from 'next-cloudinary';

const Upload = () => {
  const[imageUrl, setImageUrl] = useState('');
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h2 className="mb-6 text-2xl">Upload files to Cloudinary</h2>
      <CldUploadButton onUpload={(data)=>{
        console.log(data);
        if (typeof data.info !== 'string') {
          setImageUrl(data.info?.secure_url || ''); // Fix: Provide a default value of an empty string
        }
      }}
        className='bg-orange-600 text-white mb-8 py-3 px-6 rounded-lg'
        uploadPreset="Invoicepreset"
      />
      {
        imageUrl && (
          <CldImage
        width="960"
        height="600"
        src={imageUrl}
        sizes="100vw"
        alt="Description of my image"
          />
        )
      }

    </div>
  );
};

export default Upload;
