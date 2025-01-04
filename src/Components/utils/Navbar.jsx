// import React, { useEffect, useState } from "react";
// import "../../styles/navbar.css";
// import Logo from "../../assets/RUDRA LOGO WHITE.png";

// function Navbar() {
//     const [showLogo, setShowLogo] = useState(false);

//     useEffect(() => {
//         // Fetch IP data from the API
//         const fetchIPData = async () => {
//             try {
//                 const response = await fetch("https://ipinfo.io/json?token=774ee839b02daa");
//                 const data = await response.json();
//                 const allowedIPs = ["38.137.34.28", "152.58.25.196"];
//                 if (allowedIPs.includes(data.ip)) {
//                     setShowLogo(true);
//                 }
//             } catch (error) {
//                 console.error("Error fetching IP data:", error);
//             }
//         };
//         fetchIPData();
//     }, []);

//     return (
//         <>
//             <div className="navbar_main_div">
//                 <div className="navbar_main_logo">
//                     {showLogo && <img src={Logo} alt="Rudra Castings Logo" />}
//                 </div>
//                 <div className="right_clickable_dropdown">
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="46"
//                         height="46"
//                         fill="currentColor"
//                         className="bi bi-list"
//                         viewBox="0 0 16 16"
//                     >
//                         <path
//                             fillRule="evenodd"
//                             d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
//                         />
//                     </svg>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Navbar;


import React, { useEffect, useState } from "react";
import "../../styles/navbar.css";
import Logo from "../../assets/RUDRA LOGO WHITE.png";
import {motion} from "framer-motion";

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
                    {showLogo && <img src={Logo} alt="Rudra Castings Logo" />}
                </div>
                <div className="right_clickable_dropdown" onClick={toggleDropdown}>
                    {dropdownOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="46"
                            height="46"
                            fill="currentColor"
                            className="bi bi-x-lg"
                            viewBox="0 0 16 16"
                        >
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="46"
                            height="46"
                            fill="currentColor"
                            className="bi bi-list"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                            />
                        </svg>
                    )}
                </div>
            </div>
            {dropdownOpen && (
                <div className="dropdown_menu">
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>PRECISION CASTING</li>
                        <li>CONTACT US</li>
                    </ul>
                </div>
            )}
        </>
    );
}

export default Navbar;
