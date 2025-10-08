import { Github } from 'lucide-react';
import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import '../index.css'

const Navbar = () => {
    const links = <>

    <li className='font-medium'><NavLink to={"/"}>Home</NavLink></li>
    <li className='font-medium'><NavLink to={"/apps"}>Apps</NavLink></li>
    <li className='font-medium'><NavLink to={"/installation"}>Installation</NavLink></li>
    
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm py-3 px-3 lg:px-[calc((100vw-1280px)/2)]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link href="#" className="text-xl flex justify-center items-center font-bold"> <img className='w-10' src={logo} alt="" /> <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] inline-block'>HERO.IO </span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/Rakibislam22' target="_blank" className="btn font-semibold hover:from-[#632EE3] hover:to-[#7f31ec]  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-white px-6 py-5"><Github className='w-5'></Github> Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;