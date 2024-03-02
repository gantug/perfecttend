export default function Footer() {
  return (
    <footer className='px-[5.5%] py-[24px] flex flex-row justify-between items-center w-full text-black border'>
      <div className='text-md md:text-xl text-black p-3 rounded-xl border-wid border-black'>
        © 2024 Ivan Hopkins, all rights reserved.
      </div>
      <div className='hidden md:flex flex-col md:flex-row gap-5 md:gap-10 text-black p-3'>
        <div>Email</div>
        <div>LinkedIn</div>
        <div>Telegram</div>
      </div>
    </footer>
  );
}
