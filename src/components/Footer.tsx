export default function Footer() {
  return (
    <footer className="px-[5.5%] py-[24px] flex flex-row justify-between items-center w-full text-white bg-[#040617] font-light">
      <div className="text-md md:text-xl  p-3 rounded-xl border-wid border-black">
        © 2025 Ivan Hopkins, all rights reserved.
      </div>
      <div className="hidden md:flex flex-col md:flex-row gap-5 md:gap-10  p-3">
        <a href="mailto:attendtowin@proton.me">
          <div>Email</div>
        </a>
      </div>
    </footer>
  );
}
