import { Link } from 'react-scroll';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const MOBILE_NAV_ITEMS = [
    {
      id: 0,
      navTitle: 'About',
      link: '/about',
    },
    {
      id: 1,
      navTitle: 'Projects',
      link: '/projects',
    },
    {
      id: 3,
      navTitle: 'Available for freelance',
      link: '/contact',
    },
  ];

  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };

  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };

  const liVariant = {
    opened: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.65,
        ease: 'easeOut',
      },
    },
    closed: {
      opacity: 0,
      y: '100%',
      transition: {
        duration: 0.25,
        ease: 'easeInOut',
      },
    },
  };

  const mobileMenuVariant = {
    opened: {
      y: '0%',
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: '-100%',
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
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
        className={`text-xl cursor-pointer text-white p-0 md:p-3 border-black font-light`}
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
            to='videos'
            spy={true}
            smooth={true}
            duration={500}
          >
            Videos
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

      <div className='md:hidden block'>
        <motion.nav
          initial='closed'
          animate={isOpen ? 'opened' : 'closed'}
        >
          <motion.div
            variants={mobileMenuVariant}
            className='fixed top-0 left-0 min-h-screen w-full flex flex-col justify-between items-center bg-black z-50'
          >
            <div
              className={` ${
                !show ? 'opacity-0' : 'opacity-100'
              } px-[5.5%] py-[24px] flex flex-row justify-between items-center fixed top-0 w-full transition-all duration-300 ease-in`}
            >
              <div className='text-xl cursor-pointer text-white p-0 md:p-3 border-black font-light'>
                <Link
                  activeClass='active'
                  to='home'
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <motion.button
                    variants={fadeInVariant}
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{ duration: 1 }}
                    // exit={{ opacity: 0 }}
                    className='img-container'
                  >
                    Ivan Hopkins
                  </motion.button>
                </Link>
              </div>

              <motion.button
                variants={fadeInVariant}
                onClick={() => setIsOpen(false)}
                className='flex-col flex md:hidden'
              >
                <span
                  className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                ></span>
                <span
                  className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
                ></span>
              </motion.button>
            </div>
            <div className='w-full text-white mt-[7rem] px-5'>
              <motion.ul
                variants={ulVariant}
                className={` flex flex-col h-full justify-center items-center min-h-[500px] gap-5 capitalize text-[16px] font-light`}
              >
                {MOBILE_NAV_ITEMS.map((navItem) => (
                  <motion.li
                    whileTap={{ scale: 0.95 }}
                    key={navItem.id}
                  >
                    {/* <Link href={navItem.link}> */}
                    <motion.div variants={liVariant}>
                      {navItem.navTitle}
                    </motion.div>
                    {/* </Link> */}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </motion.nav>
      </div>

      {/* <button
        onClick={handleClick}
        className='flex-col flex md:hidden w-fit'
      >
        <span
          className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
                      isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
                      isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`}
        ></span>
      </button> */}
    </header>
  );
}
