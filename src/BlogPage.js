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
  Users,
  Zap,
  Menu,
  X,
  Activity,
} from "lucide-react";
const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const featuredPost = {
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
    {
      title: "Content Marketing: Strategies for Effective Audience Engagement",
      excerpt:
        "Dive into effective content marketing strategies that enhance audience engagement and brand loyalty.",
      image:
        "https://cdn.optinmonster.com/wp-content/uploads/2024/05/Content-Marketing-Strategy-Featured-Image.png",
      category: "Content Marketing",
    },
    {
      title: "Leveraging Data Analytics for Better Marketing Decisions",
      excerpt:
        "Learn how data analytics can transform your marketing strategies and lead to better decision-making.",
      image:
        "https://operationscouncil.org/wp-content/uploads/2023/03/decision-making.jpg",
      category: "Analytics & Data",
    },
    {
      title: "The Role of Social Media in Modern Marketing",
      excerpt:
        "Understand how social media can amplify your marketing efforts and connect you with your audience.",
      image:
        "https://media.licdn.com/dms/image/v2/D4D12AQHYG5yyypiv7g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1674506808687?e=2147483647&v=beta&t=zpf_dnEUQWwhEXVI01HC_FygTGcrJP-RTTzMt-bw8Ds",
      category: "Social Media",
    },
  ];

  const categories = [
    "Marketing Automation",
    "CRM Integration",
    "Lead Generation",
    "Email Marketing",
    "Analytics & Data",
    "AI in Marketing",
    "Content Marketing",
    "Social Media",
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
                  <Link to="/CaseStudyPage">Case Study</Link>
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

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-20 pb-8">
        <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
          MarketingOS Blogs
        </h2>

        {/* Search Bar */}
        <div className="mb-8 relative" data-aos="fade-up">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full p-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow duration-300"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-3 text-gray-400" />
        </div>

        {/* Featured Post */}
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden mb-8 transform transition duration-300 hover:scale-105"
          data-aos="fade-up"
        >
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <span className="text-blue-600 font-semibold">
              {featuredPost.category}
            </span>
            <h3 className="text-2xl font-bold mt-2 mb-4">
              {featuredPost.title}
            </h3>
            <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
            <a
              href="#"
              className="text-blue-600 font-semibold flex items-center group"
            >
              Read More{" "}
              <ArrowRight
                className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                size={16}
              />
            </a>
          </div>
        </div>

        {/* Blog Grid */}
        <h2 className="text-2xl font-bold mb-6" data-aos="fade-up">
          Latest Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
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
                <h3 className="text-xl font-bold mt-2 mb-4">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold flex items-center group"
                >
                  Read More{" "}
                  <ArrowRight
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                    size={16}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div
          className="bg-white rounded-lg shadow-md p-6 mb-8"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-bold mb-4">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Popular Posts */}
        <h2 className="text-2xl font-bold mb-6" data-aos="fade-up">
          Popular Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Maximizing ROI with Marketing Automation",
              excerpt:
                "Explore how marketing automation tools can improve your ROI through smarter targeting and analytics.",
              image:
                "https://media.licdn.com/dms/image/v2/D5622AQErJgMYaiVOcQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1722334777188?e=2147483647&v=beta&t=3wTrWTP-lbjSzJ662nKw6IWi6x_rdDBjilUQ1HRsLI4",
            },
            {
              title: "Building an Effective Email List",
              excerpt:
                "Learn the best strategies to build and maintain a strong email list for effective marketing campaigns.",
              image:
                "https://www.sender.net/wp-content/uploads/2021/11/email_list_building-1024x658.png",
            },
            {
              title: "The Power of Personalization in Digital Marketing",
              excerpt:
                "Discover how personalization is changing the landscape of digital marketing and customer engagement.",
              image:
                "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
            },
            {
              title: "SEO Strategies for 2024: What You Need to Know",
              excerpt:
                "Stay ahead of the game with the latest SEO strategies that will keep your content ranking in 2024.",
              image:
                "https://outreachmonks.com/wp-content/uploads/2023/12/SEO-Trends.jpg.webp",
            },
            {
              title: "How to Create a Winning Content Calendar",
              excerpt:
                "Learn the steps to building a successful content calendar that keeps your marketing team on track.",
              image:
                "https://s30131.pcdn.co/wp-content/uploads/Internal-comms_Content-Calendar_AD_211122_Content-Calendar_Blog-Image.png",
            },
            {
              title: "Using AI to Enhance Customer Experiences",
              excerpt:
                "Explore how AI is revolutionizing customer interactions and creating more personalized experiences.",
              image:
                "https://www.kapturecrm.com/blog/wp-content/uploads/2022/05/image2-7.jpg",
            },
            {
              title: "Social Proof: Leveraging Testimonials in Marketing",
              excerpt:
                "Learn how social proof can drive more conversions by using customer testimonials effectively.",
              image:
                "https://fastercapital.co/i/Boost-Your-Conversion-Tracking-with-These-CTR-Optimization-Tips--Leveraging-Social-Proof-and-Testimonials-for-Higher-Click-Through-Rates.webp",
            },
            {
              title: "Creating Engaging Social Media Campaigns",
              excerpt:
                "Get insights into building social media campaigns that resonate with your audience and increase engagement.",
              image:
                "https://media.licdn.com/dms/image/v2/D5612AQHlb1xX0NI9sA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1678565626396?e=2147483647&v=beta&t=qD_YLMk_EQDfPEo0bnRQ_u-ryWluia_YIXOwdVHDnmc",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold flex items-center group"
                >
                  Read More{" "}
                  <ArrowRight
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
                    size={16}
                  />
                </a>
              </div>
            </div>
          ))}
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

export default BlogPage;
