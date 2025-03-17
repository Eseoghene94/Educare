import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
// import Features from "./pages/Features";
// import Faq from "./pages/Faq";
// import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NotFound from "./pages/NotFound";
import TeacherSignup from "./pages/TeacherSignup";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/features" element={<Features />} /> */}
        {/* <Route path="/faq" element={<Faq />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/TeacherSignup" element={<TeacherSignup />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
