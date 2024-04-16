import React from 'react';

const InvoiceCTA = () => {
  return (
    <div className="pb-8 flex flex-col items-center bg-gray-900">
      <h2 className="text-white text-4xl font-bold mb-4">Invoice App</h2>
      <p className="text-white text-lg mb-8">Build and manage your invoices with ease using our powerful Invoice App.</p>
      <img src="https://img.freepik.com/free-vector/corporative-business-invoice-business-card_23-2148390793.jpg?w=1380&t=st=1702462391~exp=1702462991~hmac=cbb75062dd59aca00f06781221ab9c91f7b9972bcd4362dc1c0ab177e5ce4db0" alt="Invoice Image" className="w-full md:w-2/3 lg:w-1/2 h-auto object-cover mb-8" />
    </div>
  );
};

export default InvoiceCTA;
