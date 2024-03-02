import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='px-[5.5%] py-[24px] flex flex-row justify-between items-center absolute top-0 w-full'>
      <div className='text-xl text-black p-0 md:p-3 rounded-xl border-wid border-black'>
        Ivan Hopkins
      </div>
      <div className='hidden md:flex flex-row gap-10 text-black p-3'>
        <div>About me</div>
        <div>Experience</div>
        <div>Services</div>
        <div>Contact</div>
      </div>

      <button onClick={handleClick} className='flex-col flex md:hidden'>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
        ></span>
      </button>
    </header>
  );
}
