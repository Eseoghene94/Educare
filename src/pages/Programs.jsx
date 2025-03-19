import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";

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
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Web Dev",
  },
  {
    id: 3,
    title: "Data Science with Python",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "AI/ML",
  },
  {
    id: 4,
    title: "UI/UX Design Basics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Design",
  },
];
function Programs() {
  const [activeCategory, setActiveCategory] = useState("New Courses");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % courses.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + courses.length) % courses.length);
  };
  return (
    <div className="min-h-screen  bg-gray-50">
      <Navigation />
      <div className="container py-6">
        <section className="flex justify-between  my-20 ">
          <div className=" mb-6 ">
            <h2 className="text-6xl font-bold">
              Take Your Knowledge a Degree Further
            </h2>
          </div>
          <div>
            <h3 className="bg-clr-primary w-36  text-white py-2 px-4 rounded-md">
              Our Courses
            </h3>
            <p className="text-gray-600">
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
              className={`px-4 py-2 rounded-md ${activeCategory === cat.name ? "bg-clr-primary text-white" : "bg-gray-200 text-gray-800"}`}
            >
              {cat.name} {cat.count && `(${cat.count})`}
            </button>
          ))}
        </div>

        {/* Course Carousel */}
        <div className="relative flex items-center justify-center space-x-4 px-8">
          <button onClick={prevSlide} className="p-2 bg-gray-300 rounded-full">
            <ChevronLeft size={24} />
          </button>

          <div className="w-[400px] bg-white p-4 shadow-lg rounded-lg ">
            <div>
              <img
                src={courses[currentIndex].image}
                alt={courses[currentIndex].title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-sm w-min bg-blue-100 mt-4 px-2 py-1 rounded-full">
              {courses[currentIndex].category}
            </h3>
            <h3 className="text-lg font-semibold mt-2">
              {courses[currentIndex].title}
            </h3>
          </div>

          <button onClick={nextSlide} className="p-2 bg-gray-300 rounded-full">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Upgrade Section */}
        <section className="mt-10 grid grid-cols-2 py-6 px-4 rounded-lg ">
          <div className="flex items-center text-center flex-col">
            <h2 className="text-2xl font-semibold">
              Upgrade Your Skills with Free Online Courses
            </h2>
            <p className="mt-2">
              Ready to gain in demand skills to kick start your career? The
              EduCare Start Programme to give you a seamless experience.{" "}
            </p>
            <button className="mt-4 px-6 py-2 bg-clr-primary text-white rounded-md font-medium">
              Start Now
            </button>
          </div>
          {/* <div className=" h-[300px] object-cover">
              <img src="/program.jpg" alt="program" />
            </div> */}
        </section>
      </div>
    </div>
  );
}

export default Programs;
