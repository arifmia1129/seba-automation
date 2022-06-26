import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { HashLink as Link } from 'react-router-hash-link';
const Header = () => {
    return (
        <div className="navbar shadow-xl sticky top-0 z-50 bg-base-200" >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link smooth to="#home">Home</Link></li>
                        <li><Link smooth to="#about">About</Link></li>
                        <li><Link smooth to="#services">Services</Link></li>
                        <li><Link smooth to="#team">Team</Link></li>
                        <li><Link smooth to="#contact">Contact</Link></li>
                    </ul>
                </div>
                <p className="btn btn-ghost normal-case md:text-xl font-bold">Seba Automation</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link smooth to="#home">Home</Link></li>
                    <li><Link smooth to="#about">About</Link></li>
                    <li><Link smooth to="#services">Services</Link></li>
                    <li><Link smooth to="#team">Team</Link></li>
                    <li><Link smooth to="#contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a target="_blank" rel="noreferrer" className='mx-2' href="https://www.facebook.com/SebaAutomationSystem">
                    <BsFacebook />
                </a>
                <a target="_blank" rel="noreferrer" className='mx-2' href="https://www.youtube.com/c/SebaAutomation/featured">
                    <BsYoutube />
                </a>
            </div>
        </div>
    );
};

export default Header;