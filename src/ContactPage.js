import React, { useState, useEffect } from "react";
import styles from "./styles.css";
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
  Users,
  Zap,
  Menu,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  X,
  Activity,
} from "lucide-react";
import "aos/dist/aos.css";

import AOS from "aos";

const ContactPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="font-sans">
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
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, "")}`} // Convert "About Us" to "/aboutus"
                      className="block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/blog">Blogs</Link> {/* Updated link */}
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/login">Login</Link> {/* Updated link */}
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/CaseStudyPage">Case Study</Link>
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://makprojects.com/wp-content/uploads/2024/04/contact-us.jpg')", // Updated background image
              transform: `translateY(${isScrolled ? "-20px" : "0"})`,
              transition: "transform 0.5s ease-out",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-6" data-aos="fade-up">
            Contact Us
          </h1>
          <p
            className="text-2xl mb-10 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We're here to help! Feel free to reach out to us with any questions
            or inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Our Office",
                content:
                  "PVWW+CMF, Scheme No 55, Sheetal Nagar, Indore, Madhya Pradesh 452011",
              },
              { icon: Phone, title: "Phone", content: "+91 9174811701" },
              {
                icon: Mail,
                title: "Email",
                content: "kushagra@valuebound.com",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  <item.icon className="w-6 h-6 text-blue-500 mr-3" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 p-8 text-white">
                <h2 className="text-3xl font-bold mb-4" data-aos="fade-right">
                  Let's Start a Conversation
                </h2>
                <p className="mb-6" data-aos="fade-right" data-aos-delay="100">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
                <div
                  className="flex items-center mb-4"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  <span>We're here to help!</span>
                </div>
              </div>
              <div className="w-full lg:w-1/2 p-8">
                <form onSubmit={handleSubmit}>
                  {[
                    { name: "name", label: "Full Name", type: "text" },
                    { name: "email", label: "Email Address", type: "email" },
                    { name: "subject", label: "Subject", type: "text" },
                  ].map((field, index) => (
                    <div
                      key={field.name}
                      className="mb-4"
                      data-aos="fade-left"
                      data-aos-delay={index * 100}
                    >
                      <label
                        htmlFor={field.name}
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  ))}
                  <div
                    className="mb-6"
                    data-aos="fade-left"
                    data-aos-delay="300"
                  >
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-semibold mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-3 rounded-md hover:opacity-90 transition duration-300"
                    data-aos="fade-up"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Visit Our Office
          </h2>
          <div
            className="rounded-lg overflow-hidden shadow-xl"
            data-aos="zoom-in"
          >
            {/* Replace the src with your actual Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5202226176293!2d75.89411257587555!3d22.746067426589164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303c9c4ce32cb%3A0x672a9e8e44392a7f!2sValuebound!5e0!3m2!1sen!2sin!4v1729336373127!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer (kept the same as in the landing page) */}
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
                      <a
                        href="#"
                        className="hover:text-blue-300 transition duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  )
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
    </div>
  );
};

export default ContactPage;
