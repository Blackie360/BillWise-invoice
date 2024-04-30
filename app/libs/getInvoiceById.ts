export async function getInvoiceById(id: string) {
    const request = await fetch(`http://localhost:3000/api/invoice/${id}`,
    {
        cache: "no-store",
    });
    const invoice= await request.json();
    return invoice;
    
}