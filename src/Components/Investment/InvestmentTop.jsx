import React from 'react'
import "../../styles/Investment/InvestmentTop.css"
import Investmentvideo from "../../assets/investmant/investmentTop.mp4"
function InvestmentTop() {
    return (
        <>
        <div className='investment_top_main_div' >

            <div className='investment_top_title' >Investment Casting</div>
            <div className='investment_top_mesaage' >
                Investment casting, also known as precision casting, is a manufacturing process used to produce intricate and highly accurate components from metals and alloys. It is ideal for creating parts with complex shapes, tight tolerances, and smooth surface finishes. This process is widely utilized in industries such as aerospace, automotive, medical, and engineering due to its ability to produce near-net-shape components with minimal machining.
            </div>

            <div className='investment_top_video_div' >
                <video  src={Investmentvideo} autoplay loop playsinline muted className='investment_top_video' ></video>
            </div>
        </div>
        </>
    )
}

export default InvestmentTop