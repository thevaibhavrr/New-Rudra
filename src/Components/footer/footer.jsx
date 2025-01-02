import React from 'react';
import '../../styles/footer/footer.css';
import Logo from '../../assets/RUDRA LOGO WHITE.png';

function Footer() {
  return (
    <div className='footer_main_div' >
    <div className="footer-container">
      <div className="footer-left">
        <img src={Logo} alt="Rudra Castings Logo" className="footer-logo" />
      </div>
      <div className="footer-center">
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </div>
      <div className="footer-right">
        <div className="footer-info">
          <p>Email</p>
          <p>Phone No.</p>
          <p>Social</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Footer;
