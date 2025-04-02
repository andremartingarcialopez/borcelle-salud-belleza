import AboutUs from "./pages/AboutUs"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/HomePage"
import { Courses } from "./pages/Courses"

function App() {



  return (
    <>

      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
        </Routes>
      </BrowserRouter>




    </>
  )
}

export default App
