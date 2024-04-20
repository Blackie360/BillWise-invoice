import { IoClose } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";



const FormTable = () => {
const[tableData,setTableData]=useState([
    {
      itemDescription: "",
        Qty: "",
        unitPrice: "",
        tax: "",
        amount: "",
    }
]);
//add row
 const addRow = () => {
    setTableData([...tableData, {
        itemDescription: "",
          Qty: "",
          unitPrice: "",
          tax: "",
          amount: "",
      }]);
  };
  //delete row
  function removeRow(index) {
    const updatedData = [...tableData];
    updatedData.splice(index, 1);
    setTableData(updatedData);
  }

  return (
    

<div className="relative overflow-x-auto shadow-sm sm:rounded-lg my-6">
    <table className="w-full text-sm text-left rtl:text-right text-black ">
        <thead className="text-xs text-black uppercase bg-gray-50 ">
            <tr>
                <th scope="col" className="px-6 py-3">
                Item Description
                </th>
                <th scope="col" className="px-6 py-3">
                Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                Unit Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Tax
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody className='text-black'>
        {
            tableData.map((row, index) => {
                return (
                    <tr key={index} className="bg-white  hover:bg-gray-50 text-black ">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                <input className="bg-transparent border-0 text-base h-7 w-3/4 p-1 mb-2 placeholder:italic placeholder:text-slate-400" 
                placeholder="item description"
                name="itemDescription"
                value={row.itemDescription}
                type="text" />
                </th>
                <td className="px-6 py-4">
                <input className="bg-transparent border-0 text-base h-7 w-12 p-1 mb-2 placeholder:italic placeholder:text-slate-400" 
                placeholder="2"
                name="Qty"
                value={row.Qty}
                type="number" />
                </td>
                <td className="px-6 py-4">
                <input className="bg-transparent border-0 text-base h-7 w-12 p-1 mb-2 placeholder:italic placeholder:text-slate-400" 
                placeholder="5"
                name="unitPrice"
                value={row.unitPrice}
                type="number" />
                </td>
                <td className="px-6 py-4">
                <input className="bg-transparent border-0 text-base h-7 w-24 p-1 mb-2 placeholder:italic placeholder:text-slate-400" 
                placeholder="2"
                name="tax"
                value={row.tax}
                type="number" />
                </td>
                <td className="px-6 py-4">
                    <input className="bg-transparent border-0 text-base h-7 w-24 p-1 mb-2 placeholder:italic placeholder:text-slate-400" 
                placeholder="2"
                name="amount"
                value={row.amount}
                    type="number" />
                </td>
                <button  onClick={()=> removeRow(index) } type="button" className="rounded-full  p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6">
                    <IoClose className="text-base text-red-600" />
                </button>

            </tr>
                )
            })
        }
            
            <button onClick={addRow} type="button"className="my-3 flex items-center space-x-2 text-orange-600 font-bold">
                <CiCirclePlus className="w-7 h-7"/>
            <span>add line item </span></button>
        
        </tbody>
    </table>
</div>

  )
}

export default FormTable