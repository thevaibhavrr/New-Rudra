import React, { useEffect, useState } from 'react'
import Contactpage from '../Components/contect/Contactpage'

function Contact() {
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
        <Contactpage/>
    </div>
  )
}

export default Contact