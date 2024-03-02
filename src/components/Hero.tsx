export default function Hero() {
  return (
    <div className='min-h-screen px-[5.5%] grid grid-cols-2'>
      <div className='flex flex-col justify-center gap-5'>
        <div className='text-black text-4xl'>
          Hello, my name is <span className='text-[#0D008A]'>Ivan Hopkins</span>{' '}
          / Intuitor
        </div>
        <div className='text-black text-xl'>
          Helping you uncover your inner tutor and perfectly attend to what
          matters.
        </div>
      </div>
      <div className='h-full flex flex-col justify-center align-center'>
        <img
          src='images/portrait.jpeg'
          className='w-[500px] h-[500px] object-cover object-top m-auto rounded-full  border-4'
        />
      </div>
    </div>
  );
}
