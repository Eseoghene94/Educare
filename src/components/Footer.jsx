import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" py-8 px-6 bg-clr-secondary">
      <div className=" max-w-6xl mx-auto  grid grid-cols-2 md:grid-cols-5 gap-6 text-black">
        <div>
          <h3 className="font-semibold text-lg">About us</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/mission" className="block  ">
                Our Mission
              </Link>
            </li>
            <li>
              <Link to="/about" className="block  ">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="/team" className="block ">
                Team
              </Link>
            </li>
            <li>
              <Link to="/career" className="block ">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/press" className="block">
                Press & Media
              </Link>
            </li>
            <li>
              <Link to="/blog" className="block">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Support</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/help" className="block">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/faq" className="block">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/help" className="block">
                Community Guidelines
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Legal</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/terms" className="block">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="block">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/security" className="block">
                Security
              </Link>
            </li>
            <li>
              <Link to="/" className="block">
                Trust & Security
              </Link>
            </li>
            <li>
              <Link to="/" className="block">
                Cookies
              </Link>
            </li>
            <li>
              <Link to="/" className="block">
                Compliance
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Discover</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <Link to="/testimonials" className="block">
                Success Stories
              </Link>
            </li>
            <li>
              <Link to="/" className="block">
                Event & Webinars
              </Link>
            </li>
            <li>
              <Link to="/" className="block">
                Projects We Love
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Follow us on</h3>
          <div className="mt-2 space-y-2">
            <img src="/linkedin-icon.png" alt="LinkedIn" className="w-6 h-6" />
            <img src="./facebook-icon.png" alt="Facebook" className="w-6 h-6" />
            <img
              src="./instagram-icon.png"
              alt="Instagram"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-black mt-6 pt-4 text-center text-sm">
        <p>Copyright &copy; 2025, EduCare.com. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
