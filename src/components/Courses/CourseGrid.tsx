import React from "react";
import { CourseCard } from "./CourseCard";
const courses = [
  {
    title: "Data Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Animation for Beginners",
    image:
      "https://unsplash.com/photos/a-woman-is-painting-a-picture-in-an-art-studio-9_h93uTe5MM",
  },
  {
    title: "Cybersecurity Fundamentals",
    image:
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Advanced UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Financial Literacy for Kids",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Photography 101",
    image:
      "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export function CourseGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {courses.map((course) => (
        <CourseCard key={course.title} {...course} />
      ))}
    </div>
  );
}
