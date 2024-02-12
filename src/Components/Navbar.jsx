import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/CloufinaLogo.png';
import HamburgerImg from '../assets/Icons/hamburger.png';
import CloseImg from '../assets/Icons/close.png';
import dropdownImd from '../assets/Icons/downward-arrow.png'

// icons sidebar
import HomeImg from '../assets/Icons/home.png';
import AboutImg from '../assets/Icons/information-button.png';
import SolutionsImg from '../assets/Icons/idea.png';
import ClientImg from '../assets/Icons/customer.png';
import CareerImg from '../assets/Icons/career.png';


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleClick = (event) => {
    if (sidebarRef.current && sidebarRef.current.contains(event.target)) {
      // Clicked inside the sidebar
      return;
    }

    // Clicked outside the sidebar
    setSidebarOpen(false);

    // Close dropdown
    setIsOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSubMenuClick = (index) => {
    setActiveSubMenu(index === activeSubMenu ? null : index);
  };

  return (
    <>
      <div
        className={`w-full h-auto fixed z-10 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center p-2">
          {/* Logo */}
          <div className="flex justify-center items-center 2xl:ml-8 xl:ml-8">
            <Link to="/">
              <img src={logoImg} alt="" className="w-44" />
            </Link>
          </div>

          {/* Hamburger Icon */}
          <button
            className="lg:hidden focus:outline-none z-20"
            onClick={toggleSidebar}
          >
            <img
              src={HamburgerImg}
              alt="Hamburger Icon"
              className="w-8 h-8"
            />
          </button>

          {/* Menu (Show on larger screens) */}
          <ul className="hidden lg:flex flex-wrap items-center space-x-8 text-[1rem] font-semibold">
            <li className="hover:text-indigo-500 transform hover:scale-105 transition-transform duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-indigo-500 transform hover:scale-105 transition-transform duration-300">
              <Link to="/about">About</Link>
            </li>
            {/* Solutions Dropdown */}
            <li
              onClick={toggleDropdown}
              className={`relative group ${
                isOpen ? 'text-black' : ''
              }`}
            >
              <Link to="#" className="hover:text-indigo-500 flex justify-center items-center">
                Solutions <span><img src={dropdownImd} alt="" className='w-3 ml-2' /></span>
              </Link>
              {/* Dropdown Content */}
              <ul
                className={`absolute ${
                  isOpen ? 'block' : 'hidden'
                } mt-2 space-y-2 bg-white w-72 border border-gray-300 rounded-md shadow-md`}
              >
                <li className="hover:bg-indigo-100 hover:text-indigo-500 p-3">
                  <Link to="/DigitalLending">Digital Lending</Link>
                </li>
                <li className="hover:bg-indigo-100 hover:text-indigo-500 p-3">
                  <Link to="/CollectionMS">Collection Management System</Link>
                </li>
                <li className="hover:bg-indigo-100 hover:text-indigo-500 p-3">
                  <Link to="/CustodyMS">Custody Management System</Link>
                </li>
                <li className="hover:bg-indigo-100 hover:text-indigo-500 p-3">
                  <Link to="/SLIKRobotic">SLIK Robotic</Link>
                </li>
                <li className="hover:bg-indigo-100 hover:text-indigo-500 p-3">
                  <Link to="/CreditRecovery">Credit Recovery</Link>
                </li>
              </ul>
            </li>
            <li className="hover:text-indigo-500 transform hover:scale-105 transition-transform duration-300">
              <Link to="/ourclient">Our Client</Link>
            </li>
            <li className="hover:text-indigo-500 transform hover:scale-105 transition-transform duration-300">
              <a
                href="https://www.jobstreet.co.id/id/cloufina-jobs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Career
              </a>
            </li>
            <li>
              <Link to="/contact">
                <button className="bg-yellow-500 p-2 shadow-sm shadow-red-600 rounded-br-xl text-white hover:bg-red-700 transform hover:scale-105 transition-transform duration-300">
                  Request Demo
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed z-10 top-0 right-0 h-full w-64 md:w-80 bg-white ${sidebarOpen ? 'block' : 'hidden'}`} ref={sidebarRef}>
        {/* Hamburger Icon Inside Sidebar */}
        <button
          className="lg:hidden focus:outline-none z-20 flex items-end justify-end ml-auto p-3"
          onClick={toggleSidebar}
        >
          <img
            src={CloseImg}
            alt="Hamburger Icon"
            className="w-8 h-8"
          />
        </button>

        {/* Sidebar Content */}
        <ul className="flex flex-col items-start ml-6 space-y-4 text-[1.5rem] font-semibold">
          <li>
            <Link to="/">
              <div className="flex justify-center items-center hover:text-indigo-500">
                <img src={HomeImg} alt="" className='w-8 mr-6' />Home
              </div>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <div className="flex justify-center items-center hover:text-indigo-500">
                <img src={AboutImg} alt="" className='w-8 mr-6'/>
                About
              </div>
            </Link>
          </li>
          {/* Solutions Dropdown */}
          <li className="relative group">
            <button
              onClick={() => handleSubMenuClick(0)}
              className={`hover:text-indigo-500 transform hover:scale-105 transition-transform duration-300 ${
                activeSubMenu === 0 ? 'text-indigo-500' : ''
              }`}
            >
              <div className={`flex justify-center items-center ${activeSubMenu === 0 ? ' pb-4' : ''}`}>
                <img src={SolutionsImg} alt="" className='w-8 mr-6' />
                Solutions <span><img src={dropdownImd} alt="" className='w-3 ml-2' /></span>
              </div>
            </button>
            {/* Panel inside Solutions Dropdown */}
            {activeSubMenu === 0 && (
              <div className="ml-6 text-[0.8rem] md:text-[1rem]">
                <ul>
                  <li className='p-2 hover:bg-indigo-100 hover:text-indigo-500'>
                    <Link to="/DigitalLending">Digital Lending</Link>
                  </li>
                  <li className='p-2 hover:bg-indigo-100 hover:text-indigo-500'>
                    <Link to="/CollectionMS">Collection Management System</Link>
                  </li>
                  <li className='p-2 hover:bg-indigo-100 hover:text-indigo-500'>
                    <Link to="/CustodyMS">Custody Management System</Link>
                  </li>
                  <li className='p-2 hover:bg-indigo-100 hover:text-indigo-500'>
                    <Link to="/SLIKRobotic">SLIK Robotic</Link>
                  </li>
                  <li className='p-2 hover:bg-indigo-100 hover:text-indigo-500'>
                    <Link to="/CreditRecovery">Credit Recovery</Link>
                  </li>
                  {/* Add more submenu items as needed */}
                </ul>
              </div>
            )}
          </li>
          {/* Move the rest of the menu items inside the panel */}
          <li>
            <Link to="/ourclient">
              <div className="flex justify-center items-center hover:text-indigo-500">
                <img src={ClientImg} alt="" className='w-8 mr-6' />
                Our Client
              </div>
            </Link>
          </li>
          <li>
            <a
              href="https://www.jobstreet.co.id/id/cloufina-jobs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex justify-center items-center hover:text-indigo-500">
                <img src={CareerImg} alt="" className='w-8 mr-6' />
                Career
              </div>
            </a>
          </li>
          <li>
            <Link to="/contact">
              <button className="bg-yellow-500 p-2 text-[1rem] shadow-sm shadow-red-600 rounded-br-xl text-white hover:bg-red-700 transform hover:scale-105 transition-transform duration-300">
                Request Demo
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
