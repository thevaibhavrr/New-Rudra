import React from 'react'
import Logosection from '../Components/Home/logosection'
import Homedetails from '../Components/Home/details'
import HomeProduct from '../Components/Home/product'
import Facilities from '../Components/Home/Facilities'
import Footer from '../Components/footer/footer'

function Home() {
  return (
    <div >
        <Logosection/>
        {/* <Homedetails/>   */}
        <HomeProduct/>
        <Facilities/>
        <Footer/>
    </div>
  )
}

export default Home