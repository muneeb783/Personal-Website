import './Footer.css';
import React from 'react';
import {FaArrowUp} from 'react-icons/fa';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Smooth scrolling animation
        });
    };
    return (
      <footer className="footer">
        <div className="footer-back-to-top">
            <button onClick={scrollToTop} aria-label="Back to Top">
            <FaArrowUp /> Back to Top
            </button>
        </div>
        <div className="footer-copyright">
            &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </footer>
    )
}

export default Footer;