
import Navbar from "@/components/Navbar";
import { FaDownload } from "react-icons/fa6";
import { FaPrint } from "react-icons/fa6";
import { MdPreview } from "react-icons/md";
import { IoSaveSharp } from "react-icons/io5";
import { MdOutlineSend } from "react-icons/md";


const New = () => {
  return (
    <div className='bg-slate-50 text-black py-8'>
      <Navbar />
  {/* header */}
  <div className="flex justify-between items-center  md:py-8 px-4 md:px-16">
  <div className="flex gap-4">
   
   <button className="flex items-center space-x-2 px-3 py-2 shadow rounded-sm border border-slate-600 ">
       <MdPreview />
       <span>Preview</span>
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
  <div className=''>


<div className="w-full max-w-sm p-4 bg-white border border-gray-600 rounded-lg shadow sm:p-6 md:p-8">
    <form className="space-y-6" action="#">
       
    </form>
</div>


  </div>
  {/* preview */}

      <h1 className='text-black'>Creat New Invoice</h1>
    </div>
  )
}

export default New