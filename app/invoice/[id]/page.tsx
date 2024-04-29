"use client";
import { getInvoiceById } from '@/app/libs/getInvoiceById';
import FormPreview from '@/components/FormPreview'
import React, { useRef } from 'react'
import { FaPrint } from 'react-icons/fa';
import { IoSaveSharp } from 'react-icons/io5';
import { useReactToPrint } from 'react-to-print';

const InvoicePage = async ({params:{id}}: {params: {id: string}}) => {
  
  const invoice =await getInvoiceById(id);
  console.log(invoice);


  
  return (
    <div>
      <div className="flex justify-between items-center gap-4">
      <button  className="flex items-center space-x-2 px-3 py-2 shadow rounded-sm border border-slate-600 ">
    <FaPrint />
       <span>Print</span>
       </button>
       <button className="flex text-orange-600 font-semibold items-center space-x-2 px-3 py-2 shadow rounded-sm border border-purple-600 ">
       <IoSaveSharp />
 
       <span>Save Online</span>
       </button>
      </div>
      <div className="">
          <FormPreview data={invoice}/>
        </div>
    </div>
  )
}

export default InvoicePage