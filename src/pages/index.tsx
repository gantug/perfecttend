import Image from 'next/image';
import { Poppins } from 'next/font/google';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

const poppin = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Home() {
  return (
    <main className={`min-h-screen bg-white  ${poppin.className} relative`}>
      <Header />
      <Hero />
    </main>
  );
}
