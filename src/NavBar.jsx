import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from './assets/Facebook_Logo.png';
import YoutubeIcon from './assets/Youtube.png';
import InstagramIcon from './assets/instagram.jpg';
import xIcon from './assets/X Logo.png';
import LinkdenIcon from './assets/Linkden Logo.png';

const NavBar = () => {
    return (
        <div className="navbar bg-purple-950 text-white flex flex-col lg:flex-row justify-between items-center px-4 py-2">
            <div className="flex items-center">
                <div className="text-center lg:text-left">
                    <h1 className='text-3xl'>Saiful Sarkar</h1>
                    <h2 className="text-base">01869296343</h2>
                    <h2 className="text-base">saifsolutionbd@gmail.com</h2>
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
                        <Link to="/FreeClass" className="btn btn-warning">
                            Free Class
                        </Link>
                    </li>
                    <li>
                        <Link to="/Event" className="btn btn-warning">
                            Event
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="social-icons flex items-center">
                <a href="https://www.facebook.com/saifsolutionbd" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
                </a> 
                <a href="https://www.youtube.com/channel/UC5WLCK7ObCHGbWCw0gsmHbw" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={YoutubeIcon} alt="Youtube" className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/saifulsarkar360/" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="https://x.com/bdsaifulsarkar" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={xIcon} alt="x" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/saifsolutionbd" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={LinkdenIcon} alt="Linkden" className="w-6 h-6" />
                </a>
            </div>
        </div>
    );
};

export default NavBar;
