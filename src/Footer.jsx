import React from 'react';
import FacebookIcon from './assets/Facebook_Logo.png';
import YoutubeIcon from './assets/Youtube.png';
import InstagramIcon from './assets/Group.png';

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <p>Race Family<br/>01869-296343 <br /> racefamilybd@gmail.com </p>
      </aside> 
      <nav>
        <h6 className="footer-title">Social link</h6> 
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/bdracefamily" target="_blank" rel="noopener noreferrer"><img src={FacebookIcon} alt="Facebook" className="w-6 h-6" /></a>
          <a href="https://www.youtube.com/channel/UCSpg5S0UnoiCn8iVYEHtW3Q" target="_blank" rel="noopener noreferrer"><img src={YoutubeIcon} alt="Youtube" className="w-6 h-6" /></a>
          <a href="https://www.facebook.com/groups/racefamilybd" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="Instagram" className="w-6 h-6" /></a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
