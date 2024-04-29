import db from "@/app/libs/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const invoice = await db.invoice.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        tableData: true,
      },
    });
    if (!invoice) {
      return NextResponse.error({
        message: "Invoice not found",
      }, { status: 404 });
    }

    return NextResponse.json(invoice, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.error({
      message: "Error fetching invoice",
      error: error.message,
    }, { status: 500 });
  }
}
