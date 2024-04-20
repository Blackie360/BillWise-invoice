import React from 'react';
import { BiCustomize, BiDownload, BiShareAlt, BiEdit } from 'react-icons/bi';

const Features = () => {
  return (
    
    <div id='feautures' className="bg-gray-900 min-h-screen flex justify-center items-center pt-8 ">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-lg p-6 flex items-center">
            <BiCustomize className="text-white text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Highly Customizable</h2>
              <p className="text-white">Customize your invoices with ease to match your brand and style.</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 flex items-center">
            <BiDownload className="text-white text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">PDF Downloadable</h2>
              <p className="text-white">Download your invoices in PDF format for easy sharing and printing.</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 flex items-center">
            <BiShareAlt className="text-white text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Email and Social Sharing</h2>
              <p className="text-white">Send your invoices directly via email or share them on social media platforms.</p>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 flex items-center">
            <BiEdit className="text-white text-4xl mr-4" />
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Interactive Invoices</h2>
              <p className="text-white">Interact with your invoices directly, making edits or sending reminders.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
