import ContactPage from "./Components/contect/Contactpage";
import Footer from "./Components/footer/footer";
import About from "./pages/About";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Investment from "./pages/Investment";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="main_divs_comman">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/investment" element={<Investment />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
