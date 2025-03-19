import React from "react";
interface CourseCardProps {
  title: string;
  image: string;
}

export function CourseCard({ title, image }: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
    </div>
  );
}
