"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { MdOutlineFeaturedPlayList } from 'react-icons/md';
import { IoLogIn } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY < 100) {
      setActiveSection('');
    } else if (scrollY >= 100 && scrollY < 600) {
      setActiveSection('features');
    } else if (scrollY >= 600 && scrollY < 1200) {
      setActiveSection('pricing');
    } else if (scrollY >= 1200 && scrollY < 1800) {
      setActiveSection('login');
    } else {
      setActiveSection('register');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
const pathname = usePathname();
if (pathname.startsWith('/invoice/')&&
pathname !== '/invoice/new'
) {
  return null;
}
  return (
    <header className=" text-white">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/" className="font-bold text-xl">
          SwiftInvoice
        </Link>
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <nav className={`md:flex items-center gap-4 ${isMenuOpen ? 'flex flex-col absolute top-16 left-0 w-full bg-gray-700 text-white py-4' : 'hidden'}`}>
          <button className={`flex items-center ${activeSection === 'features' ? 'font-bold' : ''}`}>
            <MdOutlineFeaturedPlayList className="mr-1" />
            Features
          </button>
          <button onClick={() => scrollToSection('pricing')} className={`flex items-center ${activeSection === 'pricing' ? 'font-bold' : ''}`}>
            <RiMoneyDollarCircleFill className="mr-1" />
            Pricing
          </button>
          <button onClick={() => scrollToSection('login')} className={`flex items-center ${activeSection === 'login' ? 'font-bold' : ''}`}>
            <IoLogIn className="mr-1" />
            Login
          </button>
          <button onClick={() => scrollToSection('register')} className={`flex items-center ${activeSection === 'register' ? 'font-bold' : ''}`}>
            <IoLogIn className="mr-1" />
            Register
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
