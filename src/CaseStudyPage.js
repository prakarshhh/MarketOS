import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaTrendingUp,
  FaDollarSign,
  FaClock,
} from "react-icons/fa";

import { ArrowRight, ChevronRight, Menu, X, Users } from "lucide-react";

const CaseStudyPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
      .trim(); // Trim hyphens from start and end
  };

  const DEFAULT_IMAGE =
    "https://automationagency.com/wp-content/uploads/2022/09/fi-37.1.jpeg";

  // Image error handler function
  const handleImageError = (e) => {
    e.target.src = DEFAULT_IMAGE;
    e.target.onerror = null; // Prevents infinite loop if default image also fails
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await fetch(
          "http://165.22.11.185:8000/content/list?content_type=Case Study"
        );
        const data = await response.json();
        setCaseStudies(data.results);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching case studies:", error);
        setLoading(false);
      }
    };

    fetchCaseStudies();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const featuredCaseStudy = caseStudies[0] || {
    title: "Loading...",
    excerpt: "Loading...",
    image: DEFAULT_IMAGE,
    industry: "Loading...",
  };

  const industries = [
    "SaaS",
    "E-commerce",
    "Financial Services",
    "Education Technology",
    "Food & Beverage",
    "Healthcare Technology",
    "Manufacturing",
    "Real Estate",
    "Travel & Hospitality",
  ];

  const testimonials = [
    {
      quote:
        "MarketingOS transformed our marketing strategy. We've seen unprecedented growth in lead generation and conversion rates.",
      author: "Sarah Johnson",
      position: "CMO, TechGrow",
      company: "TechGrow",
    },
    {
      quote:
        "The automation capabilities of MarketingOS have saved us countless hours and significantly improved our campaign effectiveness.",
      author: "Michael Chen",
      position: "Marketing Director, RetailMaster",
      company: "RetailMaster",
    },
    {
      quote:
        "With MarketingOS, we've been able to create highly personalized campaigns that resonate with our audience. The results speak for themselves.",
      author: "Emily Rodriguez",
      position: "Head of Digital Marketing, FinServe",
      company: "FinServe",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 z-50 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h2
              className="text-2xl font-bold text-blue-500 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              MarketingOS
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
                  <Link to="http://172.105.47.241:3000/Login">Login</Link>
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/content">Contents</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <ul className="flex flex-col space-y-4">
                {["Features", "Pricing", "About Us", "Contact"].map(
                  (item, index) => (
                    <li
                      key={index}
                      className="cursor-pointer text-gray-700 hover:text-blue-500 transition"
                    >
                      <a
                        onClick={() => {
                          scrollToSection(
                            item.toLowerCase().replace(/\s+/g, "")
                          );
                          setIsMenuOpen(false);
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-20 pb-8">
        <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
          MarketingOS Case Studies
        </h2>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading case studies...</p>
          </div>
        ) : (
          <>
            {/* Featured Case Study */}
            {featuredCaseStudy && (
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden mb-8 transform transition duration-300 hover:scale-105"
                data-aos="fade-up"
              >
                <img
                  src={featuredCaseStudy.image || DEFAULT_IMAGE}
                  alt={featuredCaseStudy.title}
                  className="w-full h-64 object-cover"
                  onError={handleImageError}
                />
                <div className="p-6">
                  <span className="text-blue-600 font-semibold">
                    {featuredCaseStudy.industry || "Featured Case Study"}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">
                    {featuredCaseStudy.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {featuredCaseStudy.excerpt || featuredCaseStudy.description}
                  </p>
                  <Link
                    to={`/CaseStudyPage/${createSlug(featuredCaseStudy.title)}`}
                    className="text-blue-600 font-semibold flex items-center group"
                  >
                    Read Full Case Study{" "}
                    <ArrowRight
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                      size={16}
                    />
                  </Link>
                </div>
              </div>
            )}
            {/* Case Studies Grid */}
            <h2 className="text-2xl font-bold mb-6" data-aos="fade-up">
              More Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {caseStudies.slice(1).map((study, index) => (
                <div
                  key={study.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={study.image || DEFAULT_IMAGE}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                    onError={handleImageError}
                  />
                  <div className="p-6">
                    <span className="text-blue-600 font-semibold">
                      {study.industry || "Case Study"}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-4">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.excerpt || study.description}
                    </p>
                    <Link
                      to={`/CaseStudyPage/${createSlug(study.title)}`}
                      className="text-blue-600 font-semibold flex items-center group"
                    >
                      Read Case Study
                      <ArrowRight
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                        size={16}
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Testimonials Section */}
        <h2 className="text-2xl font-bold mb-6" data-aos="fade-up">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <blockquote className="text-gray-600 italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries Section */}
        <div
          className="bg-white rounded-lg shadow-md p-6 mb-8"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-bold mb-4">Industries We've Helped</h3>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </main>

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
                  (link, index) => {
                    const routes = {
                      "About Us": "/aboutus",
                      Contact: "/contact",
                      "Privacy Policy": "/privacyPolicy",
                    };

                    return (
                      <li key={index}>
                        <Link
                          to={routes[link]}
                          className="hover:text-blue-300 transition duration-300"
                        >
                          {link}
                        </Link>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="transition duration-300 hover:text-blue-400"
                >
                  <FaFacebookF className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="transition duration-300 hover:text-blue-400"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="transition duration-300 hover:text-blue-400"
                >
                  <FaLinkedinIn className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="transition duration-300 hover:text-blue-400"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
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

export default CaseStudyPage;
