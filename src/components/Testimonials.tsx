import {
  CiChat1,
  CiRead,
  CiSettings,
  CiUser,
  CiViewTable,
  CiVoicemail,
} from 'react-icons/ci';
import Link from 'next/link';

export default function Testimonials() {
  return (
    <div
      className='min-h-screen bg-black px-[5.5%] flex flex-col justify-center py-[64px] md:py-0'
      id='videos'
    >
      <h2 className='text-4xl text-white mb-10'>Ivan's videos</h2>

      <div className='h-full grid grid-cols-1 md:grid-cols-3 gap-10'></div>
    </div>
  );
}
