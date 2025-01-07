import React from "react";
import { motion } from "framer-motion";
import "../../styles/Home/logosection.css";
import Vid from "../../assets/Home/homevid.mp4";
import Navbar from "../utils/Navbar";

function Logosection() {
  const ref = React.useRef(null);
  const [fixed, setFixed] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setFixed(rect.bottom <= window.innerHeight * 0.2);
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

// import React from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import "../../styles/Home/logosection.css";
// import Vid from "../../assets/Home/homevid.mp4";
// import Navbar from "../utils/Navbar";

// function Logosection() {
//   const ref = React.useRef(null);
//   const [fixed, setFixed] = React.useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       if (ref.current) {
//         const rect = ref.current.getBoundingClientRect();
//         setFixed(rect.bottom <= window.innerHeight * 0.2);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <AnimatePresence mode="wait">
//         {fixed ? (
//           <motion.div
//             key="navbar"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="navbar-container"
//           >
//             <Navbar />
//           </motion.div>
//         ) : (
//           <motion.div
//             key="videoSection"
//             ref={ref}
//             className="logo_main_div_home_page"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="video_div">
//               <div className={`logo-container ${fixed ? "fixed" : "sticky"}`}></div>
//               <video className="background-video" autoPlay loop muted>
//                 <source src={Vid} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default Logosection;
