// import React from 'react';
// import "../../styles/Investment/Process.css";
// import process1 from "../../assets/investmant/process1.png"
// import process2 from "../../assets/investmant/process2.png"
// import process3 from "../../assets/investmant/process3.png"


// function Process() {
//     const data = [
//         {
//             title: "1.Design & Mold Creation:",
//             first: "A detailed design of the component is created using CAD software.",
//             second: "A wax pattern is crafted to replicate the exact dimensions of the final part."
//         },
//         {
//             title: "2.Wax Pattern Assembly:",
//             first: "The wax patterns are attached to a central wax sprue, forming a tree structure that allows multiple parts to be cast simultaneously.",
//         },
//         {
//             title: "3.Ceramic Shell Formation:",
//             first: "The wax assembly is repeatedly dipped in a liquid ceramic slurry and coated with fine sand to form a durable ceramic shell.",
//             second: "Each layer is allowed to dry before adding the next layer until the desired thickness is achieved."
//         },
//         {
//             title: "4.Wax Removal:",
//             first: "The ceramic shell is heated to remove the wax (a process known as de-waxing), leaving a hollow mold.",
//         },
//         {
//             title: "5.Casting:",
//             first: "The ceramic mold is preheated to remove any residual moisture and strengthen it.",
//             second: "Molten metal is poured into the mold, filling the cavity formed by the wax patterns.",
//         },
//         {
//             title: "6.Cooling & Solidification:",
//             first: "The mold is allowed to cool, causing the metal to solidify into the desired shape.",
//         },
//         {
//             title: "7.Shell Removal:",
//             first: "The ceramic shell is broken away, revealing the rough cast parts."
//         },
//         {
//             title: "8.Finishing:",
//             first: "The cast components are cut from the sprue tree, and finishing processes such as machining, grinding, and polishing are performed to meet precise specifications."
//         }
//     ];

//     return (
//         <div className="process_parent_main_div">
//             <div className="process_images_first_div">
//                 <img className='process_image_first' src={process1} alt="" />
//             </div>
//             <div className="process_images_second_div">
//                 <img className='process_image_second' src={process2} alt="" />
//             </div>

//             <div className="process_images_third_div">
//                 <img className='process_image_third' src={process3} alt="" />
//             </div>

//             <div className="process_main_div">

//                 <div className="investment_top_title">The Investment Casting Process</div>
//                 <div className="process_steps">
//                     {data.map((step, index) => (
//                         <div key={index} className="process_step">
//                             <div className="step_title">{step.title}</div>
//                             <div className="step_description">
//                                 <div>{step.first}</div>
//                                 {step.second && <div>{step.second}</div>}
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Process;





import React from 'react';
import "../../styles/Investment/Process.css";
import { motion } from "framer-motion"; // Import motion from framer-motion
import process1 from "../../assets/investmant/process1.png";
import process2 from "../../assets/investmant/process2.png";
import process3 from "../../assets/investmant/process3.png";

function Process() {
    const data = [
        {
            title: "1.Design & Mold Creation:",
            first: "A detailed design of the component is created using CAD software.",
            second: "A wax pattern is crafted to replicate the exact dimensions of the final part."
        },
        {
            title: "2.Wax Pattern Assembly:",
            first: "The wax patterns are attached to a central wax sprue, forming a tree structure that allows multiple parts to be cast simultaneously.",
        },
        {
            title: "3.Ceramic Shell Formation:",
            first: "The wax assembly is repeatedly dipped in a liquid ceramic slurry and coated with fine sand to form a durable ceramic shell.",
            second: "Each layer is allowed to dry before adding the next layer until the desired thickness is achieved."
        },
        {
            title: "4.Wax Removal:",
            first: "The ceramic shell is heated to remove the wax (a process known as de-waxing), leaving a hollow mold.",
        },
        {
            title: "5.Casting:",
            first: "The ceramic mold is preheated to remove any residual moisture and strengthen it.",
            second: "Molten metal is poured into the mold, filling the cavity formed by the wax patterns.",
        },
        {
            title: "6.Cooling & Solidification:",
            first: "The mold is allowed to cool, causing the metal to solidify into the desired shape.",
        },
        {
            title: "7.Shell Removal:",
            first: "The ceramic shell is broken away, revealing the rough cast parts."
        },
        {
            title: "8.Finishing:",
            first: "The cast components are cut from the sprue tree, and finishing processes such as machining, grinding, and polishing are performed to meet precise specifications."
        }
    ];

    return (
        <div className="process_parent_main_div">
            <div className="process_images_first_div">
                <motion.img
                    className='process_image_first'
                    src={process1}
                    alt="Process 1"
                    animate={{
                        x: ["0%", "100%", "0%"], // Moving back and forth along x-axis
                        y: ["0%", "30%", "0%"], // Moving up and down along y-axis
                    }}
                    transition={{
                        repeat: Infinity, // Loop indefinitely
                        repeatType: "loop", // Loop animation continuously
                        duration: 10, // Total time to complete one loop (adjust as needed)
                        ease: "easeInOut", // Smooth easing function
                    }}
                />
            </div>
            <div className="process_images_second_div">
                <motion.img
                    className='process_image_second'
                    src={process2}
                    alt="Process 2"
                    animate={{
                        x: ["0%", "-100%", "0%"], // Moving back and forth along x-axis in the opposite direction
                        y: ["0%", "-30%", "0%"], // Moving up and down in the opposite direction
                    }}
                    transition={{
                        repeat: Infinity, 
                        repeatType: "loop", 
                        duration: 12, // Duration for this image's loop
                        ease: "easeInOut",
                    }}
                />
            </div>
            <div className="process_images_third_div">
                <motion.img
                    className='process_image_third'
                    src={process3}
                    alt="Process 3"
                    animate={{
                        x: ["0%", "50%", "0%"], // Moving back and forth along x-axis
                        y: ["0%", "-50%", "0%"], // Moving up and down along y-axis
                    }}
                    transition={{
                        repeat: Infinity, 
                        repeatType: "loop", 
                        duration: 15, // Duration for this image's loop
                        ease: "easeInOut",
                    }}
                />
            </div>

            <div className="process_main_div">
                <div className="investment_top_title" style={{ textAlign: "center"}} >The Investment Casting Process</div>
                <div className="process_steps">
                    {data.map((step, index) => (
                        <div key={index} className="process_step">
                            <div className="step_title">{step.title}</div>
                            <div className="step_description">
                                <div>{step.first}</div>
                                {step.second && <div>{step.second}</div>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Process;
