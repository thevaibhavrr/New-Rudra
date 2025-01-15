import React, { useEffect, useState } from 'react'
import InvestmentTop from '../Components/Investment/InvestmentTop'
import Keyfeatures from '../Components/Investment/Keyfeatures'
import Advantages from '../Components/Investment/Advantages'
import Process from '../Components/Investment/Process'
import Applications from '../Components/Investment/Applications'
import Navbar from '../Components/utils/Navbar'

function Investment() {
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
        <InvestmentTop/>
        <Keyfeatures/>
        <Process/>
        <Advantages/>
        <Applications/>
    </div>
  )
}

export default Investment