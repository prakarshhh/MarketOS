import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { slugify } from './utils/slugify'; // Ensure the path is correct

import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FiBookOpen, FiTrendingUp, FiActivity, FiTarget } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { ArrowRight, Menu, X } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ContentPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const DEFAULT_IMAGE =
    "https://automationagency.com/wp-content/uploads/2022/09/fi-37.1.jpeg";
    

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    const handleImageError = (e) => {
      e.target.src = DEFAULT_IMAGE;
      e.target.onerror = null; // Prevent infinite loop if default image also fails
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);

        // Fetch blog posts
        const blogResponse = await fetch(
          "http://165.22.11.185:8000/content/list?content_type=Blog"
        );
        const blogData = await blogResponse.json();

        // Fetch case studies
        const caseStudyResponse = await fetch(
          "http://165.22.11.185:8000/content/list?content_type=Case Study"
        );
        const caseStudyData = await caseStudyResponse.json();

        setBlogPosts(blogData.results || []);
        setCaseStudies(caseStudyData.results || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch content");
        setLoading(false);
        console.error("Error fetching content:", err);
      }
    };

    fetchContent();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // Loading state UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Error state UI
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-center">
          <h2 className="text-2xl font-bold mb-4">Error Loading Content</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 z-50 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        {/* ... (navigation code remains the same) ... */}
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
                {["About Us", "Contact"].map((item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer text-gray-700 hover:text-blue-500 transition"
                  >
                    <Link
                      to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                      className="block"
                    >
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
              </ul>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <ul className="flex flex-col space-y-4">
                {[
                  "About Us",
                  "Contact",
                  "Home",
                  "Blog",
                  "Case Studies",
                  "Login",
                ].map((item, index) => (
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
                ))}
              </ul>
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
                "url('https://cdn.static.express/storage/WPF/RmQ6LWLLgJoMmioNmmi8npltMaOievF5zWQNBQhO.webp')",
              transform: `translateY(${isScrolled ? "-20px" : "0"})`,
              transition: "transform 0.5s ease-out",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl font-bold mb-6" data-aos="fade-up">
            Unlock the Power of Marketing Insights
          </h1>
          <p
            className="text-2xl mb-10 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Dive into our curated collection of cutting-edge blogs and inspiring
            case studies.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 pt-20 pb-8">
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* ... (features grid remains the same) ... */}
        </div>

        {/* Blog Posts Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
            Featured Blog Posts
          </h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={post.id || index}>
                <div
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={post.image || DEFAULT_IMAGE}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-blue-600 font-semibold">
                      {post.category || "Marketing"}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-4">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {post.description || post.excerpt}
                    </p>
                    <Link
                      to={`/blog/${slugify(post.title)}`}
                      className="text-blue-600 font-semibold flex items-center group"
                    >
                      Read More{" "}
                      <ArrowRight
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                        size={16}
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center mt-8">
            <Link
              to="/blog"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-blue-700"
            >
              View All Blog Posts
            </Link>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
            Featured Case Studies
          </h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
          >
            {caseStudies.map((study, index) => (
              <SwiperSlide key={study.id || index}>
                <div
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={study.image || DEFAULT_IMAGE}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-blue-600 font-semibold">
                      {study.industry || study.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-4">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {study.description || study.excerpt}
                    </p>
                    <Link
                      to={`/case-study/${study.id}`}
                      className="text-blue-600 font-semibold flex items-center group"
                    >
                      Read Case Study{" "}
                      <ArrowRight
                        className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                        size={16}
                      />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center mt-8">
            <Link
              to="/CaseStudyPage"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-blue-700"
            >
              View All Case Studies
            </Link>
          </div>
        </section>

        {/* Why Read Our Blogs Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
            Why Read Our Blogs and Case Studies?
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8" data-aos="fade-up">
            <p className="text-gray-600 mb-4">
              Our blogs cover the latest industry trends, expert insights, and
              practical tips. Our case studies showcase real-world success
              stories, providing actionable lessons and inspiration for your
              business.
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                Stay updated with the latest marketing trends and technologies
              </li>
              <li>Learn from real-world examples and success stories</li>
              <li>
                Gain actionable insights to improve your marketing strategies
              </li>
              <li>
                Discover how other businesses have overcome challenges similar
                to yours
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
            Subscribe to Our Newsletter
          </h2>
          <div className="bg-white rounded-lg shadow-md p-8" data-aos="fade-up">
            <p className="text-gray-600 mb-4">
              Stay up-to-date with our latest insights, case studies, and
              marketing tips. Subscribe to our newsletter and never miss an
              update!
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">MarketingOS</h3>
              <p className="text-gray-400">
                Empowering businesses with integrated marketing solutions.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/CaseStudyPage"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaInstagram />
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

export default ContentPage;
