import React from 'react';
import '../../styles/footer/footer.css';
import Logo from '../../assets/RUDRA LOGO WHITE.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer_main_div' >
      <div className="footer-container">
        {/* left */}
        <div className="footer-left">
          <img src={Logo} alt="Rudra Castings Logo" className="footer-logo" />
        </div>
        {/* center */}
        <div className="footer-center">
          <div>
            <Link className='Link_tag' to="/" >
              Home
            </Link>
          </div>
          <div>
            <Link className='Link_tag' to={"/about"}>
              About Us
            </Link>
          </div>
          <div>
            <Link className='Link_tag' to="/investment">
              Investment Caasting
            </Link>
          </div>
          <div>
            <Link className='Link_tag' to="/contact" >
              Contact Us
            </Link>
          </div>
        </div>
        {/* last */}
        <div className="footer-info">
          <div>info@rudracastings.com</div>
          <div>+919524200019</div>
          <div>Peer Gajju Shah Road, Badinpur, Mandi Gobindgarh 147301</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
