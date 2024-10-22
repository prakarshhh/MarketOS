import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const DEFAULT_IMAGE =
    "http://higssoftware.com/images/format-of-the-case-study.png";

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

    const fetchCaseStudy = async () => {
      try {
        const response = await fetch(
          `http://165.22.11.185:8000/content/id/${id}/`
        );
        if (!response.ok) {
          throw new Error("Case study not found");
        }
        const data = await response.json();
        setCaseStudy(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCaseStudy();
  }, [id]);

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
          <p className="text-gray-600">{error}</p>
          <Link
            to="/case-studies"
            className="mt-4 inline-flex items-center text-blue-500 hover:text-blue-600"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Case Studies
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link
          to="/case-studies"
          className="inline-flex items-center text-blue-500 hover:text-blue-600 mb-8 transition-colors duration-300"
          data-aos="fade-right"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Case Studies
        </Link>

        {/* Hero Section */}
        <div
          className="bg-white rounded-lg shadow-md overflow-hidden mb-8"
          data-aos="fade-up"
        >
          <img
            src={caseStudy?.banner_image || DEFAULT_IMAGE}
            alt={caseStudy?.title}
            className="w-full h-96 object-cover"
            onError={handleImageError}
          />
          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-4">
              {caseStudy?.content_type && (
                <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {caseStudy.content_type.name}
                </span>
              )}
              {caseStudy?.created_at && (
                <span className="inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  <Calendar size={16} className="mr-2" />
                  {new Date(caseStudy.created_at).toLocaleDateString()}
                </span>
              )}
              {caseStudy?.author_name && (
                <span className="inline-flex items-center bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                  <User size={16} className="mr-2" />
                  {caseStudy.author_name}
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold mb-6">{caseStudy?.title}</h1>
          </div>
        </div>

        {/* Content Section */}
        <div
          className="bg-white rounded-lg shadow-md p-8 mb-8"
          data-aos="fade-up"
        >
          <div className="prose max-w-none">
            {caseStudy?.content_body && (
              <div className="whitespace-pre-wrap">
                {caseStudy.content_body
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
              {caseStudy?.meta_description && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-600">{caseStudy.meta_description}</p>
                </div>
              )}
              {caseStudy?.meta_keywords && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.meta_keywords
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
    </div>
  );
};

export default CaseStudyDetail;
