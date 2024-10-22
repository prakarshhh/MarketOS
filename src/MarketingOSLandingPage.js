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
  X,
  Activity,
} from "lucide-react";
import "aos/dist/aos.css";
import AOS from "aos";
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const MarketingOSLandingPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second animation duration
  }, []);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const steps = [
    {
      title: "Attract & Engage",
      description:
        "Capture your ideal audience with visually stunning, tailored content that resonates and sparks action, ensuring your marketing stands out.",
    },
    {
      title: "Capture & Convert Leads",
      description:
        "Transform casual visitors into enthusiastic leads through integrated lead capture forms and compelling calls to action, making prospect conversion effortless.",
    },
    {
      title: "Nurture & Cultivate Relationships",
      description:
        "Build lasting connections with personalized messaging and targeted content, fostering a sense of value and understanding among your audience.",
    },
    {
      title: "Guide Through the Buyer’s Journey",
      description: "Navigate prospects smoothly through the conversion process by offering valuable resources and expert support, ensuring they receive the right content at the right time.",
    },
    {
      title: "Analyze & Optimize Performance",
      description:
        "Utilize powerful analytics to refine your marketing strategy, monitor performance, and adapt your approach based on real-time data insights for continuous improvement.",
    },
    {
      title: "Achieve Sustainable Growth",
      description:
        "Leverage AI-driven insights to streamline operations and enhance customer experiences, enabling smarter decision-making and focusing on strategies that drive long-term success and loyalty.",
    },
  ];

  // Effect to handle sticky navbar when scrolling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
                  <Link to="/content">Contents</Link> {/* Updated link */}
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="http://172.105.47.241:3000/Login">Login</Link> {/* Updated link */}
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
      <section
        id="hero"
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white pt-28 pb-32 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in">
            Integrate. Automate. Dominate.
            </h1>
            <p className="text-2xl mb-10 max-w-2xl animate-fade-in">
            At MarketingOS, we believe in empowering businesses with the tools they need to thrive in a competitive digital landscape. Our all-in-one marketing automation platform seamlessly integrates cutting-edge technologies to elevate your marketing efforts and drive results.
            </p>
            <div className="flex space-x-6">
              <button className="bg-white text-blue-500 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-100 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
              Book a Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-white hover:text-blue-500 transition duration-300 transform hover:-translate-y-1 hover:scale-105">
                Learn More .....
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/business-concept-with-team-close-up_23-2149151159.jpg?t=st=1729335193~exp=1729338793~hmac=03fe5fdab61a3d805738fc660f8e08a2838646513fcacbb1e0578b0e0244f09d&w=1380" // Replace this URL with your image URL
              alt="Business Growth"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Simplified Product Benefits Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Streamline Your Workflow. Amplify Your Impact.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Comprehensive Content Management",
                description:
                  "Harness the power of Wagtail, a robust CMS that allows you to create, manage, and distribute engaging content effortlessly. Our intuitive interface ensures your team can focus on crafting captivating stories that resonate with your audience.",
              },
              {
                icon: Users,
                title: "Advanced Analytics for Informed Decisions",
                description:
                  "With integrated PostHog analytics, gain actionable insights into user behavior and campaign performance. Understand what drives your audience, optimize your strategies, and maximize your ROI with data-backed decisions.",
              },
              {
                icon: BarChart,
                title: "Data-Driven Email Marketing",
                description:
                  "Engage your customers with personalized email campaigns powered by Mautic. Utilize automated workflows to nurture leads and deliver the right message at the right time, ensuring higher conversion rates and stronger customer relationships.",
              },
              {
                icon: Activity,
                title: "AI-Powered Insights",
                description:
                  "Our platform leverages artificial intelligence for lead scoring and content personalization. Anticipate customer needs, enhance engagement, and stay ahead of the curve in a constantly evolving market.",
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150} // Staggered entrance animation
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 shadow-md">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            Elevate Every Stage of Your Customer Journey with MarketingOS
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg transition transform hover:scale-110">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 text-center max-w-xs">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <ChevronRight className="hidden md:block w-8 h-8 text-gray-400 mt-4 transition transform hover:translate-x-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits-Focused Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
           One Comprehensive Platform for All Your Marketing Needs
          </h2>

          <div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            data-aos="zoom-in"
          >
            <h3
              className="text-2xl font-semibold mb-4 text-gray-800"
              data-aos="fade-right"
            >
              Feeling Overwhelmed by Multiple Platforms? Lacking Clarity in Your Marketing Metrics?
            </h3>

            <p
              className="text-lg mb-6 text-gray-600"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Our platform brings everything together so you never lose sight of
              your marketing goals.
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              {[
                {
                  title: "Streamline Your Marketing Efforts",
                  description: "Unify your tools for focused strategies.",
                },
                {
                  title: "Holistic Performance Tracking",
                  description: "Monitor key metrics in real time.",
                },
                {
                  title: "Enhanced Customer Insights",
                  description: "Understand behavior for better engagement.",
                },
                {
                  title: "User-Friendly Dashboards",
                  description: "Interpret data easily with intuitive design.",
                },
                {
                  title: "Seamless Integration",
                  description: "Connect effortlessly with existing systems.",
                },
                {
                  title: "Start Your Journey Today",
                  description: "Try MarketingOS and transform your marketing.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                  data-aos="flip-left"
                  data-aos-delay={index * 100}
                >
                  <h4 className="font-semibold mb-2 text-blue-600">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>

            <button
              className="mt-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transform transition duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Try It For Free
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-bold text-center mb-12"
            data-aos="fade-up"
          >
            What Our Customers Say
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {[
              {
                text: `“MarketingOS has transformed our marketing strategy! The seamless integration has saved us countless hours.”`,
                author: "Ambuj Mishra, Fixkar Group ",
              },
              {
                text: `“The AI insights provided by MarketingOS have allowed us to tailor our campaigns more effectively.”`,
                author: "Yuvraj Thakur, Thakur & Sons Limited",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition transform hover:-translate-y-2 duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <p className="text-lg mb-4 text-gray-700 italic">
                  {testimonial.text}
                </p>
                <p className="font-semibold text-blue-600">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-12 bg-blue-50 p-8 rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
            Success Stories
            </h3>

            <p
              className="text-lg mb-4 text-gray-700"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              With MarketingOS, Fixkar Group  achieved a 50% reduction in marketing costs while increasing customer retention by 25%.
            </p>

            <a
              href="#"
              className="text-blue-500 font-semibold hover:underline flex items-center gap-2 transition-all duration-300"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              Read Full Case Study <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center" data-aos="fade-up">
          <h2
            className="text-3xl font-bold mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Ready to Take Your Business to the Next Level?
          </h2>
          <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">
            Join hundreds of other businesses using MarketingOS to simplify
            their marketing and drive results.
          </p>
          <div
            className="flex justify-center space-x-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 transform hover:-translate-y-1">
              Get Started for Free
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-500 transition duration-300 transform hover:-translate-y-1">
              Request a Personalized Demo
            </button>
          </div>
        </div>
      </section>
      {/* Subscribe Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
            Subscribe to Our Newsletter
          </h2>
          <p
            className="mb-8 text-gray-600"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Stay updated with the latest news and exclusive offers from
            MarketingOS.
          </p>
          <form
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="border border-gray-300 rounded-l-full px-4 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-500 text-white rounded-r-full px-6 py-2 hover:bg-blue-600 transition duration-300">
              Subscribe
            </button>
          </form>
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

export default MarketingOSLandingPage;
