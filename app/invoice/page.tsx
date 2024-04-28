"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { getInvoices } from '../libs/getInvoices';

const Page = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      const invoicesData = await getInvoices();
      setInvoices(invoicesData);
    };
    fetchInvoices();
  }, []);

  return (
    <div className="container max-w-4xl mx-auto mt-16 rounded-lg bg-white text-black ">
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
        <table className="w-full text-sm text-left">
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
            {invoices.map((invoice) => {
              const options = { year: 'numeric', month: 'long', day: 'numeric' };
              const invoiceDate = new Date(invoice.invoiceDate).toLocaleDateString(undefined, options);
              return (
                <tr key={invoice.id}>
                  <td className="px-6 py-4">{invoice.id}</td>
                  <td className="px-6 py-4">{invoice.clientCompany}</td>
                  <td className="px-6 py-4">{invoiceDate}</td>
                  <td className="px-6 py-4 text-right">
                    <a href={`/invoice/${invoice.id}`} className="font-medium text-blue-600 hover:underline">
                      view
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
