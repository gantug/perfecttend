import { Link } from 'react-scroll';

export default function Hero() {
  return (
    <div
      className='min-h-screen bg-[#09124E] px-[5.5%] flex flex-col justify-center items-center gap-5'
      id='home'
    >
      <div className='flex flex-col gap-10 justify-end md:justify-center items-center md:items-start'>
        <img
          className='w-[300px] h-[300px] object-cover object-top rounded-full m-auto'
          src='images/ivans.jpeg'
        />

        <h1
          className={`text-4xl md:text-6xl text-white text-center md:text-left`}
        >
          Meet <span className='capitalize font-bold'>"The Intuitor"</span>
        </h1>
      </div>
      <div className='flex flex-col gap-10 justify-center items-center mt- '>
        {/* <div className='text-xl md:text-2xl text-white text-center md:text-center font-light'>
          The InTutor
        </div> */}
        <p className='text-sm md:text-xl text-[#E1E2F5] text-center md:text-center font-light'>
          Your intuitor helping you uncover your latent and inner power.
        </p>
        <div className='flex flex-row gap-5'>
          <div className='text-white py-3 px-4 bg-[#3F5DCC] rounded-xl font-light cursor-pointer'>
            <Link
              activeClass='active'
              to='contact'
              spy={true}
              smooth={true}
              duration={500}
            >
              Talk with Ivan
            </Link>
          </div>

          <div className='text-white py-3 px-4 bg-transparent border border-white rounded-xl font-light cursor-pointer'>
            <Link
              activeClass='active'
              to='work'
              spy={true}
              smooth={true}
              duration={500}
            >
              See Ivan's works
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
