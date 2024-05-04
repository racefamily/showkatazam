import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/Logo.png';
import FacebookIcon from './assets/Facebook.png';
import YoutubeIcon from './assets/Youtube.png';
import InstagramIcon from './assets/Group.png';

const NavBar = () => {
    return (
        <div className="navbar bg-purple-950 text-white flex flex-col lg:flex-row justify-between items-center px-4 py-2">
            <div className="flex items-center">
            <a href="https://www.facebook.com/profile.php?id=61559198431989" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={Logo} alt="Race Family" className="w-6 h-6" />
                </a>
                <h1 className='text-3xl'>Race Family</h1>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-2xl">
                    <li><Link to="/FreeClass">Free Class</Link></li>
                </ul>
            </div>
            <div className="social-icons flex items-center">
                <a href="https://www.facebook.com/profile.php?id=61559198431989" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
                </a> 
                <a href="https://www.youtube.com/channel/UC3JrcsUmJj5sGkszbpYA8ww" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={YoutubeIcon} alt="Youtube" className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/groups/racefamilybd" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
};

export default NavBar;
