import FAQ from "@/components/FAQ";
import Features from "@/components/Features";

import Hero from "@/components/Hero";
import InvoiceCTA from "@/components/InvoiceCTA";
import Navbar from "@/components/Navbar";
import Price from "@/components/Price";
import Steps from "@/components/Steps";

export default function Home() {
  return (
    <div>
      
      <Hero />
      <Steps />
      <InvoiceCTA />
      <Features />
      <Price />
      {/* <FAQ /> */}
    </div>
  )
}