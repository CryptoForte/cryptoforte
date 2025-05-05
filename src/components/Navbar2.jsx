import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/cryptofortelogo2.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showJoinModal, setShowJoinModal] = useState(false);
  const location = useLocation();

  const handleJoinClick = () => {
    setShowJoinModal(true);
  };

  const confirmJoin = () => {
    window.open('https://t.me/thecryptoforte', '_blank');
    setShowJoinModal(false);
    setIsOpen(false);
  };

  // Improved active link checker
  const isActive = (path) => {
    return location.pathname === path || 
           (path !== '/' && location.pathname.startsWith(path));
  };

  // Nav link component to avoid repetition
  const NavLink = ({ to, children }) => (
    <Link 
      to={to}
      className={`text-white  ${
        isActive(to) ? 'text-[15px] font-bold' : ''
      }`}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <header className="py-4 shadow-md bg-[#071D49] relative z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link to="/">
              <img src={Logo} className="h-8 md:h-12" alt="Logo" />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            {/* Desktop Menu */}
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/events">Events</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                <li><NavLink to="/contents">Contents</NavLink></li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden sm:flex sm:gap-4">
                <button 
                  className="rounded-md bg-[#E52B50] px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-[#c82342] transition-colors"
                  onClick={handleJoinClick}
                >
                  Join Community
                </button>
              </div>

              {/* Hamburger Icon */}
              <div className="block md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="rounded bg-[#0A2A61] p-2 text-white transition hover:text-[#E52B50]"
                >
                  {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#071D49] shadow-md py-4"
          >
            <ul className="flex flex-col space-y-4 px-6 text-sm">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/events">Events</NavLink></li>
              <li><NavLink to="/about-us">About Us</NavLink></li>
              <li><NavLink to="/contact-us">Contact Us</NavLink></li>
              <li><NavLink to="/contents">Contents</NavLink></li>
              <li>
                <button 
                  onClick={handleJoinClick}
                  className="rounded-md bg-[#E52B50] px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-[#c82342] transition-colors text-center block w-full"
                >
                  Join Community
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Join Community Modal */}
      <AnimatePresence>
        {showJoinModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white p-6 rounded-lg max-w-sm w-full mx-4"
            >
              <h3 className="font-bold text-lg mb-4">Join Our Community</h3>
              <p className="mb-4">You're about to join our Telegram group. Would you like to proceed?</p>
              <div className="flex justify-end space-x-3">
                <button 
                  className="px-4 py-2 border rounded hover:bg-gray-100 transition-colors"
                  onClick={() => setShowJoinModal(false)}
                >
                  Cancel
                </button>
                <button 
                  className="px-4 py-2 bg-[#E52B50] text-white rounded hover:bg-[#c82342] transition-colors"
                  onClick={confirmJoin}
                >
                  Join
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;