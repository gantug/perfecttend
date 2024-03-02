export default function Header() {
  return (
    <header className='px-[5.5%] py-[24px] flex flex-row justify-between absolute top-0 w-full'>
      <div className='text-2xl font-thin text-black'>Ivan Hopkins</div>
      <div className='flex flex-row gap-10 text-black'>
        <div>About me</div>
        <div>Experience</div>
        <div>Works</div>
        <div>Contact</div>
      </div>
    </header>
  );
}
