import React, { useState } from "react";
import "../../styles/navbar.css";
import Logo from "../../assets/RUDRA LOGO WHITE.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
    const [showLogo, setShowLogo] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <>
            <div className="navbar_main_div">
                <div className="navbar_main_logo">
                    {showLogo && <> <Link to="/" className="Link_tag" > <img src={Logo} alt="Rudra Castings Logo" /> </Link> </>}
                </div>

                {/* Add animations using motion for icons */}
                <div className="right_clickable_dropdown" onClick={toggleDropdown}>
                    {dropdownOpen ? (
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="43"
                            height="43"
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
                            width="43"
                            height="43"
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
            </div>

            {/* Dropdown Menu with Animation */}
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
        </>
    );
}

export default Navbar;
