import { EmailTemplate } from "@/components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request){
    try {
        const {email, invoiceUrl} =await request.json();
        const data = await resend.emails.send({
            from: 'Billwise <onboarding@resend.dev>',
            to: [email],
            subject: 'New Invoice form Billwise Invoice',
            react: EmailTemplate({ invoiceUrl }),
          });
      
          console.log(data);
          return Response.json(data);

        
    } catch (error) {
        
        console.log(error);
        return NextResponse.json({error}, {status: 500})
    }

}