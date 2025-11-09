import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntutorProgram from "@/components/IntutorProgram";
import PaymentSection from "@/components/Payment";
import Videos from "@/components/Videos";
import Works from "@/components/Works";
import { NextSeo } from "next-seo";
import { Poppins } from "next/font/google";

import { ToastContainer } from "react-toastify";

const poppin = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={`min-h-screen bg-white  ${poppin.className} relative`}>
      <NextSeo
        title="Ivan Hopkins | The Attention Trainer"
        description="Your intuitor helping you uncover your latent and inner power."
        openGraph={{
          url: "https://www.perfecttend.com/",
          title: "Ivan Hopkins | The Attention Trainer",
          description:
            "Your intuitor helping you uncover your latent and inner power.",
          images: [
            {
              url: "https://www.perfecttend.com/images/ivan-edited.jpg",
              width: 200,
              height: 200,
              alt: "Ivan Hopkins Portrait",
              type: "image/jpeg",
            },
          ],
          siteName: "Ivan Hopkins",
        }}
      />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Works />
      <IntutorProgram />
      <PaymentSection
        accountHolder="Ivan Hopkins"
        bic="BOFIIE2DXXX"
        iban="IE87 BOFI 9032 6980 0042 70"
        bankName="Bank of Ireland"
        note="Include your description in the transfer reference."
      />
      <Videos />
      <Contact />
      <Footer />
      <ToastContainer />
    </main>
  );
}
