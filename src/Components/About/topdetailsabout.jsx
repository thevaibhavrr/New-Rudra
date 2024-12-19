
import React from 'react'
import "../../styles/Home/homedetails.css"


function Topdetailsabout() {
    const firstmessage= "At Rudra Castings, our state-of-the-art manufacturing facilities in India operate round-the-clock, ensuring we deliver top-quality products that meet even the tightest deadlines with precision and reliability."
    const secondmessage = "Spanning over 75,000 sq. ft. and ISO-certified, our facilities are designed to not only exceed industry standards but also accommodate future expansions as demand grows. We take pride in our commitment to quality, continually refining our processes to remain a leader in the investment castings industry."

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
  
    <div className='home_details_main_div_parent' >
        <div className='home_details_div about_page_about_us_text' >About us</div>
    <div className='home_details_main_div' >
        <div className='home_details_div' >
            {firstmessage}
        </div>
        <div className='home_details_div' >
            {secondmessage}
        </div>
        
    </div>
    </div>
        
    </div>
  )
}

export default Topdetailsabout