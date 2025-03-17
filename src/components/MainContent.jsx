import React from "react";

const courses = [
  {
    title: "Data Analytics 2.1",
    image: "/images/data-analytics.jpg",
  },
  {
    title: "Animation for Beginners",
    image: "/images/animation.jpg",
  },
  {
    title: "Cybersecurity Fundamentals",
    image: "/images/cybersecurity.jpg",
  },
  {
    title: "Advanced UI/UX Design",
    image: "/images/ui-ux.jpg",
  },
  {
    title: "Financial Literacy for Kids",
    image: "/images/financial-literacy.jpg",
  },
  {
    title: "Photography 101",
    image: "/images/photography.jpg",
  },
];

function MainContent() {
  return (
    <main className="flex-1 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Courses</h2>
        <select className="border p-2 rounded-lg">
          <option>View All</option>
          <option>Popular</option>
          <option>New</option>
          <option>Recommended</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img
              src={course.image}
              alt={course.title}
              className="rounded-lg mb-2 w-full h-40 object-cover"
            />
            <h3 className="text-lg font-bold">{course.title}</h3>
          </div>
        ))}
      </div>
    </main>
  );
}

export default MainContent;
