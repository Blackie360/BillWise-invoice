import React from 'react'

const PreviewTable = ({ tableData }) => {
  const totalSum = tableData?.reduce((currentTotal, nextItem) => {
    console.log("Current Total:", currentTotal);
    console.log("Next Item Amount:", nextItem.amount);
    return currentTotal + (+nextItem.amount);
}, 0);
console.log("Total Sum:", totalSum);



  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-black uppercase bg-gray-50">
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
        <tbody>
        {
          tableData?.map((row: { itemDescription: any; qty: any; unitPrice: any; tax: any; amount: any; }, i: React.Key | null | undefined)=>{
            const{itemDescription,qty,unitPrice,tax,amount}=row;
            return (
              <tr key={i} className="bg-white">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              {itemDescription}
              </th>
              <td className="px-6 py-4">
              {qty}
              </td>
              <td className="px-6 py-4">
              {unitPrice}
                
              </td>
              <td className="px-6 py-4">
             
              {tax}
              </td>
              <td className="px-6 py-4">
             
              {amount}
              </td>
            </tr>
            )
          })
        }

        <tr className="bg-white">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
              
            </th>
            <td className="px-6 py-4">
              
            </td>
            <td className="px-6 py-4 font-bold text-xl uppercase">
              Total Amount:
            </td>
            <td className="px-6 py-4 font-bold text-xl">
              $99
            </td>
          </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default PreviewTable
