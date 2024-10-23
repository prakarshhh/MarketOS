import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {
  ArrowRight,
  Search,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState(null);
  const { slug } = useParams();

  const DEFAULT_IMAGE =
    "https://automationagency.com/wp-content/uploads/2022/09/fi-37.1.jpeg";
  const createSlug = (title) => {
    if (!title) return "";
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
      .trim(); // Trim hyphens from start and end
  };
  // Image error handler
  const handleImageError = (e) => {
    e.target.src = DEFAULT_IMAGE;
    e.target.onerror = null; // Prevent infinite loop if default image also fails
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const fetchblog = async () => {
      try {
        console.log("Current slug from URL:", slug);

        // First fetch all Blog
        const response = await fetch(
          "http://165.22.11.185:8000/content/list?content_type=Blog"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }

        const data = await response.json();
        console.log("All blogs:", data);
        const studySlugs = data.results.map((study) => ({
          originalTitle: study.title,
          generatedSlug: createSlug(study.title),
          id: study.id,
        }));
        console.log("Available slugs:", studySlugs);
        setDebugInfo({ availableSlugs: studySlugs, currentSlug: slug });

        // Find the case study that matches the slug
        const matchingStudy = data.results.find(
          (study) => createSlug(study.title) === slug
        );

        if (!matchingStudy) {
          throw new Error("Case study not found");
        }

        // Fetch the full case study details using the ID
        const detailResponse = await fetch(
          `http://165.22.11.185:8000/content/id/${matchingStudy.id}/`
        );

        if (!detailResponse.ok) {
          throw new Error(
            "Failed to fetch case study details:  ${detailResponse.status}"
          );
        }

        const detailData = await detailResponse.json();
        setBlog(detailData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchblog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading case study...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          {debugInfo && (
            <div className="text-left bg-gray-200 p-4 rounded mb-4 max-w-xl mx-auto">
              <h3 className="font-bold mb-2">Debug Information:</h3>
              <p>Current URL slug: {debugInfo.currentSlug}</p>
              <p className="mb-2">Available blogs:</p>
              <ul className="list-disc pl-5">
                {debugInfo.availableSlugs.map((study, index) => (
                  <li key={index} className="mb-1">
                    Title: {study.originalTitle}
                    <br />
                    Slug: {study.generatedSlug}
                    <br />
                    ID: {study.id}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <Link
            to="/blogPage"
            className="inline-flex items-center text-blue-500 hover:text-blue-600"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <nav
        className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 z-50 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-blue-500">
              MarketingOS
            </Link>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-500 hover:text-blue-500 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Link to="/aboutus" className="text-gray-700 hover:text-blue-500">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </Link>
              <Link to="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
              <Link to="/content" className="text-gray-700 hover:text-blue-500">
                Contents
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-blue-500">
                Login
              </Link>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <Link
                to="/aboutus"
                className="block py-2 text-gray-700 hover:text-blue-500"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-gray-700 hover:text-blue-500"
              >
                Contact
              </Link>
              <Link
                to="/"
                className="block py-2 text-gray-700 hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                to="/blog"
                className="block py-2 text-gray-700 hover:text-blue-500"
              >
                Case Study
              </Link>
              <Link
                to="/login"
                className="block py-2 text-gray-700 hover:text-blue-500"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link
          to="/blogPage"
          className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8 transition-colors duration-300"
          data-aos="fade-right"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Blogs
        </Link>

        {/* Hero Section */}
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
          data-aos="fade-up"
        >
          <img
            src={blog?.banner_image || DEFAULT_IMAGE}
            alt={blog?.title}
            className="w-full h-96 object-cover"
            onError={handleImageError}
          />
          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-4">
              {blog?.content_type && (
                <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {blog.content_type.name}
                </span>
              )}
              {blog?.created_at && (
                <span className="inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  <Calendar size={16} className="mr-2" />
                  {new Date(blog.created_at).toLocaleDateString()}
                </span>
              )}
              {blog?.author_name && (
                <span className="inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  <User size={16} className="mr-2" />
                  {blog.author_name}
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold mb-6">{blog?.title}</h1>
          </div>
        </div>

        {/* Content Section */}
        <div
          className="bg-white rounded-lg shadow-md p-8 mb-8"
          data-aos="fade-up"
        >
          <div className="prose max-w-none">
            {blog?.content_body && (
              <div className="whitespace-pre-wrap">
                {blog.content_body
                  .split("\r\n")
                  .map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
              </div>
            )}
          </div>

          {/* Metadata Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {blog?.meta_description && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-600">{blog.meta_description}</p>
                </div>
              )}
              {blog?.meta_keywords && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {blog.meta_keywords
                      .split(",")
                      .map((keyword, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          {keyword.trim()}
                        </span>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">MarketingOS</h3>
              <p className="text-gray-400">
                Simplifying marketing for businesses everywhere.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/aboutus" className="hover:text-blue-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-blue-300">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">
                  <FaFacebookF size={20} />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="#" className="hover:text-blue-300">
                  <FaInstagram size={20} />
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

export default BlogDetail;
