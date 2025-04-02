import AboutUs from "./pages/AboutUs"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/HomePage"
import { Courses } from "./pages/Courses"
import OnlineShop from "./pages/OnlineShop"
import Contact from "./pages/Contact"

function App() {



  return (
    <>

      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/shop" element={<OnlineShop/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>




    </>
  )
}

export default App
