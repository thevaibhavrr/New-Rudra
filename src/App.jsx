import About from './pages/About';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <div className='main_divs_comman'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
 
        </Routes>
      </div>
    </>
  )
}

export default App
