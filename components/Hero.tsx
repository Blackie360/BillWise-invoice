import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import invoice from "@/public/images/12070.jpg"
import { FaArrowDown } from "react-icons/fa6";

const Hero = () => {
  return (
    //home page
    <div className='mt-16
    bg-gray-900 grid  grid-cols-1 md:grid-cols-2
    py-16 px-16
    text-slate-50 items-center'>
      <div className="flex flex-col space-y-4 items-start gap-3">
        <h2 className=' text-3xl md:text-4xl font-bold '>
            Invoice Generator 
        </h2>
        <p className=' md:text-2xl'> 
            Generate, Manage and Track, Recurring Invoices <br /> 
            Download as PDF, Email and Print  Invoices 
        </p>
       <Link
       href="/invoice/new"
       className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>
        Create your first invoice  <FaArrowDown w-12 h-12 />
       </Link>
       <br/>
      </div>
     
      <div>
        <Image src={invoice} alt="invoice" />
      </div>
    </div>
  )
}

export default Hero
