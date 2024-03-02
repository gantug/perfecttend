export default function Contact() {
  return (
    <div className='min-h-screen px-[5.5%] py-[5.5%] flex flex-col justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-0'>
        <div className='h-full'>
          <div className='text-6xl text-black mb-10 font-medium'>
            Let's work together!
          </div>
          <div className='text-xl text-black'>
            Let me help you become even greater at what you do. <br />
            Fill out following form and we will get back to you in the next 24
            hours.
          </div>
        </div>

        <div className='flex flex-col gap-10'>
          <div className='flex flex-col'>
            <label className='text-black mb-2'>What's your name?</label>
            <input
              type='text'
              name='name'
              placeholder='Type your full name'
              className='w-full px-0 py-2 border-b border-gray-400 outline-none text-black  focus:border-gray-400'
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-black mb-2'>What's your email?</label>
            <input
              type='text'
              name='name'
              placeholder='Type your email'
              className='w-full px-0 py-2 border-b border-gray-400 outline-none text-black  focus:border-gray-400'
            />
          </div>

          <div className='flex flex-col'>
            <label className='text-black mb-2'>What's your message?</label>
            <input
              type='text'
              name='name'
              placeholder='Type your message'
              className='w-full px-0 py-2 border-b border-gray-400 outline-none text-black  focus:border-gray-400'
            />
          </div>

          <div className='text-black py-3 px-5 rounded-xl border border-black w-fit cursor-pointer'>
            Send a message
          </div>
        </div>
      </div>
    </div>
  );
}
