import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
// import Logo from '../assets/cryptoforte_logo.png';
import Logo from '../assets/cryptofortelogo2.png';


const Footer = () => {
  return (
    <footer className="bg-[#0D0D3C] text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <img src={Logo} alt="CryptoForte Logo" className="h-8 md:h-10" />
          </div>

          {/* Socials */}
          <div className="flex items-center mt-4 md:mt-0 space-x-4 text-lg">
            <a target='_blank' href="https://youtube.com/@thecryptoforte?si=-jyLsHIpYJTn7haP" className="hover:text-gray-400"><FaYoutube /></a>
            <a target='_blank' href="#" className="hover:text-gray-400"><FaFacebookF /></a>
            <a target='_blank' href="https://x.com/thecryptoforte" className="hover:text-gray-400"><FaTwitter /></a>
            <a target='_blank' href="#" className="hover:text-gray-400"><FaInstagram /></a>
            <a target='_blank' href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 mb-6" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            CryptoForte @ {new Date().getFullYear()}. All rights reserved.
          </p>

          {/* Footer nav */}
          <div className="flex hidden md:block space-x-2 md:space-x-6 text-sm text-white">
            <a href="/events" className="hover:text-gray-400">Events</a>
            <a href="/aboutus" className="hover:text-gray-400">About Us</a>
            <a href="#" className="hover:text-gray-400">Partners</a>
            <a href="/contents" className="hover:text-gray-400">Resources</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
