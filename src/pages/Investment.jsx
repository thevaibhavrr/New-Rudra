import React from 'react'
import InvestmentTop from '../Components/Investment/InvestmentTop'
import Keyfeatures from '../Components/Investment/Keyfeatures'
import Advantages from '../Components/Investment/Advantages'
import Process from '../Components/Investment/Process'
import Applications from '../Components/Investment/Applications'
import Navbar from '../Components/utils/Navbar'

function Investment() {
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