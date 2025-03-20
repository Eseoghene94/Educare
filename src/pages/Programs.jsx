import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const categories = [
  { name: "New Courses", count: 12 },
  { name: "Recommended", count: 8 },
  { name: "Most Popular", count: null },
];

const courses = [
  {
    id: 1,
    title: "Data Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Marketing",
  },
  {
    id: 2,
    title: "React Development Essentials",
    image: "./reactjs.jpg",
    category: "Web Dev",
  },
  {
    id: 3,
    title: "Data Science with Python",
    image: "./data-science.jpg",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "UI/UX Design Basics",
    image: "ux/ui.jpg",
    category: "Design",
  },
  {
    id: 5,
    title: "Advanced JavaScript",
    image: "./advanced-javascript.jpg",
    category: "Web Dev",
  },
  {
    id: 6,
    title: "Machine Learning Basics",
    image: "./ML.jpg",
    category: "AI/ML",
  },
  {
    id: 7,
    title: "Finance",
    image: "./finance.jpg",
    category: "Marketing",
  },
  {
    id: 8,
    title: "Architecture",
    image: "./drawing.jpg",
    category: "Design",
  },
  {
    id: 9,
    title: "Photography Essentials",
    image: "./photography.jpg",
    category: "Photography",
  },
];

function Programs() {
  const [activeCategory, setActiveCategory] = useState("New Courses");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3) % courses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 + courses.length) % courses.length);
  };
  const nextMobileSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  };

  const prevMobileSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };

  const visibleCourses = courses.slice(currentIndex, currentIndex + 4);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className=" py-6">
        {/* Hero Section */}
        <section className="flex md:max-w-7xl mx-auto flex-col md:flex-row justify-between my-5 md:my-12 px-8">
          <div className="mb-5 md:mb-0">
            <h2 className="text-4xl  md:text-6xl font-bold text-gray-900">
              Take Your Knowledge a Degree Further
            </h2>
          </div>
          <div className="max-w-md">
            <h3 className="bg-[#dbeafe] w-36 text-black py-2 px-4 rounded-md text-center">
              Our Courses
            </h3>
            <p className="text-gray-600 mt-4">
              Make education work for you with flexible online courses and
              mentorship.
            </p>
          </div>
        </section>

        {/* Course Categories */}
        <div className="flex justify-center space-x-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-3 md:px-6  py-3 rounded-full text-[12px] md:text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.name
                  ? "bg-clr-primary text-white shadow-lg"
                  : "bg-[#dbeafe] text-gray-800 hover:bg-gray-300"
              }`}
            >
              {cat.name} {cat.count !== null && `(${cat.count})`}
            </button>
          ))}
        </div>

        {/* Course Carousel */}
        <div className="relative flex items-center justify-center space-x-4 px-3 md:px-4">
          <button
            onClick={prevSlide}
            className="hidden md:block p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>

          <div className="flex   my-8 space-x-4 md:space-x-6 h-[100%]  overflow-hidden">
            {visibleCourses.map((course) => (
              <div
                key={course.id}
                className="w-[280px] md:w-[300px] bg-white p-4 md:p-6  rounded-xl flex-shrink-0 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={course.image}
                    alt={`${course.title} course image`}
                    className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="inline-block text-sm bg-blue-100 mt-4 px-3 py-1 rounded-full text-blue-700">
                  {course.category}
                </span>
                <h2 className="text-lg font-semibold mt-2 text-gray-900">
                  {course.title}
                </h2>
              </div>
            ))}
          </div>

          <button
            onClick={nextSlide}
            className=" hidden md:block p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>
        <div className="md:hidden relative flex items-center justify-center space-x-4 px-3 md:px-4">
          <button
            onClick={prevMobileSlide}
            className="p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          <button
            onClick={nextMobileSlide}
            className=" p-3 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
        </div>

        {/* Upgrade Section */}
        <section className="mt-10 md:max-w-7xl mx-auto md:mt:20 py-12 px-8 rounded-xl text-black">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-3xl font-semibold">
                Upgrade Your Skills with Free Online Courses
              </h2>
              <p className="mt-4 mb-8 ">
                Ready to gain in-demand skills to kickstart your career? The
                EduCare Start Programme gives you a seamless experience.
              </p>
              <Link
                to="/signup"
                className="mt-10 px-8 py-3 bg-[#dbeafe] hover:bg-clr-primary hover:text-white  text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors shadow-lg"
              >
                Start Now
              </Link>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/2 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Upgrade Skills"
                className="w-full h-64 object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default Programs;
