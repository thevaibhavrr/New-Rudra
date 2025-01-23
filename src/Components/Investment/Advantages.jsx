import React from 'react'
import '../../styles/Investment/Keyfeatures.css'

import keyfeature from "../../assets/investmant/advantage.mp4"


function Advantages() {

    const data  = [
        "Eliminates the requirement for welding or assembling separate components.",
        "Minimizes material waste by enabling near-net-shape production.",
        "Delivers superior mechanical properties and ensures structural integrity.",
        "Accommodates a broad spectrum of sizes and weights, ranging from a few grams to several kilograms.",
    ]

  return (
    <>
    <div className='keyfeature_main_div' >
        <div className='investment_top_title' >Key Features of Investment Casting</div>
        <div className='keyfeature_mesaage_main_div ' >
            {/* video */}
            <div className='keyfeature_video_div' >
                <video src={keyfeature} autoPlay loop muted playsInline className='keyfeature_video' ></video>
            </div>
            <div className=' keyfeature_mesaage_main_div_for_advantages' >
                {
                    data.map((item) => (
                        <div className='keyfeature_mesaage' >{item}</div>
                    ))
                }
            </div>
        </div>
    </div>

    </>
  )
}

export default Advantages