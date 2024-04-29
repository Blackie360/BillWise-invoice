"use client";
import { getInvoiceById } from '@/app/libs/getInvoiceById';
import Buttons from '@/components/Buttons';
import FormPreview from '@/components/FormPreview';
import Loading from '@/components/Loading';
import React, { useEffect, useState } from 'react';
import { FaPrint } from 'react-icons/fa';
import { IoSaveSharp } from 'react-icons/io5';

const InvoicePage = ({ params: { id } }: { params: { id: string } }) => {
  const [loading, setLoading] = useState(true);
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    const fetchInvoice = async () => {
      const invoiceData = await getInvoiceById(id);
      setInvoice(invoiceData);
      setLoading(false);
    };
    fetchInvoice();
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='my-4'>
     <div className="">
     <Buttons />
     </div>
      <div className="">
        <FormPreview data={invoice} />
      </div>
    </div>
  );
};

export default InvoicePage;
