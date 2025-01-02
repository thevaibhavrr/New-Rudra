import React from "react";
import { motion } from "framer-motion";
import "../../styles/Home/logosection.css";
import Vid from "../../assets/Home/homevid.mp4";
import Homedetails from "./details";

function Logosection() {
  const ref = React.useRef(null);
  const [fixed, setFixed] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setFixed(rect.bottom <= window.innerHeight * 0.1); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div
        ref={ref}
        className="logo_main_div_home_page"
        initial={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="video_div">
          <div className={`logo-container ${fixed ? "fixed" : "sticky"}`}></div>
          <video className="background-video" autoPlay loop muted>
            <source src={Vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </>
  );
}

export default Logosection;
