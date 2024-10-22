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
  Search,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const BlogPage = () => {
  const DEFAULT_IMAGE =
    "https://automationagency.com/wp-content/uploads/2022/09/fi-37.1.jpeg";
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
    limit: 10,
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    fetchBlogs(1);

    // Add scroll listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fetchBlogs = async (page = 1) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://165.22.11.185:8000/content/list?page=${page}&content_type=Blog`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPagination({
        currentPage: data.page,
        totalPages: data.total_pages,
        totalCount: data.total_count,
        limit: data.limit,
      });

      if (Array.isArray(data.results)) {
        setBlogs(data.results);
        setError(null);
      } else {
        throw new Error("Invalid data format");
      }
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setError(err.message);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredBlogs = () => {
    if (!Array.isArray(blogs)) return [];
    if (!searchTerm) return blogs;

    return blogs.filter(
      (blog) =>
        blog?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog?.content_body?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      fetchBlogs(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const PaginationControls = () => (
    <div className="flex items-center justify-center space-x-4 mt-8">
      <button
        onClick={() => handlePageChange(pagination.currentPage - 1)}
        disabled={pagination.currentPage === 1}
        className={`flex items-center px-4 py-2 rounded-md transition-colors ${
          pagination.currentPage === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-blue-50 text-blue-600 hover:bg-blue-100"
        }`}
      >
        <ChevronLeft size={20} className="mr-2" />
        Previous
      </button>

      <span className="text-gray-600">
        Page {pagination.currentPage} of {pagination.totalPages}
      </span>

      <button
        onClick={() => handlePageChange(pagination.currentPage + 1)}
        disabled={pagination.currentPage === pagination.totalPages}
        className={`flex items-center px-4 py-2 rounded-md transition-colors ${
          pagination.currentPage === pagination.totalPages
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-blue-50 text-blue-600 hover:bg-blue-100"
        }`}
      >
        Next
        <ChevronRight size={20} className="ml-2" />
      </button>
    </div>
  );

  const filteredBlogs = getFilteredBlogs();
  const featuredPost = filteredBlogs.length > 0 ? filteredBlogs[0] : null;

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
              <Link
                to="/casestudy"
                className="text-gray-700 hover:text-blue-500"
              >
                Case Study
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
                to="/casestudy"
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

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-8">
        <h2 className="text-3xl font-bold mb-8" data-aos="fade-up">
          Latest Articles
        </h2>

        {/* Search Bar */}
        <div className="mb-8 relative" data-aos="fade-up">
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full p-3 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-3 top-3 text-gray-400" />
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 border border-red-200 rounded-md p-6 text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={() => fetchBlogs(pagination.currentPage)}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Retry Loading Blogs
            </button>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-md">
            <p className="text-gray-600">
              {searchTerm
                ? "No blogs found matching your search."
                : "No blogs available."}
            </p>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            {featuredPost && !searchTerm && (
              <div
                className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
                data-aos="fade-up"
              >
                <div className="relative w-full h-64">
                  <img
                    src={featuredPost.banner_image || DEFAULT_IMAGE}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-blue-600 font-semibold">
                    {featuredPost.content_type.name}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {featuredPost.content_body?.substring(0, 200)}...
                  </p>
                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="text-blue-600 font-semibold flex items-center group"
                  >
                    Read More
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            )}

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm ? filteredBlogs : filteredBlogs.slice(1)).map(
                (blog, index) => (
                  <div
                    key={blog.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="relative w-full h-48">
                      <img
                        src={blog.banner_image || DEFAULT_IMAGE}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-blue-600 font-semibold">
                        {blog.content_type.name}
                      </span>
                      <h3 className="text-xl font-bold mt-2 mb-4">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {blog.content_body?.substring(0, 150)}...
                      </p>
                      <Link
                        to={`/blog/${blog.id}`}
                        className="text-blue-600 font-semibold flex items-center group"
                      >
                        Read More
                        <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Pagination */}
            {!searchTerm && <PaginationControls />}
          </>
        )}
      </main>

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

export default BlogPage;
