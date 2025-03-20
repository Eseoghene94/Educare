import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const mentors = [
  {
    name: "Mercy Marely",
    role: "Fashion Designer",
    mentored: 44,
    rating: 5,
    image: "/mentor-1.png",
  },
  {
    name: "Sharon Stone",
    role: "Dance Tutor",
    mentored: 23,
    rating: 5,
    image: "/mentor-2.png",
  },
];

const MentorsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? mentors.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === mentors.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gray-100 p-6 rounded-2xl shadow-md w-full ">
      <h2 className="text-lg md:text-xl font-semibold text-gray-900">
        Mentors
      </h2>
      <div className="bg-gray-100 p-3 md:p-6  rounded-2xl w-full flex flex-col items-center ">
        <div className="flex items-center flex-col md:flex-row gap-6">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`flex items-center flex-col md:flex-row  bg-white p-4 rounded-xl shadow-lg transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-50"
              }`}
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full md:w-32 h-32 rounded-lg object-cover"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">
                  {mentor.name}: {mentor.role}
                </h3>
                <p className="text-sm font-bold text-gray-600">
                  Mentored: {mentor.mentored} people
                </p>
                <p className="text-sm font-bold">Ratings:</p>
                <div className="flex text-yellow-400 text-lg">
                  {"★".repeat(mentor.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 mt-4">
          <button onClick={prevSlide} className="p-2 text-gray-600">
            <FaChevronLeft size={20} />
          </button>
          {mentors.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full bg-gray-400 ${
                index === currentIndex ? "bg-black" : ""
              }`}
            ></div>
          ))}
          <button onClick={nextSlide} className="p-2 text-gray-600">
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorsCarousel;
