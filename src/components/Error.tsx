import Link from 'next/link';

export default function Error() {
  return (
    <div
      className=' min-h-screen bg-black px-[5.5%] flex flex-col justify-center items-center gap-5'
      id='home'
    >
      <div className='flex flex-col gap-10 justify-end md:justify-center items-center md:items-start'>
        <h1
          className={`text-2xl md:text-6xl text-white text-center md:text-left`}
        >
          Page has not found.
        </h1>
      </div>
      <div className='flex flex-col gap-10 justify-center items-center mt- '>
        <p className='text-sm md:text-xl text-[#E1E2F5] text-center md:text-center font-light'>
          Uh-oh! Looks like this page is missing. Please check the URL or head
          back to the homepage. Thanks!
        </p>
        <div className='flex flex-row gap-5'>
          <div className='text-white py-3 px-4 bg-[#3F5DCC] rounded-xl font-light cursor-pointer'>
            <Link href='/'>Go back to homepage</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
