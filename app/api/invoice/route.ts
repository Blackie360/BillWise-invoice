import db from "@/app/libs/db";
import { NextResponse } from "next/server";
const { createHash } = require('crypto');


export async function POST(request) {
    
    try {
        const { invoiceData, tableData } = await request.json();
        console.log(invoiceData, tableData);

        // Add a default empty string value for postalCode if it doesn't exist
        if (!invoiceData.postalCode) {
            invoiceData.postalCode = "";
        }
        

        //create invoice using invoiceData
        const invoice = await db.invoice.create({
            data:{
                userId:invoiceData.userId,
                company: invoiceData.company,
                name: invoiceData.name,
                companyAddress: invoiceData.companyAddress,
                city: invoiceData.city,
                country: invoiceData.country,
                clientCompany: invoiceData.clientCompany,
                clientAddress: invoiceData.clientAddress,
                clientCity: invoiceData.clientCity,
                clientPostalCode: invoiceData.clientPostalCode,
                clientCountry: invoiceData.clientCountry,
                invoiceNumber: invoiceData.invoiceNumber,
                invoiceDate: `${invoiceData.invoiceDate}T00:00:00.000Z`,
                dueDate: `${invoiceData.dueDate}T00:00:00.000Z`,
                logoUrl: invoiceData.logoUrl,
                notes: invoiceData.notes,
                terms: invoiceData.terms,  
            }
        });

        //table rows
        const rowsPromise = tableData.map(async (rowData: { itemDescription: any; qty: string; unitPrice: string; tax: string; amount: string; }) => {
            const row = await db.row.create({
                data:{
                    invoiceId: invoice.id,
                    itemDescription: rowData.itemDescription,
                    qty: parseInt(rowData.qty),
                    unitPrice: parseFloat(rowData.unitPrice),
                    tax: parseFloat(rowData.tax),
                    amount: parseFloat(rowData.amount),
                },
            });
            return row;
        });

        // Use Promise.all to await all row creation promises
        const rows = await Promise.all(rowsPromise);
        console.log(invoice, rows);
        const data={
            invoice,
            rows,
        }

        return NextResponse.json(data, {status: 201});
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error
        }, {status: 500});
    }

}
export async function GET(request, response) {
  try {
    const userId = request.nextUrl.searchParams.get("userId");
    console.log(`The userId is${userId}`);
    const invoices = await db.invoice.findMany({
      include: {
        tableData: true,
      },
      where: { userId },
    });
    // console.log(invoices);
    return response.json(invoices);
  } catch (error) {
    // console.log(error);
    return response.json(
      {
        message: "Failed to fetch invoices",
        error,
      },
      { status: 500 }
    );
  }
}
