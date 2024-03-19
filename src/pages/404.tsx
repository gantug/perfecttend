import { Poppins } from 'next/font/google';
import { NextSeo } from 'next-seo';
import Error from '@/components/Error';

const poppin = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function Home() {
  return (
    <main className={`min-h-screen bg-white  ${poppin.className} relative`}>
      <NextSeo noindex={true} />
      <Error />
    </main>
  );
}
