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
                  <Link to="http://172.105.47.241:3000/Login">Login </Link>
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
          Empowering Your Marketing Journey with Innovative Solutions
          </h1>
          <p
            className="text-2xl mb-10 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Welcome to MarketingOS, the innovative platform that transforms your marketing strategies with seamless integration and powerful analytics, empowering small and midsize businesses to simplify their efforts and focus on growth.
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
                  At MarketingOS, our mission is to democratize access to advanced marketing solutions. We believe that every business, regardless of its size, should have the resources and technology needed to compete effectively. By providing a unified platform that integrates Content Management Systems (CMS), email marketing, and comprehensive analytics, we strive to equip you with the tools necessary for informed decision-making and strategic growth.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="text-3xl font-semibold mb-4 text-blue-600">
                    Our Vision
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                  We envision a world where innovative marketing automation solutions are within reach for every business. Our platform combines the power of Wagtail (Django), Mautic, and PostHog, creating an all-in-one ecosystem that enables you to optimize your marketing strategies and achieve sustainable growth. We are committed to being your trusted partner in navigating the complexities of digital marketing.
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
              Our Approach
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div
                className="bg-gray-200 p-8 rounded-lg shadow-lg"
                data-aos="fade-right"
              >
                <h3 className="text-3xl font-semibold mb-4 text-blue-600">
                Holistic Integration:
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                MarketingOS seamlessly integrates essential marketing functions into one cohesive platform. Manage your content effortlessly with Wagtail, execute targeted campaigns using Mautic, and leverage analytics through PostHog—all from a single dashboard. Our goal is to simplify your workflow and enhance collaboration across teams.
                </p>
              </div>
              <div
                className="bg-gray-200 p-8 rounded-lg shadow-lg"
                data-aos="fade-left"
              >
                <h3 className="text-3xl font-semibold mb-4 text-blue-600">
                Exceptional User Experience:
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                We prioritize usability and accessibility. Our intuitive interface ensures that users of all technical backgrounds can navigate the platform with ease. We provide comprehensive support and resources to ensure that you maximize the potential of our tools.
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Team Member 1 */}
              <div
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold text-center">Neeraj Kumar </h3>
                <p className="text-gray-600 text-center">Project Mentor</p>
                {/* <p className="text-gray-700 text-lg leading-relaxed mt-2">
                  John is a visionary leader with a passion for helping
                  businesses thrive in the digital landscape.
                </p> */}
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <img
                  src="https://media.licdn.com/dms/image/D4D03AQFtvGkEDuncLw/profile-displayphoto-shrink_200_200/0/1689660657860?e=2147483647&v=beta&t=qZAt59DECZ70c7bsBrsiIxzunfFDkiqgFcfX2pjcHM8"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold text-center">Mahaveer Singh Panwar</h3>
                <p className="text-gray-600 text-center">Project Mentor</p>

              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/D4D03AQEpRltc5_vfwA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1687252755759?e=1735171200&v=beta&t=t90Jp0C1b3qo7SxvtS5oxa5UrUxoAhYKG3RsWZwviOU"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold text-center">Tanay Rathore</h3>
                <p className="text-gray-600 text-center">Project Mentor</p>

              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQEyP1vjpM0QBA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718223680691?e=1735171200&v=beta&t=HqbE7vHNot1IXbp1b3ma2LgufX3S4S30tP5hjapo_To"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold text-center">Akshy Kumar</h3>
                <p className="text-gray-600 text-center">Project Mentor</p>

              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <img
                  src="https://github.com/prakarshhh/MarketOS/blob/main/src/images/kushagra.jpg"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold text-center">Kushagra Jain</h3>
                {/* <p className="text-gray-600 text-center">Team Lead </p> */}

              </div>
              {/* Team Member 2 */}
              <div
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <img
                  src="https://github.com/prakarshhh/MarketOS/blob/main/src/images/prakarsh.jpg"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold text-center">
                  Prakarsh Kashyap Pookie
                </h3>
                {/* <p className="text-gray-600 text-center">Marketing Manager</p> */}

              </div>
              {/* Team Member 3 */}
              <div
                className="bg-white p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <img
                  src="https://github.com/prakarshhh/MarketOS/blob/main/src/images/raunak.jpg"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold text-center">Raunak Jaimini</h3>
                {/* <p className="text-gray-600 text-center">CTO</p> */}

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
                “MarketingOS has transformed our marketing strategy. The integration of tools has streamlined our processes and helped us achieve our business goals!” 
                </p>
                <p className="text-right text-gray-600 mt-4">- CCMS Team </p>
              </div>
              {/* Testimonial 2 */}
              <div
                className="bg-gray-200 p-6 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <p className="text-lg italic text-gray-700">
                “The support from the MarketingOS team is unparalleled. They have been instrumental in our growth journey!”
                </p>
                <p className="text-right text-gray-600 mt-4">- LASK-AI Team</p>
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
                How does MarketingOS benefit my business?
                </h3>
                <p className="text-gray-700 mt-2">
                By using MarketingOS, you can simplify your marketing processes, gain insights through advanced analytics, and personalize customer interactions, ultimately leading to improved engagement and higher conversion rates.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold">
                Is MarketingOS suitable for small and midsize businesses?
                </h3>
                <p className="text-gray-700 mt-2">
                Absolutely! MarketingOS is specifically designed to address the unique challenges faced by small and midsize businesses, providing affordable solutions that scale with your needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold">
                How secure is my data with MarketingOS?
                </h3>
                <p className="text-gray-700 mt-2">
                We prioritize your data security. MarketingOS implements robust security measures, including role-based access control, secure API communication, and compliance with industry standards to protect your information.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold">
                What kind of support can I expect?
                </h3>
                <p className="text-gray-700 mt-2">
                Our dedicated support team is here to assist you with any questions or issues. We provide extensive documentation, tutorials, and customer support to ensure you get the most out of MarketingOS.
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
