import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Price = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Basic</h2>
            <p className="text-white mb-4">For small businesses just starting out.</p>
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl font-bold">$19</span>
              <span className="text-white ml-2">/mo</span>
            </div>
            <ul className="text-white">
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-green-500 mr-2" />
                Unlimited invoices
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-green-500 mr-2" />
                Basic support
              </li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">Choose Plan</button>
          </div>
          <div className="bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Pro</h2>
            <p className="text-white mb-4">For growing businesses with more needs.</p>
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl font-bold">$39</span>
              <span className="text-white ml-2">/mo</span>
            </div>
            <ul className="text-white">
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-green-500 mr-2" />
                Unlimited invoices
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-green-500 mr-2" />
                Priority support
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-green-500 mr-2" />
                Custom branding
              </li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">Choose Plan</button>
          </div>
          <div className="bg-gray-800 shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Enterprise</h2>
            <p className="text-white mb-4">For large businesses with advanced needs.</p>
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl font-bold">$99</span>
              <span className="text-white ml-2">/mo</span>
            </div>
            <ul className="text-white">
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-green-500 mr-2" />
                Unlimited invoices
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-green-500 mr-2" />
                Priority support
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-green-500 mr-2" />
                Custom branding
              </li>
              <li className="flex items-center mb-2">
                <FaCheckCircle className="text-green-500 mr-2" />
                Advanced reporting
              </li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600">Choose Plan</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
