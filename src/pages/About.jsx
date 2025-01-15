import React, { useEffect, useState } from 'react'
import Topdetailsabout from '../Components/About/topdetailsabout'
import Whyrudraabout from '../Components/About/whyrudraabout'
import Footer from '../Components/footer/footer'
import Navbar from '../Components/utils/Navbar'

function About() {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Scroll to the top on initial load
  useEffect(() => {
    if (isInitialLoad) {
      window.scrollTo(0, 0); // This scrolls the page to the top
      setIsInitialLoad(false); // After the first load, set isInitialLoad to false
    }
  }, [isInitialLoad]);
  return (
    <div>
      <Navbar/>
        <Topdetailsabout/>
        <Whyrudraabout/>
        
    </div>
  )
}

export default About