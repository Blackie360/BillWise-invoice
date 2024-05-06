import InvoiceImage from "../public/images/invoice-template.jpg";
import ThemeLink from "./ThemeLink";

export default function InvoiceCTA() {
  return (
    <div className="invoice-cta flex items-center justify-center ">
      <div className="py-24 px-16 bg-white shadow-2xl rounded-md ">
        <ThemeLink
          className="bg-orange-600 hover:bg-orange-700 focus:ring-orange-300"
          title="Create your first Invoice"
          href="/invoice/new"
        />
      </div>
    </div>
  );
}
