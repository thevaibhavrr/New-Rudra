import React, { useEffect, useState } from 'react'
import Logosection from '../Components/Home/logosection'
import Homedetails from '../Components/Home/details'
import HomeProduct from '../Components/Home/product'
import Facilities from '../Components/Home/Facilities'
import Footer from '../Components/footer/footer'

function Home() {
    const [isInitialLoad, setIsInitialLoad] = useState(true);
  
    // Scroll to the top on initial load
    useEffect(() => {
      if (isInitialLoad) {
        window.scrollTo(0, 0); // This scrolls the page to the top
        setIsInitialLoad(false); // After the first load, set isInitialLoad to false
      }
    }, [isInitialLoad]);
  return (
    <div >
        <Logosection/>
        <Homedetails/>  
        <HomeProduct/>
        <Facilities/>
    </div>
  )
}

export default Home