import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  ArrowRight,
  ChevronRight,
  BarChart,
  Search,
  Check,
  Users,
  Zap,
  Menu,
  X,
  Activity,
} from "lucide-react";

const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

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
            <h2
              className="text-2xl font-bold text-blue-500 cursor-pointer"
              onClick={() => scrollToSection("hero")}
            >
              MarketingOS
            </h2>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-blue-500 focus:outline-none focus:text-blue-500"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <ul className="flex space-x-6">
                {[].map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-gray-700 hover:text-blue-500 transition"
                  >
                    <a
                      onClick={() =>
                        scrollToSection(item.toLowerCase().replace(/\s+/g, ""))
                      }
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/content">Contents</Link>
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/login">Login</Link>
                </li>
              
              </ul>
              <div className="flex space-x-4">
              </div>
            </div>
          </div>
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
              <div className="mt-4 flex flex-col space-y-4">
                <button className="text-blue-500 font-semibold hover:text-blue-700 transition">
                  Login
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition">
                  Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Parallax Effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
              transform: `translateY(${isScrolled ? "-20px" : "0"})`,
              transition: "transform 0.5s ease-out",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-6" data-aos="fade-up">
            Empowering Businesses with Intelligent Marketing
          </h1>
          <p
            className="text-2xl mb-10 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Revolutionizing the way small and midsize businesses approach their
            marketing journey
          </p>
          <button
            className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Discover Our Story
          </button>
        </div>
      </section>

      {/* Main Content Starts Here */}
      <main className="mt-[var(--navbar-height)]">
        {/* Mission and Vision Section with Tabs */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2
              className="text-4xl font-bold text-center mb-12"
              data-aos="fade-up"
            >
              Our Mission and Vision
            </h2>
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-full shadow-md p-1">
                <button
                  className={`px-6 py-2 rounded-full ${
                    activeTab === "mission"
                      ? "bg-blue-500 text-white"
                      : "text-gray-700"
                  }`}
                  onClick={() => setActiveTab("mission")}
                >
                  Mission
                </button>
                <button
                  className={`px-6 py-2 rounded-full ${
                    activeTab === "vision"
                      ? "bg-blue-500 text-white"
                      : "text-gray-700"
                  }`}
                  onClick={() => setActiveTab("vision")}
                >
                  Vision
                </button>
              </div>
            </div>
            <div
              className="bg-white p-8 rounded-lg shadow-lg"
              data-aos="fade-up"
            >
              {activeTab === "mission" ? (
                <div>
                  <h3 className="text-3xl font-semibold mb-4 text-blue-600">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To empower small and midsize businesses with a unified,
                    intelligent marketing platform that simplifies their journey
                    to growth. We're committed to providing accessible,
                    integrated tools that bridge the gap between complex
                    marketing strategies and seamless execution.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="text-3xl font-semibold mb-4 text-blue-600">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    To become the global standard in accessible marketing
                    automation, transforming how businesses of all sizes
                    approach their marketing efforts. We envision a world where
                    every company, regardless of its resources, can leverage
                    sophisticated marketing tools to compete effectively and
                    grow sustainably.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Interactive Problem-Solution Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2
              className="text-4xl font-bold text-center mb-12"
              data-aos="fade-up"
            >
              Revolutionizing Marketing Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div
                className="bg-gray-200 p-8 rounded-lg shadow-lg"
                data-aos="fade-right"
              >
                <h3 className="text-3xl font-semibold mb-4 text-blue-600">
                  Challenge
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Small and midsize businesses often struggle with limited
                  resources, making it difficult to implement effective
                  marketing strategies that yield results.
                </p>
              </div>
              <div
                className="bg-gray-200 p-8 rounded-lg shadow-lg"
                data-aos="fade-left"
              >
                <h3 className="text-3xl font-semibold mb-4 text-blue-600">
                  Our Solution
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our platform streamlines marketing efforts, providing
                  businesses with powerful, user-friendly tools that enhance
                  their outreach while maximizing their budgets. From automation
                  to analytics, we've got you covered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2
              className="text-4xl font-bold text-center mb-12"
              data-aos="fade-up"
            >
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Team Member 1 */}
              <div
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold text-center">John Doe</h3>
                <p className="text-gray-600 text-center">CEO & Founder</p>
                <p className="text-gray-700 text-lg leading-relaxed mt-2">
                  John is a visionary leader with a passion for helping
                  businesses thrive in the digital landscape.
                </p>
              </div>
              {/* Team Member 2 */}
              <div
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold text-center">
                  Jane Smith
                </h3>
                <p className="text-gray-600 text-center">Marketing Manager</p>
                <p className="text-gray-700 text-lg leading-relaxed mt-2">
                  Jane brings years of marketing expertise and creativity to our
                  team, ensuring our clients achieve their goals.
                </p>
              </div>
              {/* Team Member 3 */}
              <div
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold text-center">Tom Brown</h3>
                <p className="text-gray-600 text-center">CTO</p>
                <p className="text-gray-700 text-lg leading-relaxed mt-2">
                  Tom leads our tech team, driving innovation and ensuring our
                  platform stays ahead of the competition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2
              className="text-4xl font-bold text-center mb-12"
              data-aos="fade-up"
            >
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Testimonial 1 */}
              <div
                className="bg-gray-200 p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <p className="text-lg italic text-gray-700">
                  "MarketingOS has transformed our marketing strategy. We
                  couldn't be happier!"
                </p>
                <p className="text-right text-gray-600 mt-4">- Alice M.</p>
              </div>
              {/* Testimonial 2 */}
              <div
                className="bg-gray-200 p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <p className="text-lg italic text-gray-700">
                  "The team at MarketingOS is amazing! They've helped us grow
                  our business significantly."
                </p>
                <p className="text-right text-gray-600 mt-4">- Bob S.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2
              className="text-4xl font-bold text-center mb-12"
              data-aos="fade-up"
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold">
                  What services do you offer?
                </h3>
                <p className="text-gray-700 mt-2">
                  We offer a wide range of marketing services, including SEO,
                  social media marketing, email marketing, and more.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold">
                  How can I get started?
                </h3>
                <p className="text-gray-700 mt-2">
                  You can get started by signing up for a free trial on our
                  website, and our team will guide you through the setup
                  process.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold">
                  What is your pricing model?
                </h3>
                <p className="text-gray-700 mt-2">
                  We offer flexible pricing plans to cater to businesses of all
                  sizes. You can check our pricing page for more details.
                </p>
              </div>
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
                  (link, index) => {
                    // Define the corresponding routes for each link
                    const routes = {
                      "About Us": "/aboutus",
                      Contact: "/contact",
                      "Privacy Policy": "/privacyPolicy",
                    };

                    return (
                      <li key={index}>
                        <Link
                          to={routes[link]} // Use the route corresponding to the link
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
                  {[
                    { Icon: FaFacebookF, href: "#" },
                    { Icon: FaTwitter, href: "#" },
                    { Icon: FaLinkedinIn, href: "#" },
                    { Icon: FaInstagram, href: "#" },
                  ].map(({ Icon, href }, index) => (
                    <a
                      key={index}
                      href={href}
                      className="transition duration-300 hover:text-blue-400"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ))}
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
      </main>
    </div>
  );
};

export default AboutUsPage;
