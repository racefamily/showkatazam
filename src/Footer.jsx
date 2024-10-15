import React from 'react';
import FacebookIcon from './assets/Facebook_Logo.png';




const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <p>Showkat Azam <br /> showkatazam0@gmail.com </p>
      </aside> 
      <nav className="flex flex-col items-center">
  <h6 className="footer-title text-center">Social link</h6> 
  <div className="flex gap-4 mt-2">
    <a href="https://www.facebook.com/showkatazam0/" target="_blank" rel="noopener noreferrer">
      <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
    </a>
   
   
   
  
  </div>
</nav>
    </footer>
  );
};

export default Footer;
