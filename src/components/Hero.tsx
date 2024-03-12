export default function Hero() {
  return (
    <div
      className='min-h-screen bg-[#09124E] px-[5.5%] flex flex-col justify-center items-center gap-5'
      id='home'
    >
      <div className='flex flex-col gap-10 justify-end md:justify-center items-center md:items-start'>
        <img
          className='w-[300px] h-[300px] object-cover object-center rounded-full m-auto'
          src='images/selfie.jpeg'
        />

        <div
          className={`text-2xl md:text-6xl text-white text-center md:text-left`}
        >
          Hello! I'm Ivan Hopkins
        </div>
      </div>
      <div className='flex flex-col gap-10 justify-center items-center mt- '>
        {/* <div className='text-xl md:text-2xl text-white text-center md:text-center font-light'>
          The InTutor
        </div> */}
        <div className='text-sm md:text-xl text-[#E1E2F5] text-center md:text-center font-light'>
          Helping you unleash your inner potential.
        </div>
        <div className='flex flex-row gap-5'>
          <div className='text-white py-3 px-4 bg-[#3F5DCC] rounded-xl font-light'>
            Talk with me
          </div>

          <div className='text-white py-3 px-4 bg-transparent border border-white rounded-xl font-light'>
            See my work
          </div>
        </div>
      </div>
    </div>
  );
}
