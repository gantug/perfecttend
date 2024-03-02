export default function Hero() {
  return (
    <div className='min-h-screen px-[5.5%] grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20'>
      <div className='flex flex-col gap-10 justify-end md:justify-center items-center md:items-start'>
        <img
          className='w-[200px] h-[200px] object-cover object-top rounded-full'
          src='images/ivan.jpg'
        />

        <div className='text-2xl md:text-6xl text-black text-center md:text-left '>
          Hello! I'm Ivan Hopkins
        </div>
      </div>
      <div className='flex flex-col gap-10 justify-start md:justify-center items-center md:items-start'>
        <div className=' text-xl md:text-4xl text-black text-center md:text-left'>
          An intuitor based in Ulaanbaatar, Mongolia
        </div>
        <div className='text-sm md:text-xl text-[#959594] text-center md:text-left'>
          Helping you uncover your inner tutor and perfectly attend to what
          matters.
        </div>
        <div className='flex flex-row gap-5'>
          <div className='text-white py-3 px-4 bg-black rounded-xl'>
            Talk with me
          </div>

          <div className='text-black py-3 px-4 bg-transparent border border-black rounded-xl'>
            See my work
          </div>
        </div>
      </div>
    </div>
  );
}
