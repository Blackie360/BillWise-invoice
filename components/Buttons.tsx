"use client";
import React, { useRef, useState } from 'react';
import { FaPrint } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useReactToPrint } from 'react-to-print';

const Buttons = () => {
    const invoiceRef = useRef();
    const [showForm, setShowForm] = useState(false);
    const[email, setEmail] = useState('');

    const handleSendClick = () => {
        setShowForm(true);
    };
    async function handleSendMail(e) {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className='container mx-auto py-4 px-8 flex flex-col lg:flex-row justify-between items-center mb-6'>
            <div className="flex justify-between w-full">
                <button className="flex items-center space-x-2 px-3 py-2 shadow rounded-sm border border-slate-600">
                    <FaPrint />
                    <span className="hidden lg:inline">Print/Download</span>
                </button>

                {showForm ? (
                    <form onSubmit={handleSendMail} className="flex items-center gap-4">
                        <div className="relative flex-1">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                </svg>
                            </div>
                            <input onChange={(e)=>setEmail(e.target.value)} 
                            value={email}
                            type="text" id="input-group-1" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="name@gmail.com"/>
                        </div>
                        <button 
                            type='submit'
                            className="flex text-orange-600 font-semibold items-center space-x-2 px-3 py-2 shadow rounded-sm border border-purple-600">
                            <MdEmail />
                            <span className="hidden lg:inline">Send</span>
                        </button>
                    </form>
                ) : (
                    <button 
                        onClick={handleSendClick}
                        className="flex text-red-600 font-semibold items-center space-x-2 px-3 py-2 shadow rounded-sm border border-purple-600">
                        <MdEmail />
                        <span className="hidden lg:inline">Send Invoice</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Buttons;
