import {
  CiChat1,
  CiRead,
  CiSettings,
  CiUser,
  CiViewTable,
  CiVoicemail,
} from 'react-icons/ci';
import Link from 'next/link';

export default function Works() {
  return (
    <div
      className='min-h-screen bg-gradient-to-b from-[#09124E]  to-black px-[5.5%] flex flex-col justify-center py-[64px] md:py-0'
      id='work'
    >
      <h2 className='text-4xl text-white mb-10'>Services</h2>

      <div className='h-full grid grid-cols-1 md:grid-cols-3 gap-10'>
        <Link href='/works/one-to-one-session'>
          <div className='p-5 rounded-xl h-[250px] text-white text-center transition duration-300 hover:border-white border border-gray-600 flex flex-col justify-center items-center gap-5 cursor-pointer'>
            <CiVoicemail className='text-white w-full h-full max-w-[100px] max-h-[100px]' />
            <div className='font-light'>
              Zoom or in person: One-to-one session
            </div>
          </div>
        </Link>

        <Link href='/works/performance-and-mindfulness'>
          <div className='p-5 rounded-xl h-[250px] text-white text-center transition duration-300 hover:border-white border border-gray-600 flex flex-col justify-center items-center gap-5 cursor-pointer'>
            <CiViewTable className='text-white w-full h-full max-w-[100px] max-h-[100px]' />
            <div className='font-light'>
              Performance and mindfulness workshops
            </div>
          </div>
        </Link>

        <div className='p-5 rounded-xl h-[250px] text-white text-center transition duration-300 hover:border-white border border-gray-600 flex flex-col justify-center items-center gap-5 cursor-not-allowed'>
          <CiUser className='text-white w-full h-full max-w-[100px] max-h-[100px]' />
          <div className='font-light'>Guest lecturer</div>
        </div>

        <Link href='/works/corporate-training'>
          <div className='p-5 rounded-xl h-[250px] text-white text-center transition duration-300 hover:border-white border border-gray-600 flex flex-col justify-center items-center gap-5 cursor-pointer'>
            <CiSettings className='text-white w-full h-full max-w-[100px] max-h-[100px]' />
            <div className='font-light'>Corporate training & coaching</div>
          </div>
        </Link>

        <Link href='/works/i-factor'>
          <div className='p-5 rounded-xl h-[250px] text-white text-center transition duration-300 hover:border-white border border-gray-600 flex flex-col justify-center items-center gap-5 cursor-pointer'>
            <CiRead className='text-white w-full h-full max-w-[100px] max-h-[100px]' />
            <div className='font-light'>The "I" factor programme</div>
          </div>
        </Link>

        <Link href='/works/corporate-fee'>
          <div className='p-5 rounded-xl h-[250px] text-white text-center transition duration-300 hover:border-white border border-gray-600 flex flex-col justify-center items-center gap-5 cursor-pointer'>
            <CiChat1 className='text-white w-full h-full max-w-[100px] max-h-[100px]' />
            <div className='font-light'>Corporate coaching fee</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
