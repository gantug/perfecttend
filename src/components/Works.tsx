export default function Works() {
  return (
    <div className='min-h-screen bg-[#F5F4F1] px-[5.5%] flex flex-col justify-center'>
      <div className='text-4xl text-black mb-10'>Services</div>

      <div className='h-full grid grid-cols-1 md:grid-cols-3 gap-10'>
        <div className='p-5 rounded-xl text-black text-center border border-black'>
          Zoom or in person: One-to-one session
        </div>

        <div className='p-5 rounded-xl text-black text-center border border-black'>
          Performance and mindfulness workshops
        </div>

        <div className='p-5 rounded-xl text-black text-center border border-black'>
          Corporate traning workshop
        </div>

        <div className='p-5 rounded-xl text-black text-center border border-black'>
          Corporate training & coaching
        </div>

        <div className='p-5 rounded-xl text-black text-center border border-black'>
          The "I" factor programme
        </div>
        <div className='p-5 rounded-xl text-black text-center border border-black'>
          Corporate coaching fee
        </div>
      </div>
    </div>
  );
}
