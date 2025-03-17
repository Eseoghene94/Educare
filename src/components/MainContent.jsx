import React from "react";

function MainContent() {
  return (
    <main className="flex-1 p-6">
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Date Analytics 2.1</h3>
          <p className="text-gray-600">
            Learn advanced data analytics techniques.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Animation for Beginners</h3>
          <p className="text-gray-600">Start your journey in animation.</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Cybersecurity Fundamentals</h3>
          <p className="text-gray-600">
            Understand the basics of cybersecurity.
          </p>
        </div>
        {/* Add more courses as needed */}
      </div>

      {/* Additional Sections */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Other Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Downloads</h3>
            <p className="text-gray-600">Access your downloaded materials.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Subscription</h3>
            <p className="text-gray-600">Manage your subscription plans.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Scholarship</h3>
            <p className="text-gray-600">Explore scholarship opportunities.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Policy</h3>
            <p className="text-gray-600">Read our terms and conditions.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
