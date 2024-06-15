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
      <nav>
        <h6 className="footer-title">Social link</h6> 
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/bdsaifulsarkar" target="_blank" rel="noopener noreferrer"><img src={FacebookIcon} alt="Facebook" className="w-6 h-6" /></a>
          <a href="https://www.youtube.com/channel/UC7nCU4qlnBjbfxn9N8UR6cQ" target="_blank" rel="noopener noreferrer"><img src={YoutubeIcon} alt="Youtube" className="w-6 h-6" /></a>
          <a href="https://www.instagram.com/bdsaifulsarkar/" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="Instagram" className="w-6 h-6" /></a>
          <a href="https://x.com/bdsaifulsarkar" target="_blank" rel="noopener noreferrer"><img src={xIcon} alt="Instagram" className="w-6 h-6" /></a>
          <a href="https://www.linkedin.com/in/bdsaifulsarkar/" target="_blank" rel="noopener noreferrer"><img src={LinkdenIcon} alt="Instagram" className="w-6 h-6" /></a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
