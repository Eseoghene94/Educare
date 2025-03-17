import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <div>
          <p>&copy; 2025 EducARE. All rights reserved.</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/downloads" className="hover:text-blue-200">
                Downloads
              </a>
            </li>
            <li>
              <a href="/subscription" className="hover:text-blue-200">
                Subscription
              </a>
            </li>
            <li>
              <a href="/scholarship" className="hover:text-blue-200">
                Scholarship
              </a>
            </li>
            <li>
              <a href="/policy" className="hover:text-blue-200">
                Policy
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
