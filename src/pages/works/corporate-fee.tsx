import GoBack from '@/components/utils/GoBack';
import { useRouter } from 'next/router';
import { SlArrowLeft } from 'react-icons/sl';

export default function Works() {
  const router = useRouter();

  return (
    <div
      className='min-h-screen bg-gradient-to-b from-[#09124E]  to-black px-[5.5%] flex flex-col  py-[64px] md:py-0'
      id='work'
    >
      <div className='flex flex-col gap-10 md:mt-[5rem]'>
        <GoBack linkHref='#work' />
        <h1 className='text-xl md:text-4xl text-green-400 mb-10 font-bold'>
          Corporate coaching fee
        </h1>
      </div>

      <div className='flex flex-col gap-5 font-light text-white'>
        <p>
          The fee is discussed with management and is based on a number of
          factors including number of staff etc.
        </p>
        <p>
          Ivan has a background in business as well as being an occupational
          psychologist and performance coach. He has provided stress management
          training, workshops in positive psychology and positive psychology
          coaching to a variety of organisations including :
        </p>

        <ul className='list-disc ml-5 text-white'>
          <li>Hunnu Coal</li>
          <li>USP</li>
          <li>Blayney Blades</li>
          <li>Women’s Groups</li>
          <li>ESP Foundation</li>
          <li>Toastmasters</li>
          <li>Universities and Schools</li>
          <li>The National Cancer Center</li>
          <li>Olympic Committee</li>
        </ul>
      </div>
    </div>
  );
}
