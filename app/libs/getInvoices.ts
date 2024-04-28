export async function getInvoices() {
    const request = await fetch("http://localhost:3000/api/invoice",{
        cache: "no-store",
    });
    const invoices= await request.json();
    return invoices;
    
}