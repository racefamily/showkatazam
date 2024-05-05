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
                <h1 className='text-3xl'>Race Family</h1>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-2xl">
                    <li><Link to="/" className="btn btn-warning">Home</Link></li> {/* Home button */}
                </ul>
            </div>
            <div className="social-icons flex items-center">
                <a href="https://www.facebook.com/bdracefamily" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={FacebookIcon} alt="Facebook" className="w-8 h-8" /> {/* Increased size */}
                </a> 
                <a href="https://www.youtube.com/channel/UCSpg5S0UnoiCn8iVYEHtW3Q" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={YoutubeIcon} alt="Youtube" className="w-8 h-8" /> {/* Increased size */}
                </a>
                <a href="https://www.facebook.com/groups/racefamilybd" target="_blank" rel="noopener noreferrer" className="mx-2">
                    <img src={InstagramIcon} alt="Instagram" className="w-8 h-8" /> {/* Increased size */}
                </a>
            </div>
        </div>
    );
};

export default NavBar;
