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

const CaseStudyPage = () => {
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
        "Learn how RetailMaster used MarketingOS's advanced segmentation and automation features to create hyper-personalized email campaigns, resulting in a 200% increase in ROI.",
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
    {
      title: "LocalEats Doubles Restaurant Sign-ups with Targeted Campaigns",
      excerpt:
        "See how LocalEats used our location-based marketing tools and analytics to create highly targeted campaigns, resulting in a 100% increase in restaurant partnerships.",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      industry: "Food & Beverage",
    },
    {
      title: "HealthTech Leader Improves Patient Outreach Efficiency by 80%",
      excerpt:
        "Learn how a leading HealthTech company streamlined their patient communication and follow-up processes using MarketingOS's automation workflows.",
      image:
        "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg",
      industry: "Healthcare Technology",
    },
    {
      title: "B2B Manufacturer Generates 50% More Qualified Leads",
      excerpt:
        "Explore how a B2B manufacturing company used our content marketing and lead nurturing tools to significantly increase the quality and quantity of their leads.",
      image:
        "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg",
      industry: "Manufacturing",
    },
  ];

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
  const keyMetrics = [
    {
      //   icon: <FaTrendingUp size={24} />,
      label: "Average ROI Increase",
      value: "180%",
    },
    {
      icon: <Users size={24} />,
      label: "Lead Generation Boost",
      value: "250%",
    },
    {
      icon: <FaDollarSign size={24} />,
      label: "Cost Per Acquisition Reduction",
      value: "40%",
    },
    {
      icon: <FaClock size={24} />,
      label: "Time Saved on Campaigns",
      value: "60%",
    },
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

  const detailedCaseStudy = {
    title: "How TechGrow Increased Lead Conversion by 150% with MarketingOS",
    company: "TechGrow",
    industry: "SaaS",
    challenge:
      "TechGrow, a rapidly growing SaaS startup, was struggling to effectively nurture and convert their increasing number of leads. Their manual processes were time-consuming and resulted in missed opportunities.",
    solution:
      "Implemented MarketingOS's integrated CRM and marketing automation tools, focusing on:",
    solutionPoints: [
      "Automated lead scoring and segmentation",
      "Personalized email marketing campaigns",
      "Multi-channel engagement tracking",
      "AI-powered content recommendations",
    ],
    results: [
      "150% increase in lead conversion rate",
      "200% boost in qualified leads",
      "60% reduction in time spent on campaign management",
      "35% increase in customer retention",
    ],
    quote:
      "MarketingOS has been a game-changer for our marketing efforts. We're now able to engage with our leads more effectively and convert them at a much higher rate.",
    quoteAuthor: "Sarah Johnson, CMO of TechGrow",
  };

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
                  <Link to="/">Home</Link> {/* Updated link */}
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/login">Login</Link> {/* Updated link */}
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/content">Contents</Link> {/* Updated link */}
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

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-20 pb-8">
        <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
          MarketingOS Case Studies
        </h2>
        {/* Key Metrics Section
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          data-aos="fade-up"
        >
          {keyMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="text-blue-500 mb-4">{metric.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{metric.value}</h3>
              <p className="text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div> */}
        {/* Featured Case Study */}
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden mb-8 transform transition duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <img
            src={featuredCaseStudy.image}
            alt={featuredCaseStudy.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <span className="text-blue-600 font-semibold">
              {featuredCaseStudy.industry}
            </span>
            <h3 className="text-2xl font-bold mt-2 mb-4">
              {featuredCaseStudy.title}
            </h3>
            <p className="text-gray-600 mb-4">{featuredCaseStudy.excerpt}</p>
            <a
              href="#"
              className="text-blue-600 font-semibold flex items-center group"
            >
              Read Full Case Study{" "}
              <ArrowRight
                className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                size={16}
              />
            </a>
          </div>
        </div>
        {/* Detailed Case Study */}
        <div
          className="bg-white rounded-lg shadow-lg p-8 mb-12 transition-transform transform hover:scale-105 hover:shadow-xl"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 hover:text-blue-600 transition-colors">
            Featured Case Study: {detailedCaseStudy.title}
          </h2>
          <div className="mb-6 border-b-2 border-gray-200 pb-4">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              The Challenge
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {detailedCaseStudy.challenge}
            </p>
          </div>
          <div className="mb-6 border-b-2 border-gray-200 pb-4">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Our Solution
            </h3>
            <p className="text-gray-600 mb-2 leading-relaxed">
              {detailedCaseStudy.solution}
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              {detailedCaseStudy.solutionPoints.map((point, index) => (
                <li key={index} className="mb-1 flex items-start">
                  <svg
                    className="w-4 h-4 text-blue-500 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="2" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6 border-b-2 border-gray-200 pb-4">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              The Results
            </h3>
            <ul className="list-disc pl-6 text-gray-600">
              {detailedCaseStudy.results.map((result, index) => (
                <li key={index} className="mb-1 flex items-start">
                  <svg
                    className="w-4 h-4 text-blue-500 mr-2 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="10" r="2" />
                  </svg>
                  {result}
                </li>
              ))}
            </ul>
          </div>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4 bg-blue-50 p-4 rounded-md shadow">
            <p>"{detailedCaseStudy.quote}"</p>
          </blockquote>
          <p className="text-gray-500 text-right font-semibold">
            - {detailedCaseStudy.quoteAuthor}
          </p>
        </div>

        {/* Case Studies Grid */}
        <h2 className="text-2xl font-bold mb-6" data-aos="fade-up">
          More Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
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
                <h3 className="text-xl font-bold mt-2 mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-4">{study.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold flex items-center group"
                >
                  Read Case Study{" "}
                  <ArrowRight
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                    size={16}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
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
        {/* Industries */}
        <div
          className="bg-white rounded-lg shadow-md p-6 mb-8"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-bold mb-4">Industries We've Helped</h3>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry, index) => (
              <a
                key={index}
                href="#"
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {industry}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        
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
