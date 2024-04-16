import React from 'react';
import { HiDownload, HiPrinter, HiEye, HiSave, HiMail } from 'react-icons/hi';

const New = () => {
  return (
    <div className="max-w-3xl mx-auto bg-slate-50 mt-16 shadow-md p-8 rounded-lg">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex">
          <button className="flex items-center mr-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            <HiSave className="mr-1" /> Save
          </button>
          <button className="flex items-center mr-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            <HiMail className="mr-1" /> Send
          </button>
        </div>
        <div className="flex mt-4 md:mt-0">
          <button className="flex items-center mr-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            <HiDownload className="mr-1" /> Download
          </button>
          <button className="flex items-center mr-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            <HiPrinter className="mr-1" /> Print
          </button>
          <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            <HiEye className="mr-1" /> Preview
          </button>
        </div>
      </div>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input type="text" id="companyName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div className="flex items-center justify-end">
            <label htmlFor="logo" className="block text-sm font-medium text-gray-700">Company Logo</label>
            <input type="file" id="logo" className="mt-1 ml-4 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <label htmlFor="invoiceNumber" className="block text-sm font-medium text-gray-700">Invoice Number</label>
            <input type="text" id="invoiceNumber" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
            <input type="text" id="amount" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" id="date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default New;
