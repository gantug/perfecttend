export default function Experience() {
  return (
    <div
      className='bg-gradient-to-b from-[#11247C] to-[#09124E] min-h-screen px-[5.5%] flex flex-col justify-center'
      id='experience'
    >
      <div className='h-full grid py-20 md:py-0 grid-cols-1 md:grid-cols-2 gap-20'>
        <div className='flex flex-col '>
          <div className='text-4xl text-white mb-10'>Experience</div>
          <div className='flex flex-col divide-y'>
            <div className='flex flex-col pb-5'>
              <div className='text-md md:text-xl text-white font-light'>
                MNEMONICS and Rapid learning techniques
              </div>
              <div className='text-sm text-[#C8CBD9] font-light'>
                February 2001 - February 2003
              </div>
            </div>

            <div className='flex flex-col gap-2 py-5 font-light'>
              <div className='text-md md:text-xl text-white'>
                In house sales and Marketing Training
              </div>
              <div className='text-sm text-[#C8CBD9]'>
                January 2006 - January 2009
              </div>
            </div>

            <div className='flex flex-col gap-2 py-5 font-light'>
              <div className='text-md md:text-xl text-white'>
                Esoteric training in concentration and advanced mindfulness
              </div>
              <div className='text-sm text-[#C8CBD9]'>June 2004 - Present</div>
            </div>

            <div className='flex flex-col gap-2 py-5 font-light'>
              <div className='text-md md:text-xl text-white'>
                Member of the PPA (Parapsychology association)
              </div>
              <div className='text-sm text-[#C8CBD9]'>June 2007 - Present</div>
            </div>

            <div className='flex flex-col gap-2 py-5 font-light'>
              <div className='text-md md:text-xl text-white'>
                Member of the memory league
              </div>
              <div className='text-sm text-[#C8CBD9]'>
                Current ranking: 105 out of 5000 members
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col '>
          <div className='text-4xl text-white mb-10'>Expertise</div>
          <div className='flex flex-col divide-y'>
            <div className='flex flex-col pb-5'>
              <div className='text-md md:text-xl text-white'>
                Honours Bsc Degree in Psychology
              </div>
              <div className='text-sm text-[#C8CBD9] font-light'>
                University of Wales, Bangor, United Kingdom, Spring 2003 -
                Spring 2006
              </div>
            </div>

            <div className='flex flex-col gap-2 py-5 font-light'>
              <div className='text-md md:text-xl text-white'>
                Photoreading certificate
              </div>
              <div className='text-sm text-[#C8CBD9]'>London, 2004</div>
            </div>

            <div className='flex flex-col gap-2 py-5 font-light'>
              <div className='text-md md:text-xl text-white'>
                Applied positive psychology coaching diploma
              </div>
              <div className='text-sm text-[#C8CBD9]'>Dublin, 2012 - 2013</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
