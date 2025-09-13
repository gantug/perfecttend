import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
              url: "images/ivans.jpeg",
              width: 600,
              height: 800,
              alt: "Ivan Hopkins Portrait",
              type: "image/jpeg",
            },
          ],
          siteName: "Ivan Hopkins",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Works />
      <Videos />
      <Contact />
      <Footer />
      <ToastContainer />
    </main>
  );
}
