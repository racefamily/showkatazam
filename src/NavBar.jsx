import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from './assets/Facebook_Logo.png';
import YoutubeIcon from './assets/Youtube.png';
import InstagramIcon from './assets/Group.png';

const NavBar = () => {
    return (
        <div className="navbar bg-purple-950 text-white flex flex-col lg:flex-row justify-between items-center px-4 py-2">
            <div className="flex items-center">
                <a href="https://www.facebook.com/profile.php?id=61559198431989" target="_blank" rel="noopener noreferrer" className="mx-2">
                </a>
                <div className="text-center lg:text-left">
                    <h1 className='text-3xl'>Race Family</h1>
                    <h2 className="text-base">01869296343</h2>
                    <h2 className="text-base">racefamilybd@gmail.com</h2>
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
                        <Link to="/OurEvent" className="btn btn-warning">
                            Our Event
                        </Link>
                    </li>
                    <li>
                        <Link to="/RegisterForm" className="btn btn-warning">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="social-icons flex items-center">
                <a href="https://www.facebook.com/bdracefamily" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
                </a> 
                <a href="https://www.youtube.com/channel/UCSpg5S0UnoiCn8iVYEHtW3Q" target="_blank" rel="noopener noreferrer" className="mx-2">
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
