import React from 'react'
import "./contect.css"
import FirstImage from "../../assets/contect/contect1.png";
import SecondImage from "../../assets/contect/contect2.png";
import Navbar from '../utils/Navbar';
function Contactpage() {
    return (
        <div>
            <Navbar />
            <div>
                <ContactPage />
            </div>
            <div>

                <Reacttous />
            </div>


        </div>
    )
}

export default Contactpage


function ContactPage() {
    return (
        <div className="contact_us_main_div">
            <div className="contact_us_main_title">Contact Us</div>

            {/* card */}
            <div className='contact_us_card_section' >
                <div className='contact_us_data' >
                    <div>
                        <div className='contact_us_title'>PHONE NUMBER</div>
                        <div className='contact_us_details'>+91 95242 00019</div>
                    </div>
                    <div>
                        <div className='contact_us_title'>ADDRESS</div>
                        <div className='contact_us_details'>Peer Gajju Shah Road, Badinpur, Mandi Gobindgarh, 147301</div>
                    </div>
                    <div>
                        <div className='contact_us_title'>EMAIL</div>
                        <div className='contact_us_details'>info@rudracastings.com</div>
                    </div>
                </div>
                <div className='contact_us_button_div' >
                    <div className='contact_us_message_button' > Message Us → </div>
                </div>
                <div className='contact_us_map' >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3427.0675134双4!2d76.2931!3d30.6479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDM4JzUyLjQiTiA3NsKwMTcnMzUuMiJF!5e0!3m2!1sen!2sin!4v1625641254693!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
            {/* image */}
            <div className='contact_us_image_div' >
                <img src={FirstImage} alt="" />
            </div>

        </div>
    )
}


function Reacttous() {
    return (
        <div className='main_react_to_us'>
            <div className='contact_us_main_title' >React to Us</div>
            <div className='react_to_us_form' >
                <div className='contect_form_input' >
                    <div>
                        <input
                            type="text"
                            placeholder="NAME"
                            className="form-input-contect"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="PHONE NO."
                            className="form-input-contect"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="EMAIL ADDRESS"
                            className="form-input-contect"
                        />
                    </div>
                </div>
                <div className='message_box_contact_us' >
                    <div  >
                        <textarea
                            placeholder="MESSAGE"
                            className="form-textarea"
                        ></textarea>
                    </div>
                    <div>

                        <button type="submit" className="submit_button_reach_us">
                            SEND
                        </button>
                    </div>
                </div>
            </div>
            <div className='reach_us_image_div' >
                <img src={SecondImage} alt="" />
            </div>
        </div>
    )
}