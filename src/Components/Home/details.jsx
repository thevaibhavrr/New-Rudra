import React from 'react'
import "../../styles/Home/homedetails.css"
import { motion } from "framer-motion";
import Logo from "../../assets/RUDRA LOGO WHITE.png";


function Homedetails() {
    const firstmessage= "Rudra Castings began its journey in 2008, starting with just a handful of dedicated employees in a modest shed, eager to make a mark in the world of manufacturing. Today, as part of the $15 million Rudra Group, our story is one of remarkable growth and continuous innovation."
    const secondmessage = "Born out of the need to provide high-quality investment castings, Rudra Castings has become a trusted name in the global steel castings market. In a fiercely competitive industry, we’ve always been driven to surpass expectations, constantly refining our processes to deliver excellence in every product."
    const thirdmessage = "Fueled by a relentless commitment to perfection and backed by years of expertise, we continue to shape a future defined by quality and precision."

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
    {/* <motion.div initial={{ opacity: 0 , height: "580vh" }}
        whileInView={{ opacity: 1 , height: "20vh" }}
        transition={{ duration: 2 }}
        style={{ display: "flex", justifyContent: "center", alignItems: "center" , width: "100%", backgroundColor: "black", padding: "20px 0" }}
        >
        <img src={Logo} alt="Rudra Castings Logo" className="footer-logo" />
    </motion.div> */}

    <div className='home_details_main_div_parent' >
    <div className='home_details_main_div' >
        <div className='home_details_div' >
            {firstmessage}
        </div>
        <div className='home_details_div' >
            {secondmessage}
        </div>
        <div className='home_details_div' >
            {thirdmessage}
        </div>
    </div>
    </div>
        
    </div>
  )
}

export default Homedetails