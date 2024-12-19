

// import React from "react";
// import { motion, useInView } from "framer-motion";
// import "../../styles/Home/logosection.css";
// import Vid from "../../assets/Home/homevid.mp4";
// import Homedetails from "./details";

// function Logosection() {
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.5 });

//   return (
//     <>
//       <motion.div
//         ref={ref}
//         className="logo_main_div_home_page"
//         initial={{ opacity: 1 }}
//         // animate={{ opacity: isInView ? 1 : 0 }}
//         // animate={{ opacity: isInView ? 1 : 0 , height: isInView ? "120vh" : "80vh" }}

//         transition={{ duration: 1 }}
//       >
//         <div className="video_div">
//           <div className="logo-container sticky"></div>
//           <video className="background-video" autoPlay loop muted>
//             <source src={Vid} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </motion.div>

//       <motion.div
//         className="details_section"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isInView ? 0 : 1 }}
//         transition={{ duration: 1 }}
//       >
//         <Homedetails />
//       </motion.div>
//     </>
//   );
// }

// export default Logosection;


import React from "react";
import { motion, useInView } from "framer-motion";
import "../../styles/Home/logosection.css";
import Vid from "../../assets/Home/homevid.mp4";
import Homedetails from "./details";

function Logosection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <>
      <motion.div
        ref={ref}
        className="logo_main_div_home_page"
        initial={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="video_div">
          <div className="logo-container sticky"></div>
          <video className="background-video" autoPlay loop muted>
            <source src={Vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>

      <motion.div
        className="details_section"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        <Homedetails />
      </motion.div>
    </>
  );
}

export default Logosection;
