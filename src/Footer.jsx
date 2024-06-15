import React from 'react';
import FacebookIcon from './assets/Facebook_Logo.png';
import YoutubeIcon from './assets/Youtube.png';
import InstagramIcon from './assets/instagram.jpg';
import xIcon from './assets/X Logo.png';
import LinkdenIcon from './assets/Linkden Logo.png';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <p>Saiful Sarkar<br/>01869-296343 <br /> bdsaifulsarkar@gmail.com </p>
      </aside> 
      <nav className="flex flex-col items-center">
  <h6 className="footer-title text-center">Social link</h6> 
  <div className="flex gap-4 mt-2">
    <a href="https://www.facebook.com/bdsaifulsarkar" target="_blank" rel="noopener noreferrer">
      <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
    </a>
    <a href="https://www.youtube.com/channel/UC7nCU4qlnBjbfxn9N8UR6cQ" target="_blank" rel="noopener noreferrer">
      <img src={YoutubeIcon} alt="Youtube" className="w-6 h-6" />
    </a>
    <a href="https://www.instagram.com/bdsaifulsarkar/" target="_blank" rel="noopener noreferrer">
      <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
    </a>
    <a href="https://x.com/bdsaifulsarkar" target="_blank" rel="noopener noreferrer">
      <img src={xIcon} alt="X" className="w-6 h-6" />
    </a>
    <a href="https://www.linkedin.com/in/bdsaifulsarkar/" target="_blank" rel="noopener noreferrer">
      <img src={LinkdenIcon} alt="LinkedIn" className="w-6 h-6" />
    </a>
  </div>
</nav>
    </footer>
  );
};

export default Footer;
