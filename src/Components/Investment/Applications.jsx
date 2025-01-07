import React from 'react'
import "../../styles/Investment/Applications.css"
import FirstImage from "../../assets/investmant/Applications1.png"
import SecondImage from "../../assets/investmant/Applications2.png"
import ThirdImage from "../../assets/investmant/Applications3.png"
import FourthImage from "../../assets/investmant/Applications4.png"


function Applications() {
    return (
        <>
            <div className='main_applications_div' >
                <div className='investment_top_title' >Applications of Investment Casting:</div>
                <div className='applications_details_main_div' >
                    <div className='applications_details_image_div' >
                        {/* image */}
                        <img className='applications_images' src={FirstImage} alt="Foundaiotn"  />
                        {/* data */}
                        <div className='applications_details_image_div_data' >
                            <div className='applications_details_image_div_data_title' >Aerospace</div>
                            <div className='applications_details_image_div_data_mesaage' >Engine components, turbine blades, and structural parts.</div>
                        </div>
                    </div>

                    <div className='applications_details_image_div' >
                        {/* image */}
                        <img className='applications_images' src={SecondImage} alt="Foundaiotn" />
                        {/* data */}
                        <div className='applications_details_image_div_data' >
                            <div className='applications_details_image_div_data_title' >Automotive</div>
                            <div className='applications_details_image_div_data_mesaage' >Gears, engine components, and exhaust parts.</div>
                        </div>
                    </div>

                    <div className='applications_details_image_div' >
                        {/* image */}
                        <img className='applications_images' src={ThirdImage} alt="Foundaiotn" />
                        {/* data */}
                        <div className='applications_details_image_div_data' >
                            <div className='applications_details_image_div_data_title' >Medical</div>
                            <div className='applications_details_image_div_data_mesaage' >Surgical instruments and prosthetic devices.</div>
                        </div>
                    </div>

                    <div className='applications_details_image_div' >
                        {/* image */}
                        <img className='applications_images' src={FourthImage} alt="Foundaiotn" />
                        {/* data */}
                        <div className='applications_details_image_div_data' >
                            <div className='applications_details_image_div_data_title' >Industrial</div>
                            <div className='applications_details_image_div_data_mesaage' >Pumps, valves, and custom machinery components.</div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Applications