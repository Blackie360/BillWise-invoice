export async function getInvoices(userId) {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const request = await fetch(`${baseUrl}/api/invoice?userId=${userId}`,{
        cache: "no-store",
    });
    const invoices= await request.json();
    return invoices;
    
}