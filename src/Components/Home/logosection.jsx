import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/Home/logosection.css";
import Vid from "../../assets/Home/homevid.mp4";
import { Link } from "react-router-dom";

function Logosection() {
  const ref = React.useRef(null);
  const [fixed, setFixed] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setFixed(rect.bottom <= window.innerHeight * 0.2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        ref={ref}
        className="logo_main_div_home_page"
        initial={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="video_div">
          <div className={`logo-container ${fixed ? "fixed" : "sticky"}`}>

            {/* dropdown */}
            {fixed && (
              <div className="right_clickable_dropdown" onClick={toggleDropdown}>
                {dropdownOpen ? (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    fill="currentColor"
                    className="bi bi-x-lg"
                    viewBox="0 0 16 16"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="46"
                    height="46"
                    fill="currentColor"
                    className="bi bi-list"
                    viewBox="0 0 16 16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                    />
                  </motion.svg>
                )}
              </div>
              // <motion.svg
              //   xmlns="http://www.w3.org/2000/svg"
              //   width="46"
              //   height="46"
              //   fill="currentColor"
              //   className="bi bi-x-lg icon"
              //   viewBox="0 0 16 16"
              //   initial={{ rotate: 0 }}
              //   animate={{ rotate: 180 }}
              //   transition={{ duration: 0.3 }}
              // >
              //   <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              // </motion.svg>
            )}
          </div>
          <video className="background-video" autoPlay loop muted>
            <source src={Vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {dropdownOpen && (
                <motion.div
                    className="dropdown_menu"
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                >
                    <ul>
                        <li>
                            <Link className='Link_tag' style={{color:"black"}} to="/" >
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link className='Link_tag' style={{color:"black"}} to="/about" >
                                ABOUT US
                            </Link>
                        </li>
                        <li>
                            <Link className='Link_tag' style={{color:"black"}} to="/investment" >
                                INVESTMENT CASTING
                            </Link>
                        </li>
                        <li>
                            <Link className='Link_tag' style={{color:"black"}} to="/contact" >
                                CONTACT US
                            </Link>
                        </li>
                    </ul>
                </motion.div>
            )}
        </div>
      </motion.div>
    </>
  );
}

export default Logosection;

