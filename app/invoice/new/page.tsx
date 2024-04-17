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



const New = () => {
  const [preview, setPreview] = useState(false)
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
   <div className="flex gap-4">

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
        <FormPreview />

    ) : (
      <form className="w-full max-w-4xl p-4 bg-white border border-gray-600 rounded-lg shadow sm:p-6 md:p-8 mx-auto">
  {/* image & lebal */}
  <div className="flex justify-between items-center">
    {/* image */}

<div className="flex items-center justify-center ">
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-48 h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 ">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <FaCloudUploadAlt className="w-6 h-6  text-gray-500" />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">upload Logo</span></p>
            <p className="text-xs text-gray-500 dark:text-gray-400">PNG or JPG (MAX. 240x240px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 



    <h2 className="text-4xl uppercase font-bold">Invoice</h2>
  </div>
</form>
    )
  }
 

  

    </div>
  )
}

export default New