import Image from 'next/image';
import { Poppins, Truculenta } from 'next/font/google';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

import { ToastContainer, toast } from 'react-toastify';

const poppin = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Home() {
  return (
    <main className={`min-h-screen bg-white  ${poppin.className} relative`}>
      <Header />
      <Hero />
      <About />
      <Experience />
      <Works />
      <Contact />
      <Footer />
      <ToastContainer />
    </main>
  );
}
