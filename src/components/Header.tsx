import { Link, animateScroll as scroll } from 'react-scroll';

import { useEffect, useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isOpen]);

  return (
    <header
      className={`${
        !show ? 'opacity-0' : 'opacity-100'
      } px-[5.5%] py-[24px] flex flex-row justify-between items-center fixed top-0 w-full transition-all duration-300 ease-in`}
    >
      <div
        className={`text-xl text-white p-0 md:p-3 rounded-xl border-wid border-black font-light`}
      >
        <Link
          activeClass='active'
          to='home'
          spy={true}
          smooth={true}
          duration={700}
        >
          Ivan Hopkins
        </Link>
      </div>
      <div className='hidden md:flex flex-row gap-10 text-white p-3'>
        <div className='opacity-50 hover:opacity-100 transition duration-300 cursor-pointer'>
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            duration={500}
          >
            About me
          </Link>
        </div>
        <div className='opacity-50 hover:opacity-100 transition duration-300 cursor-pointer'>
          <Link
            activeClass='active'
            to='experience'
            spy={true}
            smooth={true}
            duration={500}
          >
            Experience
          </Link>
        </div>
        <div className='opacity-50 hover:opacity-100 transition duration-300 cursor-pointer'>
          <Link
            activeClass='active'
            to='work'
            spy={true}
            smooth={true}
            duration={500}
          >
            Services
          </Link>
        </div>
        <div className='opacity-50 hover:opacity-100 transition duration-300 cursor-pointer'>
          <Link
            activeClass='active'
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </div>
      </div>

      <button
        onClick={handleClick}
        className='flex-col flex md:hidden'
      >
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
        ></span>
      </button>
    </header>
  );
}
