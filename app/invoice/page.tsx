"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { getInvoices } from '../libs/getInvoices';
import Loading from '@/components/Loading';

const Page = () => {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchInvoices = async () => {
      const invoicesData = await getInvoices();
      setInvoices(invoicesData);
      setLoading(false); 
    };
    fetchInvoices();
  }, []);

  if (loading) {
    return <Loading />; // Show loading component while fetching invoices
  }

  return (
    <div className="container max-w-4xl mx-auto mt-16 rounded-lg bg-white text-black font-semibold text-2xl ">
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Your Invoices ({invoices.length})</div>
        <Link
          href="/invoice/new"
          className='focus:outline-none text-white mt-2 bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
        >
          Create Invoice 
        </Link>
      </div>
      <div className="overflow-x-auto shadow-md rounded-lg bg-white">
        <table className="w-full text-sm text-left bg-cover bg-center" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2017/03/08/14/20/flat-2126884_640.png")' }}>
          <thead className="text-xs uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Client Company
              </th>
              <th scope="col" className="px-6 py-3">
                Invoice Date
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">View Invoice</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => {
              const options = { year: 'numeric', month: 'long', day: 'numeric' };
              const invoiceDate = new Date(invoice.invoiceDate).toLocaleDateString(undefined, options);
              return (
                <React.Fragment key={invoice.id}>
                  <tr>
                    <td className="px-6 py-4">{invoice.id}</td>
                    <td className="px-6 py-4">{invoice.clientCompany}</td>
                    <td className="px-6 py-4">{invoiceDate}</td>
                    <td className="px-6 py-4 text-right">
                      <a href={`/invoice/${invoice.id}`}>
                        <a className="font-medium text-orange-600 text-xl hover:underline">View</a>
                      </a>
                    </td>
                  </tr>
                  {index !== invoices.length - 1 && <tr><td colSpan="4" className="border-b"></td></tr>}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
