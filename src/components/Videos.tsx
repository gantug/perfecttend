import {
  CiChat1,
  CiRead,
  CiSettings,
  CiUser,
  CiViewTable,
  CiVoicemail,
} from 'react-icons/ci';
import Link from 'next/link';

export default function Videos() {
  return (
    <div
      className='min-h-screen bg-black px-[5.5%] flex flex-col justify-center py-[64px] md:py-0'
      id='videos'
    >
      <h2 className='text-4xl text-white mb-10'>Ivan's videos</h2>

      <div className='h-full grid grid-cols-1 md:grid-cols-3 gap-10'>
        <Link
          href={'https://youtu.be/YEUFX349irw?si=1eRFZqSZvOyy71BM'}
          target='_blank'
        >
          <div className='p-5 rounded-xl min-h-[250px] text-white text-center transition duration-300 hover:border-white border border-gray-600 flex flex-col justify-center items-center gap-5 cursor-pointer'>
            <iframe
              className='w-full h-full min-h-[250px] border rounded-xl border-none'
              src='https://www.youtube.com/embed/YEUFX349irw?si=1eRFZqSZvOyy71BM'
            ></iframe>
            <div className='font-light'>Intro and Background video</div>
          </div>
        </Link>

        <Link
          href={'https://youtu.be/GAAJ4P2g5oc'}
          target='_blank'
        >
          <div className='p-5 rounded-xl min-h-[250px] text-white text-center transition duration-300 hover:border-white border border-gray-600 flex flex-col justify-center items-center gap-5 cursor-pointer'>
            <iframe
              className='w-full h-full min-h-[250px] border rounded-xl border-none'
              src='https://www.youtube.com/embed/GAAJ4P2g5oc?si=TGnPOJYSJ7IyVzJO'
            ></iframe>
            <div className='font-light'>Human Technology My Vision</div>
          </div>
        </Link>
        <Link
          href={'https://youtu.be/x0s2mZ9qCEs?si=hofdo6SsTNOoDJsj'}
          target='_blank'
        >
          <div className='p-5 rounded-xl min-h-[250px] text-white text-center transition duration-300 hover:border-white border border-gray-600 flex flex-col justify-center items-center gap-5 cursor-pointer'>
            <iframe
              className='w-full h-full min-h-[250px] border rounded-xl border-none'
              src='https://www.youtube.com/embed/x0s2mZ9qCEs?si=hofdo6SsTNOoDJsj'
            ></iframe>
            <div className='font-light'>
              The 2 Prerequisites for Taping into your Inner Tutor
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
