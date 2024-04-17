"use client";

import { FaEdit } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FaPrint } from "react-icons/fa6";
import { MdPreview } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { MdOutlineSend } from "react-icons/md";
import { useState } from "react";


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
        
<div className="w-full max-w-4xl p-4 bg-white border border-gray-600 rounded-lg shadow sm:p-6 md:p-8 mx-auto">
   <h2>preview</h2>
</div>
    ) : (
      <div className="w-full max-w-4xl p-4 bg-white border border-gray-600 rounded-lg shadow sm:p-6 md:p-8 mx-auto">
   <h1>form</h1>
</div>
    )
  }
  {/* preview */}

  

    </div>
  )
}

export default New