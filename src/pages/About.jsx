import React from "react";
// Importing the menu icon
import {
  BookOpen,
  Users,
  Trophy,
  Target,
  Heart,
  GraduationCap,
} from "lucide-react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

// Floating Icons Component
function FloatingIcons() {
  const icons = [BookOpen, Users, Trophy, Target, Heart, GraduationCap];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, index) => (
        <div
          key={index}
          className="absolute text-blue-200 opacity-50 animate-float"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          <Icon className="w-12 h-12" />
        </div>
      ))}
    </div>
  );
}

// ValueCard Component
function ValueCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
        {Icon && <Icon className="w-6 h-6 text-blue-600" />}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

//header
// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating Icons */}
      <FloatingIcons />

      {/* Header Section */}

      <Navigation />
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url("/About.jpeg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            minHeight: "100vh",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            Our Journey in EDUCATION
          </h1>
          <p className="text-xl text-white mb-8 font-dancing drop-shadow-xl">
            Empowering minds, shaping futures, and fostering excellence in
            education since 2025
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            At <span className="text-clr-primary font-bold">EduCARE</span>, we
            believe in the transformative power of education. Our mission is to
            provide accessible, high-quality education that empowers individuals
            to reach their full potential and make meaningful contributions to
            society.
          </p>
        </div>

        {/* Beautifully Styled Quote */}
        <div className="absolute bottom-4 right-6 md:right-12 max-w-xs py-0 text-right">
          <p className="text-lg text-black italic font-dancing leading-relaxed">
            "Education is the most powerful weapon which you can use to change
            the world."
          </p>
          <p className="text-sm text-blue-600 font-semibold mt-0">
            — Nelson Mandela
          </p>
        </div>
      </section>

      {/* Mission Statement
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            At <span className="text-clr-primary font-bold">EduCARE</span>, we
            believe in the transformative power of education. Our mission is to
            provide accessible, high-quality education that empowers individuals
            to reach their full potential and make meaningful contributions to
            society.
          </p>
        </div>
      </section> */}

      {/* Values Grid */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ValueCard
              icon={BookOpen}
              title="Excellence in Learning"
              description="We strive for academic excellence and continuous improvement in all our educational programs."
            />
            <ValueCard
              icon={Users}
              title="Inclusive Community"
              description="We foster a diverse and inclusive learning environment where every voice matters."
            />
            <ValueCard
              icon={Trophy}
              title="Achievement Focused"
              description="We celebrate and support the achievements of our students and educators."
            />
            <ValueCard
              icon={Target}
              title="Innovation"
              description="We embrace innovative teaching methods and modern educational technologies."
            />
            <ValueCard
              icon={Heart}
              title="Compassionate Care"
              description="We provide supportive care and guidance to help students thrive."
            />
            <ValueCard
              icon={GraduationCap}
              title="Lifelong Learning"
              description="We inspire a passion for continuous learning and personal growth."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Heading and Subheading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transforming Education, One Student at a Time
            </h2>
            <p className="text-xl text-gray-600">
              Our commitment to excellence is reflected in the numbers. Join
              thousands of learners who have transformed their lives with
              EduCARE.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Stat 1: Students Enrolled */}
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600 text-lg">Students Enrolled</div>
              <p className="text-sm text-gray-500 mt-2">
                From beginners to advanced learners, we cater to all levels.
              </p>
            </div>

            {/* Stat 2: Expert Educators */}
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600 text-lg">Expert Educators</div>
              <p className="text-sm text-gray-500 mt-2">
                Industry professionals with years of experience.
              </p>
            </div>

            {/* Stat 3: Student Satisfaction */}
            <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600 text-lg">Student Satisfaction</div>
              <p className="text-sm text-gray-500 mt-2">
                Rated by our students for quality and impact.
              </p>
            </div>
          </div>

          {/* Optional Call-to-Action */}
          <div className="text-center mt-12">
            <a
              href="/signup"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Join Us Today
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
