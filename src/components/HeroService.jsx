import React from "react";

function HeroService() {
  return (
    <section className="bg-white p-8  font-sans">
      <div className="max-w-6xl  mx-auto ">
        {" "}
        <h2 className="text-5xl font-bold text-blue-700 text-center mb-6">
          Our Services
        </h2>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-4">
            <img
              src="./child.png"
              alt="For Kids"
              className="w-[400px] h-[400px] rounded-full object-cover"
            />
            <div>
              <h3 className="text-3xl font-serif">For Kids</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <span className="font-bold">Personalized Learning</span> –
                  Engaging lessons tailored to each child's needs.
                </li>
                <li className="">
                  <span className="font-bold">Mentorship & Guidance</span> –
                  Access to experienced professionals who inspire and support.
                </li>
                <li className="">
                  <span className="font-bold">Skill Development</span> –
                  Hands-on training in valuable real-world skills.
                </li>
                <li className="">
                  <span className="font-bold">Career Exploration</span> –
                  Helping kids discover and prepare for future opportunities.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-4">
            <div>
              <h3 className="text-3xl font-serif">For Adults/Youths</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <span className="font-bold">Career Readiness</span> – Explore
                  different career paths and gain insights into various
                  industries.
                </li>
                <li>
                  <span className="font-bold">Skill Development</span> –
                  Hands-on training in practical skills that prepare you for the
                  job market.
                </li>
                <li>
                  <span className="font-bold">Job Connectivity</span> – Connect
                  with people who have ready-to-go jobs.
                </li>
              </ul>
            </div>
            <img
              src="./adult.png"
              alt="For Kids"
              className="w-[400px] h-[400px] rounded-full object-cover"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-4">
            <img
              src="./mentor.png"
              alt="For Mentors & Teachers"
              className="w-[400px] h-[400px] rounded-full object-cover"
            />
            <div>
              <h3 className="text-3xl font-serif">For Mentors & Teachers</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <span className="font-bold">Interactive Teaching Tools</span>{" "}
                  – Access digital resources to enhance student engagement.
                </li>
                <li>
                  <span className="font-bold">Mentorship Programs</span> – Guide
                  and inspire the next generation of learners and professionals.
                </li>
                <li>
                  <span className="font-bold">Community Support</span> – Connect
                  with other educators to share ideas and best practices.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroService;
