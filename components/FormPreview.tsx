import React from 'react'

const FormPreview = ({data}: {data: any}) => {
  const {
    company,
    name,
    companyAddress,
    city,
    postalCode,
    country,
    clientCompany,
    clientAddress,
    clientCity,
    clientPostalCode,
    clientCountry,
    invoiceNumber,
    invoiceDate,
    dueDate,
  } = data;

  return (
    <div className="w-full max-w-4xl p-4 bg-gray-900 border border-gray-600 rounded-lg shadow-lg sm:p-6 md:p-8 mx-auto">
      <h2 className="text-3xl font-bold text-white">Preview</h2>
      <div className="flex flex-col sm:flex-row justify-between mt-6">
        <div className="sm:w-1/2 pr-4">
          <h3 className="text-xl font-bold text-orange-500">Company Name: {company}</h3>
          <p className="text-gray-300"> company Address: {companyAddress}</p>
          <p className="text-gray-300"> City: {city},  Postal code: {postalCode}</p>
          <p className="text-gray-300"> Country: {country}</p>
        </div>
        <div className="sm:w-1/2 mt-4 sm:mt-0 pl-4">
          <h3 className="text-xl font-bold text-orange-500">Client company: {clientCompany}</h3>
          <p className="text-gray-300">Client Address: {clientAddress}</p>
          <p className="text-gray-300">City: {clientCity}, Postal code: {clientPostalCode}</p>
          <p className="text-gray-300">Country: {clientCountry}</p>
        </div>
      </div>
    </div>
  )
}

export default FormPreview
