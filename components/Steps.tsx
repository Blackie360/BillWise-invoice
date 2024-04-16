import { FaChevronRight } from "react-icons/fa6";


function Steps() {
  return (
    <div className='py-8 md:py-16 px-4 md:px-16 bg-slate-50 
    flex items-center justify-center
    mx-auto text-black'>
        <div className=''>
        <h2 className=' text-2xl md:text-4xl font-semibold mb-4'>
            Create Your Invoice  the easy way
            </h2>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 items-center'>
        <div className="flex items-center gap-3 mb-4 md:mb-0">
        <p className="border-4 border-gray-500 rounded-full p-2 h-8 w-8 flex items-center justify-center">
            1
        </p>
        <span> Invoice Details</span>
        <FaChevronRight className="hidden md:block" size={24} />
        </div>
       

        <div className="flex items-center gap-3 mb-4 md:mb-0">
        <p className="border-4 border-gray-500 rounded-full p-2 h-8 w-8 flex items-center justify-center">
            2
        </p>
        <span> Payment Details</span>
        <FaChevronRight className="hidden md:block" size={24} />
        </div>
        
        <div className="flex items-center gap-3">
        <p className="border-4 border-gray-500 rounded-full p-2 h-8 w-8 flex items-center justify-center">
            3
        </p>
        <span>Select Design <br /> (Download & sent Email)  </span> 

        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Steps
