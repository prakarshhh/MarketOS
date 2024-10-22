import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogPostPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const DEFAULT_IMAGE =
    "https://automationagency.com/wp-content/uploads/2022/09/fi-37.1.jpeg";

  const handleImageError = (e) => {
    e.target.src = DEFAULT_IMAGE;
    e.target.onerror = null;
  };

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        // Using the direct endpoint for a single blog post
        const response = await fetch(
          `http://165.22.11.185:8000/content/${id}/`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("API Response:", data); // For debugging
        setBlog(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError(err.message);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlogPost();
    }
  }, [id]); // Dependency on id ensures the effect runs when the id changes

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-red-50 border border-red-200 rounded-md p-6 text-center max-w-lg mx-auto">
          <p className="text-red-600 mb-4">{error}</p>
          <Link
            to="/blog"
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Blog post not found.</p>
          <Link
            to="/blog"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group transition-colors"
        >
          <ArrowLeft
            className="mr-2 transition-transform group-hover:-translate-x-2"
            size={20}
          />
          Back to Blogs
        </Link>

        {/* Blog Post Content */}
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Banner Image */}
          {blog.banner_image && (
            <div className="relative w-full h-96">
              <img
                src={blog.banner_image || DEFAULT_IMAGE}
                alt={blog.title}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          )}

          {/* Content */}
          <div className="p-8">
            {/* Category Tag */}
            {blog.content_type && (
              <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                {blog.content_type.name}
              </span>
            )}

            {/* Title */}
            <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

            {/* Metadata */}
            <div className="flex flex-wrap gap-4 items-center text-gray-600 mb-8">
              {blog.author_name && (
                <span className="flex items-center">By {blog.author_name}</span>
              )}
              <span className="flex items-center">
                Published on {new Date(blog.created_at).toLocaleDateString()}
              </span>
            </div>

            {/* Content Body */}
            <div className="prose max-w-none">
              {blog.content_body.split("\n").map((paragraph, index) =>
                paragraph ? (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ) : (
                  <br key={index} />
                )
              )}
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};

export default BlogPostPage;
