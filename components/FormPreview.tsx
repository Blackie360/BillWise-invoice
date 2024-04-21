import Image from 'next/image';
import React from 'react'
import PreviewTable from './PreviewTable';
import { CldImage } from 'next-cloudinary';

const FormPreview = ({ data }: { data: any }) => {
  const {
    company,
    name,
    companyAddress,
    city,
    country,
    clientCompany,
    clientAddress,
    clientCity,
    clientCountry,
    invoiceNumber,
    invoiceDate,
    dueDate,
    tableData,
  } = data;
  const logoUrl = "https://res.cloudinary.com/dvehsjjmg/image/upload/v1713739233/logos/fnbksenxm81blvpplpba.png"

  return (
    <div className="w-full max-w-4xl p-4 bg-white border border-gray-600 rounded-lg shadow sm:p-6 md:p-8 mx-auto">
      {/* image & label */}
      <div className="flex justify-between items-center">
        {/* image */}
        <div className="flex items-center justify-center ">
          {logoUrl && (
            <CldImage
              width="240"
              height="240"
              src={logoUrl}
              alt="invoice logo"
            />
          )}
        </div> 
        <h2 className="text-4xl uppercase font-bold">Invoice</h2>
      </div>
      {/* Input fields */}
      <div className="flex flex-col w-1/2 mt-6">
        <div className="flex">
          <p className='font-bold text-base'>company Name</p>
          <p className='text-base'>{company}</p>
        </div>
        
        <div className="flex">
          <p className='font-bold text-base'>Your Name</p>
          <p className='text-base'>{name}</p>
        </div>
        <div className="flex">
          <p className='font-bold text-base'>company Address</p>
          <p className='text-base'>{companyAddress}</p>
        </div>
        <div className="flex">
          <p className='font-bold text-base'>company City</p>
          <p className='text-base'>{city}</p>
        </div>
        <div className="flex">
          <p className='font-bold text-base'>company Country</p>
          <p className='text-base'>{country}</p>
        </div>
      </div>
      {/* client details */}
      <div className="flex justify-between gap-4">
        <div className="flex flex-col w-1/2 mt-6">
          <h1 className="font-semibold">Bill to :</h1>
          <div className="flex">
            <p className='font-bold text-base'> client company Name</p>
            <p className='text-base'>{clientCompany}</p>
          </div>
          <div className="flex">
            <p className='font-bold text-base'>Client Address</p>
            <p className='text-base'>{clientAddress}</p>
          </div>
          <div className="flex">
            <p className='font-bold text-base'>Client city</p>
            <p className='text-base'>{clientCity}</p>
          </div>
          <div className="flex">
            <p className='font-bold text-base'>Client country</p>
            <p className='text-base'>{clientCountry}</p>
          </div>
        </div>
        <div className="flex flex-col w-1/2 mt-6">
          <div className="flex gap-2">
            <p className=" text-slate-600 font-bold" >Invoice # </p>
            <p>{invoiceNumber}</p>
          </div>
          <div className="flex gap-2">
            <p className=" text-slate-600 font-bold" >Invoice Date </p>
            <p>{invoiceDate}</p>
          </div>  
          <div className="flex gap-2">
            <p className=" text-slate-600 font-bold" >Invoice Due Date </p>
            <p>{dueDate}</p>
          </div>
        </div>
      </div>
      {/* Table */}
      <PreviewTable  />
    </div>
  );
}

export default FormPreview;
