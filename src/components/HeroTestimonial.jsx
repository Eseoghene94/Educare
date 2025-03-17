import React from "react";
import { Link } from "react-router-dom";

function HeroTestimonial() {
  return (
    <section className="min-h-[90vh] p-8 bg-gradient-to-b from-[#f0f4ff] to-[#dbeafe] relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold text-[#1e3a8a] text-center mb-12 font-sans">
          Voices of <span className="text-[#3b82f6]">Success</span>
        </h2>

        {/* Testimonial Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="flip-card-front">
                <img
                  src="/mentor-testimonial.jpg"
                  alt="mentor"
                  className="w-20 h-20 rounded-full border-4 border-[#1e3a8a] object-cover shadow-md"
                />
                <h3 className="text-xl font-bold mt-6 text-[#1e3a8a]">
                  Eseoghene David
                </h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  "EduCARE completely transformed my career!"
                </p>
              </div>
              {/* Back Side */}
              <div className="flip-card-back">
                <p className="text-lg leading-relaxed">
                  "I went from feeling stuck to landing my dream job in just 3
                  months. The mentorship and resources are unmatched."
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="flip-card-front">
                <img
                  src="/mentor-testimonial.png"
                  alt="mentor"
                  className="w-20 h-20 rounded-full border-4 border-[#1e3a8a] object-cover shadow-md"
                />
                <h3 className="text-xl font-bold mt-6 text-[#1e3a8a]">
                  Gloria Chukwu
                </h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  "EduCARE exceeded my expectations!"
                </p>
              </div>
              {/* Back Side */}
              <div className="flip-card-back">
                <p className="text-lg leading-relaxed">
                  "The community support and hands-on projects helped me build
                  confidence and skills I never thought I had."
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              {/* Front Side */}
              <div className="flip-card-front">
                <img
                  src="/mentor-testimonial.png"
                  alt="mentor"
                  className="w-20 h-20 rounded-full border-4 border-[#1e3a8a] object-cover shadow-md"
                />
                <h3 className="text-xl font-bold mt-6 text-[#1e3a8a]">
                  Emily Carter
                </h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  "EduCARE made learning fun!"
                </p>
              </div>
              {/* Back Side */}
              <div className="flip-card-back">
                <p className="text-lg leading-relaxed">
                  "As a parent, I’m thrilled with the progress my child has
                  made. The personalized approach is highly effective."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="flex justify-center items-center py-12">
          <Link
            to="/signup"
            className="px-8 py-3 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white text-lg font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Join the Movement
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroTestimonial;
