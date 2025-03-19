import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";

// Hero section for the landing page
function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="hero text-clr-txt-primary  bg-gray-900 min-h-screen">
      <div className="container mx-auto px-6">
        <header className="flex justify-between items-center py-6">
          <img src="./logo.svg" alt="logo" className="h-10" />

          {/* Navigation */}
          <nav
            className={`lg:flex ${
              menuOpen ? "block" : "hidden"
            } absolute lg:relative  top-0 max-md:top-20 left-0 w-full lg:w-auto bg-gray-900 lg:bg-transparent p-5 lg:p-0 shadow-lg lg:shadow-none`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-10 text-base font-bold text-white">
              <li>
                <Link to="/about" className="block py-2 hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="block py-2 hover:underline">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/Profile" className="block py-2 hover:underline">
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/TeacherSignup"
                  className="block py-2 hover:underline"
                >
                  Become a Teacher
                </Link>
              </li>
              <li>
                <Link to="/signin" className="block py-2 hover:underline">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <LiaTimesSolid size="26" className="text-clr-icon-menu" />
            ) : (
              <IoMenuOutline size="26" className="text-clr-icon-menu" />
            )}
          </button>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center h-[80vh] text-white text-center px-6 animate-fade-up">
          <h2 className="text-6xl md:text-8xl font-bold font-dancing">
            Learn, Grow
          </h2>
          <h2 className="text-5xl md:text-6xl mt-2 font-bold font-dancing">
            {" "}
            &{" "}
          </h2>
          <h2 className="text-5xl md:text-6xl font-bold mt-2 md:mt-2 font-dancing">
            Unlock Opportunities
          </h2>
          <p className="text-lg md:text-xl my-8 font-poppins">
            Develop skills, gain real-world experience,{" "}
            <br className="hidden md:block" /> and connect with mentors and job
            opportunities.
          </p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-x-5 md:space-y-0">
            <Link
              to="/signup"
              className="px-6 md:px-8 text-lg md:text-xl py-3 bg-blue-600 text-white rounded-[20px] shadow-md hover:bg-blue-700 font-bold"
            >
              Get Started
            </Link>
            <Link
              to="/signin"
              className="px-6 md:px-8 py-3 text-lg md:text-xl border border-blue-800 text-white rounded-[20px] shadow-md hover:bg-white hover:text-blue-950 font-medium"
            >
              Learn more
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
