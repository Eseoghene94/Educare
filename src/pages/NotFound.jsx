import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  // Generate random stars
  const stars = Array.from({ length: 100 }).map((_, index) => {
    const style = {
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 3}px`,
      height: `${Math.random() * 3}px`,
      animationDelay: `${Math.random() * 2}s`,
    };
    return <div key={index} className="star" style={style}></div>;
  });

  return (
    <div className="space-background min-h-screen flex justify-center items-center flex-col relative">
      {/* Stars */}
      <div className="stars">{stars}</div>

      {/* Orbit and Planet */}
      <div className="orbit">
        <div className="planet"></div>
      </div>

      {/* Floating Text */}
      <h2 className="not-found-text text-6xl md:text-8xl font-bold text-white my-10">
        404 - Not Found
      </h2>

      {/* Glowing Button */}
      <Link
        to="/"
        className="not-found-button px-8 py-4 text-lg md:text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Return to Home Page
      </Link>
    </div>
  );
}

export default NotFound;
