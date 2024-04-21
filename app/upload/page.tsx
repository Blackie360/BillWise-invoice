import React from 'react'

export default function page() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <h2 className="mb-6">upload files on cloudinary</h2>
      <CldUploadButton uploadPreset="<Upload Preset>" />
    </div>
  );
}
