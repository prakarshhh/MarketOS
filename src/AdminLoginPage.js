import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Menu, X, Eye, EyeOff } from "lucide-react";

const AdminLoginPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState(""); // Changed email to username
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Replace this URL with your actual API login endpoint
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username, // Send username instead of email
        password,
      }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token); // Save the token in localStorage
      console.log("Login successful");
      window.location.href = "/contact";
    } else {
      console.error("Login failed", data.message);
    }
  };

  return (
    <div className="font-sans min-h-screen flex flex-col">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 z-50 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-blue-500 cursor-pointer">
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
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/CaseStudyPage">Case Study</Link>
                </li>
              </ul>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <ul className="flex flex-col space-y-4">
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="cursor-pointer text-gray-700 hover:text-blue-500 transition">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Login
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Access your dashboard
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>
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
        </div>
      </footer>
    </div>
  );
};

export default AdminLoginPage;
