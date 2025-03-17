import React, { useEffect, useRef, useState } from "react";

function HeroService() {
  const canvasRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update canvas size on window resize
  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Function to generate a random faded color
    const getRandomFadedColor = () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const alpha = 0.3; // Set alpha for faded effect
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    // Function to draw a random shape
    const drawRandomShape = () => {
      const shapes = ["circle", "rectangle", "triangle"];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];

      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 40 + 40; // Smaller size: random between 20 and 60
      const color = getRandomFadedColor();

      ctx.fillStyle = color;

      switch (shape) {
        case "circle":
          ctx.beginPath();
          ctx.arc(x, y, size / 2, 0, Math.PI * 2);
          ctx.fill();
          break;

        case "rectangle":
          ctx.fillRect(x, y, size, size);
          break;

        case "triangle":
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + size, y);
          ctx.lineTo(x + size / 2, y - size);
          ctx.closePath();
          ctx.fill();
          break;

        default:
          break;
      }
    };

    // Clear the canvas and draw 15 random shapes (more shapes for better coverage)
    const drawShapes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 15; i++) {
        drawRandomShape();
      }
    };

    // Set canvas size dynamically
    canvas.width = canvasSize.width;
    canvas.height = canvasSize.height;

    // Initial draw
    drawShapes();

    // Redraw shapes every 2 seconds
    const interval = setInterval(drawShapes, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [canvasSize]); // Redraw shapes when canvas size changes

  return (
    <section className="bg-white p-8 font-sans relative overflow-hidden">
      {/* Canvas for random shapes */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        width={canvasSize.width}
        height={canvasSize.height}
      ></canvas>

      <div className="max-w-6xl mx-auto relative z-10">
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
