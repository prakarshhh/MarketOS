import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FiBookOpen } from "react-icons/fi"; // fi stands for Feather icons
import { FiTrendingUp } from "react-icons/fi";
import { FiActivity } from "react-icons/fi";
import { FiTarget } from "react-icons/fi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
  Users,
  Zap,
  Menu,
  X,
  Activity,
} from "lucide-react";

const ContentPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const featuredBlogPost = {
    title: "The Future of Marketing Automation for Small Businesses",
    excerpt:
      "Discover emerging trends in marketing automation and how they're helping small businesses streamline their processes.",
    image:
      "https://danlok.com/wp-content/uploads/2020/01/TF-J23-The-Future-Of-Marketing-Automation-In-2020.jpg",
    category: "Marketing Automation",
  };

  const blogPosts = [
    {
      title:
        "How Integrated CMS and CRM Systems Boost Sales and Marketing Efficiency",
      excerpt:
        "Learn how connecting your CMS with your CRM can help close more sales and unify your marketing efforts.",
      image:
        "https://www.web-alliance.co.uk/blog/admin/blg_img/CRM-vs-CMS-a-comparison.png",
      category: "CRM Integration",
    },
    {
      title:
        "Why Lead Scoring Matters: Tips to Improve Your Lead Generation Strategy",
      excerpt:
        "Explore the concept of lead scoring and how it can help your sales team focus on high-quality prospects.",
      image:
        "https://cdn.prod.website-files.com/62c62e25766d581074487c82/654bac035c0f6b936a62ec10_20231108T0340-fa8010fd-6c54-4163-9561-9531399e020f.webp",
      category: "Lead Generation",
    },
    {
      title:
        "Email Marketing Strategies for 2024: Best Practices for Maximizing Engagement",
      excerpt:
        "Stay ahead of the curve with the latest email marketing trends and strategies to boost engagement.",
      image:
        "https://s17233.pcdn.co/blog/wp-content/uploads/2023/08/00_hero_blog_free-digital-tools.png",
      category: "Email Marketing",
    },
  ];

  const featuredCaseStudy = {
    title: "How TechGrow Increased Lead Conversion by 150% with MarketingOS",
    excerpt:
      "Discover how TechGrow, a SaaS startup, leveraged our integrated CRM and marketing automation tools to skyrocket their lead conversion rates.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg",
    industry: "SaaS",
  };

  const caseStudies = [
    {
      title: "RetailMaster's 200% ROI Boost with Personalized Email Campaigns",
      excerpt:
        "Learn how RetailMaster used MarketingOS's advanced segmentation and automation features to create hyper-personalized email campaigns",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      industry: "E-commerce",
    },
    {
      title: "FinServe's Customer Acquisition Cost Reduced by 40%",
      excerpt:
        "Explore how FinServe utilized our lead scoring and nurturing capabilities to optimize their marketing spend and dramatically reduce customer acquisition costs.",
      image:
        "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg",
      industry: "Financial Services",
    },
    {
      title: "EdTech Innovator Scales Student Engagement by 300%",
      excerpt:
        "Discover how an emerging EdTech company leveraged MarketingOS's multi-channel campaign management to triple student engagement rates across their platform.",
      image:
        "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
      industry: "Education Technology",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
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
                  <Link to="/login">Login</Link>
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
      {/* Hero Section with Parallax Effect */}
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
            case studies. Stay ahead of the curve with actionable insights,
            emerging trends, and success stories that will revolutionize your
            marketing strategy.
          </p>
        </div>
      </section>
      <main className="container mx-auto px-4 pt-20 pb-8">
        

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <FiBookOpen className="text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">In-depth Analysis</h3>
            <p className="text-gray-600">
              Explore comprehensive breakdowns of complex marketing concepts and
              strategies.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <FiTrendingUp className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Emerging Trends</h3>
            <p className="text-gray-600">
              Stay at the forefront of marketing innovation with our trend
              forecasts and analysis.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <FiActivity className="text-yellow-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Actionable Insights</h3>
            <p className="text-gray-600">
              Gain practical, implementable strategies to elevate your marketing
              efforts.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <FiTarget className="text-red-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Success Stories</h3>
            <p className="text-gray-600">
              Learn from real-world case studies showcasing transformative
              marketing solutions.
            </p>
          </div>
        </div>

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
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden"
                data-aos="fade-up"
              >
                <img
                  src={featuredBlogPost.image}
                  alt={featuredBlogPost.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-blue-600 font-semibold">
                    {featuredBlogPost.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-4">
                    {featuredBlogPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {featuredBlogPost.excerpt}
                  </p>
                  <Link
                    to="/blog"
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
            {blogPosts.map((post, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-blue-600 font-semibold">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-4">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link
                      to="/blog"
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

          {/* Add the button here */}
          <div className="flex justify-center mt-8">
            <Link
              to="/blog"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-blue-700"
            >
              View All Blog Posts
            </Link>
          </div>
        </section>

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
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            <SwiperSlide>
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden"
                data-aos="fade-up"
              >
                <img
                  src={featuredCaseStudy.image}
                  alt={featuredCaseStudy.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-blue-600 font-semibold">
                    {featuredCaseStudy.industry}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-4">
                    {featuredCaseStudy.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {featuredCaseStudy.excerpt}
                  </p>
                  <Link
                    to="/CaseStudyPage"
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
            {caseStudies.map((study, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-blue-600 font-semibold">
                      {study.industry}
                    </span>
                    <h3 className="text-xl font-bold mt-2 mb-4">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{study.excerpt}</p>
                    <Link
                      to="/CaseStudyPage"
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

          {/* Add the button for Case Study page here */}
          <div className="flex justify-center mt-8">
            <Link
              to="/CaseStudyPage"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-blue-700"
            >
              View All Case Studies
            </Link>
          </div>
        </section>

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
