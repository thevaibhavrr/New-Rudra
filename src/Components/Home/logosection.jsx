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


// import React from "react";
// import { motion, useInView } from "framer-motion";
// import "../../styles/Home/logosection.css";
// import Vid from "../../assets/Home/homevid.mp4";
// import Homedetails from "./details";

// function Logosection() {
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.5 });
//   const [fixed, setFixed] = React.useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       if (ref.current) {
//         const rect = ref.current.getBoundingClientRect();
//         setFixed(rect.bottom <= 0); // Fix the logo when the video is out of view.
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <motion.div
//         ref={ref}
//         className="logo_main_div_home_page"
//         initial={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="video_div">
//           <div className={`logo-container ${fixed ? "fixed" : "sticky"}`}></div>
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

// import React from "react";
// import { motion, useInView } from "framer-motion";
// import "../../styles/Home/logosection.css";
// import Vid from "../../assets/Home/homevid.mp4";
// import Homedetails from "./details";

// function Logosection() {
//   const ref = React.useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.5 });
//   const [fixed, setFixed] = React.useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       if (ref.current) {
//         const rect = ref.current.getBoundingClientRect();
//         setFixed(rect.bottom <= 0); // Fix the logo when the video is out of view.
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <motion.div
//         ref={ref}
//         className="logo_main_div_home_page"
//         initial={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="video_div">
//           <div className={`logo-container ${fixed ? "fixed" : "sticky"}`}></div>
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
        setFixed(rect.bottom <= window.innerHeight * 0.1); // Fix when 80% of the screen height is passed.
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

      {/* <motion.div
        className="details_section"
        initial={{ opacity: 0 }}
        animate={{ opacity: fixed ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Homedetails />
      </motion.div> */}
    </>
  );
}

export default Logosection;
