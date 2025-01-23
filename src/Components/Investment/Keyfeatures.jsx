// import React from 'react'
// import '../../styles/Investment/Keyfeatures.css'

// import keyfeature from "../../assets/investmant/keyfeature.mp4"


// function Keyfeatures() {

//     const data  = [
//         "Complex Geometries (tommy) : Capable of producing intricate shapes and designs.(parna hadding text)",
//         "Material Versatility: Can be used with a variety of metals and alloys, including stainless steel, aluminum, and titanium.",
//         "Dimensional Accuracy: Offers tight tolerances, reducing the need for post-machining.",
//         "Smooth Finish: Provides excellent surface finishes, reducing finishing costs.",
//         "Cost-Effective for High Precision: Especially suitable for small to medium production runs."
//     ]

//   return (
//     <>
//     <div className='keyfeature_main_div' >
//         <div className='investment_top_title' >Key Features of Investment Casting</div>
//         <div className='keyfeature_mesaage_main_div' >
//             <div className='keyfeature_mesaage_div' >
//                 {
//                     data.map((item) => (
//                         <div className='keyfeature_mesaage' >{item}</div>
//                     ))
//                 }
//             </div>
//             {/* video */}
//             <div className='keyfeature_video_div' >
//                 <video src={keyfeature} autoPlay loop muted className='keyfeature_video' ></video>
//             </div>
//         </div>
//     </div>

//     </>
//   )
// }

// export default Keyfeatures
import React from 'react'
import '../../styles/Investment/Keyfeatures.css'

import keyfeature from "../../assets/investmant/keyfeature.mp4"

function Keyfeatures() {

    const data  = [
        "Complex Geometries : Capable of producing intricate shapes and designs.",
        "Material Versatility: Can be used with a variety of metals and alloys, including stainless steel, aluminum, and titanium.",
        "Dimensional Accuracy: Offers tight tolerances, reducing the need for post-machining.",
        "Smooth Finish: Provides excellent surface finishes, reducing finishing costs.",
        "Cost-Effective for High Precision: Especially suitable for small to medium production runs."
    ]

  return (
    <>
    <div className='keyfeature_main_div' >
        <div className='investment_top_title' >Key Features of Investment Casting</div>
        <div className='keyfeature_mesaage_main_div' >
            <div className='keyfeature_mesaage_div' >
                {
                    data.map((item, index) => (
                        <div className='keyfeature_mesaage' key={index}>
                            {/* Split the text into parts and wrap specific parts in <span> */}
                            {item.split(':').map((part, idx) => (
                                <React.Fragment key={idx}>
                                    {idx === 0 ? (
                                        <span className="special-font">{part}</span> // Apply special font to the first part
                                    ) : (
                                        <span className='keyfeature_mesaage_font' >{part}</span>
                                    )}
                                    {idx < item.split(':').length - 1 && ':'} {/* Add colon back if it's not the last part */}
                                </React.Fragment>
                            ))}
                        </div>
                    ))
                }
            </div>
            {/* video */}
            <div className='keyfeature_video_div' >
                <video  src={keyfeature} autoplay loop playsinline muted className='keyfeature_video' ></video>
            </div>
        </div>
    </div>
    </>
  )
}

export default Keyfeatures
