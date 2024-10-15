import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from './assets/Facebook_Logo.png';

const NavBar = () => {
    return (
        <div className="navbar bg-purple-950 text-white flex flex-col lg:flex-row justify-between items-center px-4 py-2">
            <div className="flex items-center">
                <div className="text-center lg:text-left">
                    <h1 className='text-3xl'>Showkat Azam</h1>
                    <h2 className="text-base">showkatazam0@gmail.com</h2>
                </div>
            </div>
           {/* Social Icons */}
            <div className="social-icons flex items-center">
                <a href="https://www.facebook.com/showkatazam0/" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
                </a>
            </div>
            
        </div>
    );
};

export default NavBar;