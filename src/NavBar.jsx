import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from './assets/Facebook_Logo.png';

const NavBar = () => {
    return (
        <div className="navbar bg-purple-950 text-white flex flex-col lg:flex-row justify-between items-center px-4 py-2">
            <div className="flex items-center">
                <div className="text-center lg:text-left">
                    <h1 className='text-3xl'>A.B.D.A</h1>
                    <h2 className="text-base">+880 1846892827</h2>
                    <h2 className="text-base">abda@gmail.com</h2>
                </div>
            </div>
            <div className="flex-none">
                <ul className="gap-5  menu menu-horizontal px-1 text-2xl">
                <li>
                        <Link to="/Home" className="btn btn-warning">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/Event" className="btn btn-warning">
                           Our Event
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="social-icons flex items-center">
                <a href="https://www.facebook.com/groups/akbarshahbdg" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
                </a>
             
             
              
            </div>
        </div>
    );
};

export default NavBar;
