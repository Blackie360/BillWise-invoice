import React from 'react'

const FormTable = () => {
  return (
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg my-6">
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
                    Rate
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
            <tr className="bg-white  hover:bg-gray-50 text-black ">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                   2
                </td>
                <td className="px-6 py-4">
                   10
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    $4000
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600  hover:underline">Edit</a>
                </td>
            </tr>
            
           
        </tbody>
    </table>
</div>

  )
}

export default FormTable