import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const PrivacyPolicyPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const policyItems = [
    {
      title: "Information We Collect",
      content:
        "We collect personal information that you voluntarily provide to us when you use our services. This may include your name, email address, and usage data.",
    },
    {
      title: "How We Use Your Information",
      content:
        "We use your information to provide and improve our services, communicate with you, and comply with legal obligations.",
    },
    {
      title: "Data Security",
      content:
        "We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage.",
    },
    {
      title: "Your Rights",
      content:
        "You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data.",
    },
    {
      title: "Third-Party Services",
      content:
        "We may use third-party services that collect, monitor and analyze this type of information in order to increase our Service's functionality. These third-party service providers have their own privacy policies addressing how they use such information.",
    },
    {
      title: "Changes to This Policy",
      content:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'last updated' date.",
    },
  ];

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 z-50 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-blue-500 cursor-pointer">
              <Link to="/">MarketingOS</Link>
            </h2>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-blue-500 focus:outline-none focus:text-blue-500"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6">
              <ul className="flex space-x-6">
                {["About Us", "Contact"].map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-gray-700 hover:text-blue-500 transition"
                  >
                    <Link to={`/${item.toLowerCase().replace(/\s+/g, "")}`}>
                      {item}
                    </Link>
                  </li>
                ))}
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/content">Contents</Link>
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <ul className="flex flex-col space-y-4">
                {["About Us", "Contact", "Contents", "Login"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="cursor-pointer text-gray-700 hover:text-blue-500 transition"
                    >
                      <Link
                        to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <section className="pt-28 pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Privacy Policy
          </h1>
          <p
            className="text-lg text-gray-600 mb-8 text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            At MarketingOS, we value your privacy and are committed to
            protecting your personal information.
          </p>
          <div className="max-w-3xl mx-auto">
            {policyItems.map((item, index) => (
              <div
                key={index}
                className="mb-8 bg-white p-6 rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                  {item.title}
                </h2>
                <p className="text-gray-700">{item.content}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12" data-aos="fade-up">
            <p className="text-gray-600">Last updated: October 21, 2024</p>
            <Link
              to="/contact"
              className="inline-block mt-4 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition duration-300"
            >
              Contact Us for More Information
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">MarketingOS</h3>
              <p className="text-gray-400">
                Simplifying marketing for businesses everywhere.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About Us", "Contact", "Privacy Policy"].map(
                  (link, index) => (
                    <li key={index}>
                      <Link
                        to={`/${link.toLowerCase().replace(/\s+/g, "")}`}
                        className="hover:text-blue-300 transition duration-300"
                      >
                        {link}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              &copy; 2024 MarketingOS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicyPage;
