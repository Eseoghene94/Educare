import React from "react";
import { Link } from "react-router-dom";

//Not Found Page
function NotFound() {
  return (
    <div className=" hero   flex justify-center items-center flex-col ">
      <h2 className="text-6xl text-clr-background my-10 ">Not found</h2>
      <Link
        to="/"
        className="px-6 md:px-8 text-lg md:text-xl py-3 bg-clr-primary text-white rounded-[20px] shadow-md hover:bg-blue-700 "
      >
        Return to Home page
      </Link>
    </div>
  );
}

export default NotFound;
