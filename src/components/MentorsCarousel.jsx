import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const mentors = [
  {
    category: "creative",
    list: [
      {
        name: "Mercy Marely",
        role: "Fashion Designer",
        mentored: 44,
        rating: 5,
        image: "/mentor-1.jpg",
      },
      {
        name: "Sharon Stone",
        role: "Dance Tutor",
        mentored: 23,
        rating: 5,
        image: "/mentor-2.jpg",
      },
      {
        name: "Madonna Williams  ",
        role: "Financial Advisor",
        mentored: 96,
        rating: 5,
        image: "/mentor-3.png",
      },
      {
        name: "Motunrayo Ogene  ",
        role: "Art Instructor",
        mentored: 96,
        rating: 5,
        image: "/mentor-4.png",
      },
      {
        name: "Ese Modukpe",
        role: "Financial Advisor",
        mentored: 96,
        rating: 5,
        image: "/mentor-5.png",
      },
      {
        name: "James Brown",
        role: " Aeromechanic ",
        mentored: 96,
        rating: 5,
        image: "/mentor-6.png",
      },
    ],
  },
];

const MentorsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const groupIndex = 0; // You can make this dynamic if needed
  const groupList = mentors[groupIndex].list;
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 2 < 0 ? groupList.length - 2 : prev - 2));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 2) % groupList.length);
  };

  const visibleMentors = groupList.slice(currentIndex, currentIndex + 2);
  return (
    <section className="bg-gray-100  rounded-2xl shadow-md w-full ">
      <h2 className="text-lg md:text-xl font-semibold p-4 text-gray-900">
        Mentors
      </h2>
      <div className="bg-gray-100 p-3 md:p-6  rounded-2xl w-full flex flex-col items-center ">
        <div className="flex justify-center flex-col lg:flex-row xl:justify-start gap-6">
          {visibleMentors.map((mentor, i) => (
            <div
              key={i}
              className={`flex items-center flex-col sm:flex-row  w-full  bg-white p-4 md:p-2 rounded-xl shadow-lg transition-opacity duration-500 
             
              }`}
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-full md:w-56 h-48 rounded-lg object-cover"
              />
              <div className="mx-4 my-4">
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
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-2 border rounded-full bg-white text-black shadow-md hover:bg-gray-100 transition-colors"
          >
            <FaChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="p-2 bg-white rounded-full border text-gray-600 shadow-md hover:bg-gray-100 transition-colors"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MentorsCarousel;
