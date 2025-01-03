import React from 'react'
import Topdetailsabout from '../Components/About/topdetailsabout'
import Whyrudraabout from '../Components/About/whyrudraabout'
import Footer from '../Components/footer/footer'
import Navbar from '../Components/utils/Navbar'

function About() {
  return (
    <div>
      <Navbar/>
        <Topdetailsabout/>
        <Whyrudraabout/>
        
    </div>
  )
}

export default About