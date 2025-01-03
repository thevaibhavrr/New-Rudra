// import React from "react";
// import { motion } from "framer-motion";
// import "../../styles/navbar.css";
// import Logo from "../../assets/RUDRA LOGO WHITE.png";

// function Navbar() {

//     return (
//         <>
//             <div className="navbar_main_div" >
//                 <div className="navbar_main_logo" >
//                     <img src={Logo} alt="Rudra Castings Logo" />
//                 </div>
//                 <div className="right_clickable_dropdown" >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
//                         <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
//                     </svg>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../styles/navbar.css";
import Logo from "../../assets/RUDRA LOGO WHITE.png";

function Navbar() {
    const [showLogo, setShowLogo] = useState(false);

    useEffect(() => {
        // Fetch IP data from the API
        const fetchIPData = async () => {
            try {
                const response = await fetch("https://ipinfo.io/json?token=774ee839b02daa");
                const data = await response.json();
                const allowedIPs = ["38.137.34.28", "152.58.25.196"];
                if (allowedIPs.includes(data.ip)) {
                    setShowLogo(true);
                }
            } catch (error) {
                console.error("Error fetching IP data:", error);
            }
        };

        fetchIPData();
    }, []);

    return (
        <>
            <div className="navbar_main_div">
                <div className="navbar_main_logo">
                    {showLogo && <img src={Logo} alt="Rudra Castings Logo" />}
                </div>
                <div className="right_clickable_dropdown">
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
                </div>
            </div>
        </>
    );
}

export default Navbar;
