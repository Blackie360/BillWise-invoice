import React from 'react'

const FormPreview = ({data}) => {
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
    <div className="w-full max-w-4xl p-4 bg-white border border-gray-600 rounded-lg shadow sm:p-6 md:p-8 mx-auto">
   <h2>preview</h2>
</div>
  )
}

export default FormPreview
