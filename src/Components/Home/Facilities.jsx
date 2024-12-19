import React from 'react'
import "../../styles/Home/facilities.css"

function Facilities() {

    const Foundaiotn = {
        title: "Foundaiotn",
        mesaage: "Established in 2008, Rudra Castings is part of the $15 million Rudra Group."
    }
    const Recognition = {
        title: "Recognition",
        mesaage: "Trusted globally for high-quality steel castings."
    }
    const Facilities = {
        title: "Facilities",
        mesaage: "Operates state-of-the-art, ISO-certified facilities in India."
    }
    const Infrastructure = {
        title: "Infrastructure",
        mesaage: "Manufacturing spans 75,000 sq. ft. with room for growth."
    }
    const Precision = {
        title: "Precision",
        mesaage: "Committed to precision and timely delivery."
    }
    const Awards = {
        title: "Awards",
        mesaage: "Recognized with prestigious industry awards."
    }
    const Refinement = {
        title: "Refinement",
        mesaage: "Continuous process refinement ensures excellence."
    }
    const Leadership = {
        title: "Leadership",
        mesaage: "Leaders in the investment castings industry."
    }

    return (
        <>
            <div className='home_facilities_main_div'>
                <div className='home_facilities_div' >
                    <LightGrayfun title={Foundaiotn.title} mesaage={Foundaiotn.mesaage} />
                    <DarkGrayfun title={Recognition.title} mesaage={Recognition.mesaage} />
                </div>

                <div className='home_facilities_div' >
                    <DarkGrayfun title={Facilities.title} mesaage={Facilities.mesaage} />
                    <LightGrayfun title={Infrastructure.title} mesaage={Infrastructure.mesaage} />
                </div>

                <div className='home_facilities_div' >
                    <LightGrayfun title={Precision.title} mesaage={Precision.mesaage} />
                    <DarkGrayfun title={Awards.title} mesaage={Awards.mesaage} />
                </div>

                <div className='home_facilities_div' >
                    <DarkGrayfun title={Refinement.title} mesaage={Refinement.mesaage} />
                    <LightGrayfun title={Leadership.title} mesaage={Leadership.mesaage} />
                </div>

            </div>
        </>
    )
}

export default Facilities


function DarkGrayfun({ title, mesaage }) {
    return (
        <>
            <div className='darkgray_div_home_facilities darkgray_div_home_facilities_color' >
                <div className='darkgray_div_home_facilities_title' > {title} </div>
                <div className='darkgray_div_home_facilities_mesaage' > {mesaage} </div>
            </div>

        </>
    )
}
function LightGrayfun({ title, mesaage }) {
    return (
        <>
            <div className='darkgray_div_home_facilities lightgray_div_home_facilities_color' >
                <div className='darkgray_div_home_facilities_title' > {title} </div>
                <div className='darkgray_div_home_facilities_mesaage' > {mesaage} </div>
            </div>

        </>
    )
}