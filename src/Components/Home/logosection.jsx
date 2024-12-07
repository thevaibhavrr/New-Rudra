import React, { useEffect, useState } from 'react';
import "../../styles/Home/logosection.css";
import MainLogo from "../../assets/RUDRA LOGO WHITE.png";
import Vid from "../../assets/Home/homevid.mp4";
function Logosection() {
  const [isSticky, setIsSticky] = useState(false);


  const handleScroll = () => {
    if (window.scrollY >= 950) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='logo_main_div_home_page'>
        <div className='empty_black'>
          k
        </div>
        <div className={`logo-container ${isSticky ? 'sticky' : 'fixed'}`}></div>
        <div className={`video_div newimage ${isSticky ? 'stickyimage' : ''}`}>
          <video className="background-video" autoPlay loop muted>
            {/* Make sure Vid is a valid path */}
            <source src={Vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </>
  );
}

export default Logosection;
