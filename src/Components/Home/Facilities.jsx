import React from 'react'
import "../../styles/Home/facilities.css"
import Foundation from "../../assets/Home/Foundation.png"
import Leadership from "../../assets/Home/Leadership.png"
import Refinement from "../../assets/Home/Refinement.png"
import Awards from "../../assets/Home/Awards.png"
import Infrastructure from "../../assets/Home/Infrastructure.png"
import Facilitiesimg from "../../assets/Home/Facilities.png"
import Recognition from "../../assets/Home/Recognition.png"
import Precision from "../../assets/Home/Precision.png"

function Facilities() {
    return (
        <>
            <div className='home_facilities_main_div' >
                <Facilitiescards title={"Foundaiotn"} mesaage={"Established in 2008, Rudra Castings is part of the $15 million Rudra Group."} img={Foundation} />
                <Facilitiescards title={"Recognition"} mesaage={"Trusted globally for high-quality steel castings."} img={Recognition} />
                <Facilitiescards title={"Facilities"} mesaage={"Operates state-of-the-art, ISO-certified facilities in India."} img={Facilitiesimg} />
                <Facilitiescards  title={"Infrastructure"} mesaage={"Manufacturing spans 75,000 sq. ft. with room for growth."} img={Infrastructure}  />
                <Facilitiescards  title={"Precision"} mesaage={"Committed to precision and timely delivery."} img={Precision} />
                <Facilitiescards  title={"Awards"} mesaage={"Recognized with prestigious industry awards."} img={Awards} />
                <Facilitiescards  title={"Refinement"} mesaage={"Continuous process refinement ensures excellence."} img={Refinement} />
                <Facilitiescards  title={"Leadership"} mesaage={"Leaders in the investment castings industry."} img={Leadership} />
            </div>
        </>
    )
}

export default Facilities

function Facilitiescards({ title, mesaage, img }) {
    return (
        <>
            <div className='home_facilities_card_div' >
                {/* top */}
                <div className='home_facilities_card_div_top' >
                    <div className='home_facilities_card_div_top_title' >{title}</div>
                    <div className='home_facilities_card_div_top_mesaage' >{mesaage}</div>
                </div>
                <div className='home_facilities_card_div_bottom' >
                    <img src={img} alt="Foundaiotn" />
                </div>
            </div>
        </>
    )
}