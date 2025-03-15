import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
// import Features from "./pages/Features";
// import Faq from "./pages/Faq";
// import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
// import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/features" element={<Features />} /> */}
        {/* <Route path="/faq" element={<Faq />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        // <Route path="/signup" element={<Signup />} />
        {/* <Route path="/signin" element={<Signin />} /> */}
  
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;