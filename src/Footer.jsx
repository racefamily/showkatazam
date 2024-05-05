import FacebookIcon from './assets/Facebook.png';
import YoutubeIcon from './assets/Youtube.png';
import InstagramIcon from './assets/Group.png';

const Footer = () => {
  const facebookLink = "https://www.facebook.com/profile.php?id=61559198431989"; // আপনার ফেসবুক পেজের লিংক
  const youtubeLink = "https://www.youtube.com/channel/UC3JrcsUmJj5sGkszbpYA8ww"; // ইউটিউব চ্যানেলের লিংক
  const Facebookgroup = "https://www.facebook.com/groups/racefamilybd"; // ইনস্টাগ্রাম পেজের লিংক

  return (
    <footer className="footer p-10 bg-purple-950 text-neutral-content relative">
      <img src="https://imgur.com/FZH6ECa.png" alt="ACME Industries Ltd." className="w-12 h-12" />
      <aside className="text-center lg:text-left">
        <p>Race Family<br/>01869-296343</p>
      </aside> 
      <nav className="text-center">
        <h6 className="footer-title">Social</h6> 
        <div className="grid grid-flow-col gap-4 justify-center">
          <a href={facebookLink} target="_blank" rel="noopener noreferrer"><img src={FacebookIcon} alt="Facebook" className="w-6 h-6" /></a>
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer"><img src={YoutubeIcon} alt="Youtube" className="w-6 h-6" /></a>
          <a href={Facebookgroup} target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="Instagram" className="w-6 h-6" /></a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
