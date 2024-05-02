"use client";

import { FaEdit } from "react-icons/fa";
import { useReactToPrint } from 'react-to-print';
import { FaPrint, FaRegFileLines } from "react-icons/fa6";
import { MdPreview } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { MdOutlineSend } from "react-icons/md";
import { useRef, useState } from "react";
import FormPreview from "@/components/FormPreview";
import { FaCloudUploadAlt } from "react-icons/fa";
import FormTable from "@/components/FormTable";
import { CldImage, CldUploadButton } from "next-cloudinary";
import toast from "react-hot-toast";
import Lottie from 'lottie-react';
import Loading from "@/components/Loading";
import { useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";





const New = () => {
  const { data: session, status } = useSession();
  const [preview, setPreview] = useState(false)
  const [tableData, setTableData] = useState([])
  const[logoUrl, setLogoUrl] = useState('');
  const[combineData, setCombineData] = useState({})
  const invoiceRef = useRef();
  const [loading, setLoading] = useState(false);


  const[formData, setFormData] = useState({
    company: '',
    name: '',
    companyAddress: '',
    city: '',
   
    country: '',
    clientCompany: '',
    clientAddress: '',
    clientCity: '',
    clientPostalCode: '',
    clientCountry: '',
    invoiceNumber: '',
    invoiceDate: '',
    notes: '',
    terms: '',
    dueDate: ''
  });

function handleInputChange(e: { target: { name: any; value: any; }; }) {
  const { name, value } = e.target;
  // console.log(name, value);
  setFormData({ ...formData, [name]: value });
  // console.log(formData);
}
async function handleFormSubmit(e: { preventDefault: () => void; }) {
  setLoading(true);
  e.preventDefault();
  const allFormData = {
    ...formData,
    logoUrl,
    tableData
  };
  setCombineData(allFormData);

  try {
    const response = await fetch('http://localhost:3000/api/invoice', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        invoiceData: {
          ...formData,
          logoUrl,
        },
        tableData,
      }),
    });
    if (response.ok) {
      const createdInvoice= await response.json();
      console.log('createdinvoice ', createdInvoice);
      setLoading(false);
      toast.success('Invoice created successfully🚀');
      setPreview(!preview);
    }
  } catch (error) {
    setLoading(false);
   toast.error('An error occurred while creating the invoice');
    
  }

 
}
console.log(combineData)
 // Function to update tableData when called by the Table component
 const updateTableData = (newTableData) => {
  setTableData(newTableData);
};
console.log(tableData)
//print function
const handlePrint = useReactToPrint({
  content: () => invoiceRef.current,
});
// Set the timeout to  (2 seconds) 

useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1000); 
  return () => clearTimeout(timer);
}, []);

if (status === "loading") {
  return <Loading />;
}
if (status === "unauthenticated") {
  return (
    <div className="gap-8 flex items-center h-screen justify-center flex-col">
  <h2 className="md:text-4xl text-2xl">
    Please Login to be able to create an Invoice
  </h2>
  <Link 
  className="text-blue-500 hover:underline text-3xl"
  href="/login">
    Login
  </Link>
</div>
  )
}
  return (
    <div className='bg-slate-50 text-black py-8 overflow-y-auto'>
  {/* header */}
 
<div className="flex justify-between items-center md:py-8 px-4 md:px-16 mb-6">
  <div className="flex">
    <button
      onClick={() => setPreview(!preview)}
      className="px-3 py-2 shadow rounded-sm border border-slate-600 mr-2 md:mr-0 md:mb-0 mb-2 md:mb-0"
    >
      {preview ? (
        <div className="flex items-center space-x-2">
          <FaEdit />
          <span>Edit form</span>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          <MdPreview />
          <span>Preview</span>
        </div>
      )}
    </button>
  </div>
  <div className="flex">
    <Link
      href="/invoice/7"
      className="flex items-end space-x-2 px-3 py-2 shadow rounded-sm border border-slate-600 mr-2 md:mr-0 md:mb-0 mb-2 md:mb-0"
    >
      <FaRegFileLines />
      <span>View Invoice</span>
    </Link>
  </div>
  <div className="flex">
    <button
      onClick={handlePrint}
      className="flex items-end space-x-2 px-3 py-2 shadow rounded-sm border border-slate-600 mr-2 md:mr-0 md:mb-0 mb-2 md:mb-0"
    >
      <FaPrint />
      <span>Print/Download</span>
    </button>
  </div>
</div>


  {/* invoice form */}
  {
    preview ? (
        <div ref={invoiceRef} className="">
          <FormPreview data={combineData}/>
        </div>

    ) : (
      <form onSubmit={handleFormSubmit} className="w-full max-w-4xl p-4 bg-white border border-gray-600 rounded-lg shadow sm:p-6 md:p-8 mx-auto">
  {/* image & lebal */}
  <div className="flex justify-between items-center">
    {/* image */}

<div className="flex items-center justify-center ">
{
  logoUrl ? (
    <CldImage
        width="240"
        height="240"
        src={logoUrl}
        alt="invoice logo"
          />

  ): (
    <div>
      <CldUploadButton
            className='mb-2 text-sm text-gray-500 dark:text-gray-400
            flex flex-col items-center justify-center w-full md:w-64 h-48 md:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100'
                onUpload={(data) => {
                    console.log(data);
                    if (typeof data.info !== 'string') {
                        setLogoUrl(data.info?.secure_url || ''); // Fix: Provide a default value of an empty string
                    }
                }}
                uploadPreset="Invoicepreset"
            />
      </div>

  )
}
</div> 
    <h2 className="text-4xl uppercase font-bold">Invoice</h2>
  </div>
{/* Input fields */}
<div className="flex flex-col w-1/2 mt-6">
  <input className="border-0 text-base p-1 mb-2 placeholder:italic placeholder:text-slate-400"
  type="text" name="company"
  onChange={handleInputChange}
  value={formData.company}
   placeholder="Your Company" />
  <input className="border-0 text-base p-1 mb-2 placeholder:italic placeholder:text-slate-400"
   type="text"
   name="name"
   onChange={handleInputChange}
   value={formData.name}
    placeholder="Your Name"/>
  <input className="border-0 text-base p-1 mb-2 placeholder:italic placeholder:text-slate-400"
   type="text" 
   name="companyAddress"
   onChange={handleInputChange}
   value={formData.companyAddress}
   placeholder="Company Address"/>
  <input className="border-0 text-base p-1 mb-2 placeholder:italic placeholder:text-slate-400" 
  type="text" 
  name="city"
  onChange={handleInputChange}
  value={formData.city}
  placeholder="City, Postal Code"/>
  <input className="border-0 text-base p-1 mb-2 placeholder:italic placeholder:text-slate-400" 
  type="text"  
  name="country"
  onChange={handleInputChange}
  value={formData.country}
  placeholder="Country eg. Kenya"/>

</div>
{/* client details */}
<div className="flex justify-between gap-4">
<div className="flex flex-col w-1/2 mt-6">
  <h1 className="font-semibold">Bill to :</h1>
  <input className="border-0 text-base p-1 mb-2 placeholder:italic placeholder:text-slate-400"
   name="clientCompany" 
    onChange={handleInputChange}
    value={formData.clientCompany}
   type="text" 
   placeholder="Your Client's Company"/>
    <input className="border-0 text-base p-1 mb-2 placeholder:italic placeholder:text-slate-400" 
    name="clientAddress" 
    type="text" 
    onChange={handleInputChange}
    value={formData.clientAddress}
    placeholder="Client'sAddress"/>
  <input className="border-0 text-base p-1 mb-2 placeholder:italic placeholder:text-slate-400" 
  name="clientCity" 
  onChange={handleInputChange}
  value={formData.clientCity}
  type="text" placeholder="City, "/>
  <input className="border-0 text-base p-1 mb-2 placeholder:italic placeholder:text-slate-400"
   name="clientCountry"
    onChange={handleInputChange}
    value={formData.clientCountry}
    type="text" 
     placeholder="Country eg. Kenya"/>

</div>
<div className="flex flex-col w-1/2 mt-6">
  <div className="flex gap-2">
    <label className=" text-slate-600 font-bold" htmlFor="InvoiceNumber">Invoice # </label>
    <input className="border-0 text-base p-1 mb-2 placeholder:italic placeholder:text-slate-400" 
    name="invoiceNumber" 
    onChange={handleInputChange}
    value={formData.invoiceNumber}
    type="text" placeholder="INV-022"/>
  </div>
  <div className="flex gap-2">
    <label className=" text-slate-600 font-bold" htmlFor="InvoiceNumber">Invoice Date # </label>
    <input className="border-0 text-base p-1 mb-2 placeholder:italic placeholder:text-slate-400" 
     name="invoiceDate"
      onChange={handleInputChange}
      value={formData.invoiceDate}
      type="date" />
  </div>  
  <div className="flex gap-2">
    <label className=" text-slate-600 font-bold" htmlFor="InvoiceNumber"> Due Date # </label>
    <input className="border-0 text-base p-1 mb-2 placeholder:italic placeholder:text-slate-400" 
    name="dueDate"
    onChange={handleInputChange}
    value={formData.dueDate}
     type="date" />
  </div>

</div>

</div>
{/*   Table */}

<FormTable updateTableData={updateTableData} />

{/* notes and condition terms */}
<div className="flex flex-col lg:flex-row gap-4">
      <div className="flex flex-col w-full lg:w-1/2">
        <label htmlFor="notes" className="text-lg font-bold mb-2">Notes</label>
        <textarea
          id="notes"
          rows={4}
          name="notes"
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg p-2 h-32 resize-none"
          placeholder="Enter your notes here..."
        ></textarea>
      </div>
      <div className="flex flex-col w-full lg:w-1/2">
        <label htmlFor="terms" className="text-lg font-bold mb-2">Terms and Conditions</label>
        <textarea
          id="terms"
          rows={4}
          name="terms"
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg p-2 h-32 resize-none"
          placeholder="Enter terms and conditions here..."
        ></textarea>
      </div>
    </div>

    <footer className="text-right text-gray-600 mt-4">Powered by <span className='text-orange-600 text-base '>Billwise</span></footer>

{/* loading  */}

{loading ? (
           <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <Loading />
           </div>
          ) : (
            <button
              className="bg-orange-600 py-2.5 px-6 text-white rounded"
              type="submit"
            >
              Create Invoice
            </button>
          )}




</form>
    )
  }
 

  

    </div>
  )
}

export default New