
import { NavLink } from 'react-router-dom';

import {FaBars, FaDribbble, FaFacebook, } from 'react-icons/fa';
import { FaSquareXTwitter, FaXmark } from "react-icons/fa6";
import { useState } from 'react';

const Navbar = () => {

const [menuOpen , setMenuOpen] = useState(false);

const toggleMenu = () => {
    setMenuOpen(!menuOpen);
}

  const navItems = [
    { path: "/", link: "Home" },
    { path: "/services", link: "Services" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact" },
    { path: "/blogs", link: "Blogs" },
  ];

  return (
    <header className='bg-black text-white'>


      <nav className='px-4 py-4 mx-auto max-w-7xl flex justify-between items-center'>
        <a className='text-3xl text-white font-bold' href="/"><span className='text-3xl text-orange-500 '>React</span>BLOG</a> 
        <ul className='md:flex gap-12 text-lg hidden'>
          {navItems.map(({ path, link }, index) => (
            <li className='text-white' key={index}>
              <NavLink className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
              to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>

        <div className='text-white lg:flex gap-4 items-center hidden'>
            <a href="/" className='hover:text-orange-500'><FaFacebook/></a>
            <a href="/" className='hover:text-orange-500'><FaDribbble/></a>
            <a href="/" className='hover:text-orange-500'><FaSquareXTwitter /></a>
            <button className='text-white bg-orange-500 px-8 py-2 text-lg rounded hover:bg-white
             hover:text-orange-500 transition-all duration-200 ease-in '>Login</button>
        </div>

        <div className='md:hidden'>
            <button onClick={toggleMenu} className='cursor-pointer'>
                {
                    menuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>
                }
                </button>
        </div>

        {/* menu items only for mobile*/}
        <div>
        <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-16 bg-white ${menuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
          {navItems.map(({ path, link }, index) => (
            <li className='text-black' key={index}>
              <NavLink onClick={toggleMenu} to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
