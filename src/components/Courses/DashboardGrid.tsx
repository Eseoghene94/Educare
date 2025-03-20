import React from "react";
const courses = [
  {
    title: "Data Analytics",
    status: "Complete",
  },
  {
    title: "Animation for Beginners",
    status: "Complete",
  },
  {
    title: "Cybersecurity Fundamentals",
    status: "Complete",
  },
  {
    title: "Advanced UI/UX Design",
    status: "Complete",
  },
  {
    title: "Financial Literacy for Kids",
    status: "Complete",
  },
  {
    title: "Photography 101",
    status: "Complete",
  },
];

type CourseCardProps = {
  title: string;
  status: string;
};
const CourseCard = ({ title, status }: CourseCardProps) => {
  return (
    <div className=" w-64 md:w-[360px] h-40 flex flex-col justify-between p-4 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <button className="flex-end">{status}</button>
    </div>
  );
};

export function DashbordGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {courses.map((course) => (
        <CourseCard key={course.title} {...course} />
      ))}
    </div>
  );
}
