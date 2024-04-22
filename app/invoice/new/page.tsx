"use client";

import { FaEdit } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FaPrint } from "react-icons/fa6";
import { MdPreview } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { MdOutlineSend } from "react-icons/md";
import { useState } from "react";
import FormPreview from "@/components/FormPreview";
import { FaCloudUploadAlt } from "react-icons/fa";
import FormTable from "@/components/FormTable";
import { CldImage, CldUploadButton } from "next-cloudinary";



const New = () => {
  const [preview, setPreview] = useState(false)
  const [tableData, setTableData] = useState([])
  const[logoUrl, setLogoUrl] = useState('');
  const[combineData, setCombineData] = useState({})

  const[formData, setFormData] = useState({
    company: '',
    name: '',
    companyAddress: '',
    city: '',
    postalCode: '',
    country: '',
    clientCompany: '',
    clientAddress: '',
    clientCity: '',
    clientPostalCode: '',
    clientCountry: '',
    invoiceNumber: '',
    invoiceDate: '',
    dueDate: ''
  });

function handleInputChange(e: { target: { name: any; value: any; }; }) {
  const { name, value } = e.target;
  // console.log(name, value);
  setFormData({ ...formData, [name]: value });
  // console.log(formData);
}
function handleFormSubmit(e: { preventDefault: () => void; }) {
  e.preventDefault();
  const allFormData = {
    ...formData,
    logoUrl,
    tableData
  };
  setCombineData(allFormData);
  setPreview(!preview);
}
console.log(combineData)
 // Function to update tableData when called by the Table component
 const updateTableData = (newTableData) => {
  setTableData(newTableData);
};
console.log(tableData)

  return (
    <div className='bg-slate-50 text-black py-8'>
  {/* header */}
  <div className="flex justify-between items-center  md:py-8 px-4 md:px-16 mb-6">
  <div className="flex gap-4">
   
   <button  onClick={()=>setPreview(!preview)}
   className=" px-3 py-2 shadow rounded-sm border border-slate-600 ">
       {
        preview ? (
          <div className="flex items-center space-x-2">
            <FaEdit />

       <span>Edit form</span>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <MdPreview />
       <span>Preview</span>
          </div>
        )
       }

       </button>
   
    <button className="flex items-center space-x-2 px-3 py-2 shadow rounded-sm border border-slate-600 ">
    <FaPrint />
       <span>Print</span>
       </button>
   
     <button className="flex items-center space-x-2 px-3 py-2 shadow rounded-sm border border-slate-600 ">
       <FaDownload />
       <span>Download</span>
       </button>
   <div className="flex gap-4 ">

   <button className="flex text-orange-600 font-semibold items-center space-x-2 px-3 py-2 shadow rounded-sm border border-purple-600 ">
       <IoSaveSharp />
 
       <span>Save Online</span>
       </button>
   
       <button className="flex text-orange-600 font-semibold items-center space-x-2 px-3 py-2 shadow rounded-sm border border-purple-600 ">
       <MdOutlineSend />
       <span>Send</span>
       </button>
   </div>
   
 
   </div>
  </div>
  {/* invoice form */}
  {
    preview ? (
        <FormPreview data={combineData}/>

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
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full md:w-64 h-48 md:h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
    <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <FaCloudUploadAlt className="w-8 h-8 text-gray-500" />
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <CldUploadButton
                onUpload={(data) => {
                    console.log(data);
                    if (typeof data.info !== 'string') {
                        setLogoUrl(data.info?.secure_url || ''); // Fix: Provide a default value of an empty string
                    }
                }}
                className='text-white mb-2 py-2 px-4 rounded-lg '
                uploadPreset="Invoicepreset"
            />
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG (MAX. 240x240px)</p>
    </div>
</label>

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

<button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
 Create Invoice 
</button>

</form>
    )
  }
 

  

    </div>
  )
}

export default New