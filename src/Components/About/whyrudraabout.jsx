import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Importing framer-motion
import FistImage from "../../assets/about/about 1.png";
import SecondImage from "../../assets/about/about 2.png";
import ThirdImage from "../../assets/about/about 3.png";
import FourthImage from "../../assets/about/about 4.png";
import FifthImage from "../../assets/about/about 5.png";
import SixthImage from "../../assets/about/about 6.png";
import "../../styles/about/whyrudraabout.css";

function Whyrudraabout() {
    const [selectedOption, setSelectedOption] = useState({
        image: FistImage,
        title: "Advanced Production Facilities:",
        message: "Our state-of-the-art facilities provide unrivaled process control, repeatability, and reliability. We maintain rigorous standards throughout the manufacturing process to meet your needs precisely.",
    });

    const options = [
        {
            image: FistImage,
            title: "Advanced Production Facilities:",
            message: "Our state-of-the-art facilities provide unrivaled process control, repeatability, and reliability. We maintain rigorous standards throughout the manufacturing process to meet your needs precisely.",
        },
        {
            image: SecondImage,
            title: "Reliable Delivery:",
            message: "Enjoy an on-time delivery rate of almost 100%, thanks to our unique Work-In-Progress Inventory Tracking system. Our Just-In-Time delivery capability allows us to respond swiftly to engineering changes or new product launches.",
        },
        {
            image: ThirdImage,
            title: "Superior Quality:",
            message: "Our products meet the highest quality standards, delivered on time, ensuring the lowest total cost for our customers.",
        },
        {
            image: FourthImage,
            title: "Fast Lead Times:",
            message: "We offer unprecedented lead times of just 2 to 3 weeks for new product launches, compared to the industry standard of 6 to 8 weeks.",
        },
        {
            image: FifthImage,
            title: "Comprehensive In-House Services:",
            message: "We offer in-house tooling, heat treatment, assembly, machining, and other finishing services, ensuring fast and reliable completion of projects.",
        },
        {
            image: SixthImage,
            title: "Rapid Prototyping:",
            message: "By leveraging cutting-edge technologies, we can create wax prototypes for your castings within days. These prototypes can then quickly move into production, allowing us to deliver finished castings in as little as a week.",
        },
    ];

    return (
        <div className="whychoose_main_div_about">
            <div className="whychoose_main_div_about_text">Why Choose Rudra Castings?</div>
            <div className="whychoose_main_div_about_container">
                <div className="whychoose_main_div_about_options">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className={`whychoose_option ${selectedOption.title === option.title ? 'active' : ''}`}
                            onClick={() => setSelectedOption(option)}
                        >
                            <span className="option_text">{option.title}</span>
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{
                                    rotate: selectedOption.title === option.title ? 180 : 0,
                                    opacity: selectedOption.title === option.title ? 1 : 0.6,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                {selectedOption.title === option.title ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-chevron-down"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-chevron-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                                        />
                                    </svg>
                                )}
                            </motion.div>
                        </div>
                    ))}
                </div>
                
                {/* Motion div with key for re-rendering */}
                <motion.div
                    key={selectedOption.title} // Add key to trigger remount animation
                    className="whychoose_main_div_about_display"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="image_wrapper">
                        <motion.img 
                            src={selectedOption.image} 
                            alt={selectedOption.title} 
                            className="display_image"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    <div className="display_content">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {selectedOption.title}
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {selectedOption.message}
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default Whyrudraabout;
