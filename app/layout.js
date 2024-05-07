import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import "../styles/main.scss";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import AuthProvider from "@/context/AuthProvider";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BillWise",
  description: "Make invoices for free and on the go",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <Toaster position="top-right" reverseOrder={false} />
          <Navbar />
          <div className="mt-16">{children}</div>
          <Analytics />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
