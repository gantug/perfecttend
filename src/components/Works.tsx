import {
  CiChat1,
  CiRead,
  CiSettings,
  CiUser,
  CiViewTable,
  CiVoicemail,
} from 'react-icons/ci';

export default function Works() {
  return (
    <div
      className='min-h-screen bg-gradient-to-b from-[#09124E]  to-black px-[5.5%] flex flex-col justify-center py-[64px] md:py-0'
      id='work'
    >
      <div className='text-4xl text-white mb-10'>Services</div>

      <div className='h-full grid grid-cols-1 md:grid-cols-3 gap-10'>
        <div className='p-5 rounded-xl h-[250px] text-white text-center border border-gray-600 flex flex-col justify-center items-center gap-5 cursor-pointer'>
          <CiVoicemail className='text-white w-full h-full max-w-[100px] max-h-[100px]' />
          <div className='font-light'>
            Zoom or in person: One-to-one session
          </div>
        </div>

        <div className='p-5 rounded-xl h-[250px] text-white text-center border border-gray-600 flex flex-col justify-center items-center gap-5 cursor-pointer'>
          <CiViewTable className='text-white w-full h-full max-w-[100px] max-h-[100px]' />
          <div className='font-light'>
            Performance and mindfulness workshops
          </div>
        </div>

        <div className='p-5 rounded-xl h-[250px] text-white text-center border border-gray-600 flex flex-col justify-center items-center gap-5 cursor-pointer'>
          <CiUser className='text-white w-full h-full max-w-[100px] max-h-[100px]' />
          <div className='font-light'>Guest lecture</div>
        </div>

        <div className='p-5 rounded-xl h-[250px] text-white text-center border border-gray-600 flex flex-col justify-center items-center gap-5 cursor-pointer'>
          <CiSettings className='text-white w-full h-full max-w-[100px] max-h-[100px]' />
          <div className='font-light'>Corporate training & coaching</div>
        </div>

        <div className='p-5 rounded-xl h-[250px] text-white text-center border border-gray-600 flex flex-col justify-center items-center gap-5 cursor-pointer'>
          <CiRead className='text-white w-full h-full max-w-[100px] max-h-[100px]' />
          <div className='font-light'>The "I" factor programme</div>
        </div>

        <div className='p-5 rounded-xl h-[250px] text-white text-center border border-gray-600 flex flex-col justify-center items-center gap-5 cursor-pointer'>
          <CiChat1 className='text-white w-full h-full max-w-[100px] max-h-[100px]' />
          <div className='font-light'>Corporate coaching fee</div>
        </div>
      </div>
    </div>
  );
}
