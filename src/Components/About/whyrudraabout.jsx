import React from 'react'
import FistImage from "../../assets/about/about 1.png"
import SecondImage from "../../assets/about/about 2.png"
import ThirdImage from "../../assets/about/about 3.png"
import FourthImage from "../../assets/about/about 4.png"
import FifthImage from "../../assets/about/about 5.png"
import SixthImage from "../../assets/about/about 6.png"

import "../../styles/about/whyrudraabout.css"
function Whyrudraabout() {
    return (
        <div className='whychoose_main_div_about' >
            <div className='whychoose_main_div_about_text' >Why Choose Rudra Castings?</div>
            {/* cards */}
            <div className='whychoose_main_div_about_cards' >
                <Whychoosecards Image={FistImage} text="Advanced Production Facilities:" message="Our state-of-the-art facilities provide unrivaled process control, repeatability, and reliability. We maintain rigorous standards throughout the manufacturing process to meet your needs precisely." />
                <Whychoosecards Image={SecondImage} text="Reliable Delivery:" message="Enjoy an on-time delivery rate of almost 100%, thanks to our unique Work-In-Progress Inventory Tracking system. Our Just-In-Time delivery capability allows us to respond swiftly to engineering changes or new product launches." />
                <Whychoosecards Image={ThirdImage} text="Superior Quality:" message="Our products meet the highest quality standards, delivered on time, ensuring the lowest total cost for our customers." />
                <Whychoosecards Image={FourthImage} text="Fast Lead Times:" message="We offer unprecedented lead times of just 2 to 3 weeks for new product launches, compared to the industry standard of 6 to 8 weeks." />
                <Whychoosecards Image={FifthImage} text="Comprehensive In-House Services:" message="We offer in-house tooling, heat treatment, assembly, machining, and other finishing services, ensuring fast and reliable completion of projects." />
                <Whychoosecards Image={SixthImage} text="Rapid Prototyping:" message="By leveraging cutting-edge technologies, we can create wax prototypes for your castings within days. These prototypes can then quickly move into production, allowing us to deliver finished castings in as little as a week." />


            </div>
        </div>
    )
}

export default Whyrudraabout

function Whychoosecards({Image ,text,message }) {
    return (
        <div className='whychoose_main_div_about_cards_main_div' >
            {/* image */}
            <div className='whychoose_main_div_about_cards_main_div_image' >
                <img src={Image} alt="" />
            </div>
            {/* text */}
            <div className='whychoose_main_div_about_cards_main_div_text' >
                    {/* title */}
                    <div className='whychoose_main_div_about_cards_main_div_text_title' >{text}</div>
                    {/* message */}
                    <div className='whychoose_main_div_about_cards_main_div_text_message' >{message}</div>
            </div>
        </div>
    )
}