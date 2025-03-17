import React from "react";
import { Link } from "react-router-dom";

function HeroTestimonial() {
  return (
    <section className="min-h-[80vh] p-8">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-5xl font-bold text-blue-700 text-center mb-6">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 my-8 md:my-12  lg:grid-cols-3 place-items-center gap-6 max-w-5xl md:max-w-full">
          {/* Testimonial 1 */}
          <div className="bg-gradient-to-b from-[#1b2337] to-[#222b45] p-6 rounded-xl shadow-lg text-white text-center">
            <img
              src="/mentor-testimonial.png"
              alt="mentor"
              className="w-16 h-16 mx-auto rounded-full border-2 object-cover border-white"
            />
            <h3 className="text-lg font-semibold mt-4">Cynthia Douglas</h3>

            <p className="mt-3 text-gray-300">
              I thought it was going to take me for ever to land a job but with
              the help of this app, I was able to learn a skill, build my
              profile and get connected to the right people. Here I am now.
              senior manager.
            </p>
          </div>

          {/* Testimonial 2 (Highlighted) */}
          <div className="bg-gradient-to-b from-[#1b2337] to-[#3a4071] p-6 rounded-xl shadow-lg text-white text-center transform scale-105">
            <img
              src="/mentor-testimonial.png"
              alt="mentor"
              className="w-16 h-16 mx-auto rounded-full border-2 object-cover border-white"
            />
            <h3 className="text-lg font-semibold mt-4">Eseoghene David</h3>
            <p className="mt-3 text-gray-300">
              Getting to hear other peoples stories and life experience is a
              plus here. I wasn’t the best at having the right attitude to work
              or having a good relationship with people. That all changed when I
              came across EduCARE. I work and earn during the holidays too.
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-gradient-to-b from-[#1b2337] to-[#222b45] p-6 rounded-xl shadow-lg text-white text-center">
            <img
              src="/mentor-testimonial.png"
              alt="mentor"
              className="w-16 h-16 mx-auto rounded-full border-2 object-cover border-white"
            />
            <h3 className="text-lg font-semibold mt-4">Emily Carter</h3>
            <p className="mt-3 text-gray-300">
              My child has made a lot of improvement ever since Aunty Sharon has
              been teaching him with Educare. At least he now has knowledge of
              what she should know at her age. He won't feel left out in the
              society.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center py-3 ">
          <Link
            to="/signup"
            className="px-6 md:px-8 text-lg md:text-xl py-3 bg-clr-primary text-white rounded-[20px] shadow-md hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroTestimonial;
