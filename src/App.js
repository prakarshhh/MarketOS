// import logo from "./logo.svg";
// import "./App.css";
// import AboutUsPage from "./AboutUsPage";
// import CaseStudyDetail from './CaseStudyDetail';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MarketingOSLandingPage from "./MarketingOSLandingPage";
// import Blog from "./BlogPage";
// import ContactPage from "./ContactPage";
// import AdminLoginPage from "./AdminLoginPage";
// import ProtectedRoute from "./ProtectedRoute";
// import CaseStudyPage from "./CaseStudyPage";
// import ContentPage from "./contentPage";
// import PrivacyPolicyPage from "./privacyPolicy";
// import BlogPostPage from './BlogPostPage';
// import posthog from "posthog-js";
// import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';

// // Initialize PostHog
// posthog.init(process.env.REACT_APP_POSTHOG_API_KEY, {
//   api_host: "https://app.posthog.com",
//   persistence: "cookie",
//   loaded: () => {
//     console.log("PostHog SDK loaded successfully");
//   },
//   debug: true,
// });

// // Function to store PostHog user data in both localStorage and sessionStorage
// const storePostHogUserData = (email) => {
//   const posthogId = posthog.get_distinct_id();

//   if (posthogId) {
//     const userData = {
//       is_identified: !!email,
//       name: email || "Anonymous",
//       distinct_ids: [email || "Anonymous", posthogId],
//       timestamp: new Date().toISOString(), // Add timestamp
//     };

//     localStorage.setItem("posthog_user", JSON.stringify(userData));
//     sessionStorage.setItem("posthog_user", JSON.stringify(userData));
//     console.log("PostHog user data stored:", userData);
//   } else {
//     console.error("No PostHog distinct ID found for this session.");
//   }
// };

// // Function to capture custom events with additional properties
// const trackCustomEvent = (eventName, properties = {}) => {
//   if (posthog) {
//     posthog.capture(eventName, properties);
//     console.log(`Captured event: ${eventName}, properties:`, properties);
//   } else {
//     console.error("PostHog is not initialized, unable to capture event.");
//   }
// };

// // Function to log user distinct IDs and email
// const logUserInfo = (email) => {
//   const distinctId = posthog.get_distinct_id();
//   console.log(`User Info: Email: ${email || "Anonymous"}, Distinct ID: ${distinctId}`);
// };

// // Function to track session duration
// const trackSessionDuration = (start) => {
//   const duration = Math.floor((Date.now() - start) / 1000); // Duration in seconds
//   trackCustomEvent("session_duration", { duration });
//   console.log(`Session duration tracked: ${duration} seconds`);
// };

// function Layout({ children }) {
//   const location = useLocation();
//   const sessionStartTime = Date.now(); // Record session start time

//   useEffect(() => {
//     // Leadfeeder tracking script
//     (function(ss, ex) {
//       window.ldfdr = window.ldfdr || function() {
//         (window.ldfdr._q = window.ldfdr._q || []).push([].slice.call(arguments));
//       };
//       (function(d, s) {
//         const fs = d.getElementsByTagName(s)[0];
//         function ce(src) {
//           const cs = d.createElement(s);
//           cs.src = src;
//           cs.async = 1;
//           fs.parentNode.insertBefore(cs, fs);
//         }
//         ce('https://sc.lfeeder.com/lftracker_v1_' + ss + (ex ? '_' + ex : '') + '.js');
//       })(document, 'script');
//     })(process.env.REACT_APP_LEAD_FEEDER_ID);

//     const trackedPaths = ["/", "/blog", "/aboutus", "/contact", "/CaseStudyPage", "/content", "/privacyPolicy"];

//     if (trackedPaths.includes(location.pathname)) {
//       const params = new URLSearchParams(location.search);
//       const email = params.get("email");

//       if (email && posthog) {
//         const storedUserData = JSON.parse(sessionStorage.getItem("posthog_user"));

//         if (!storedUserData || storedUserData.name !== email) {
//           posthog.identify(email, { email: email });
//           logUserInfo(email); // Log user info
//           storePostHogUserData(email);
//         } else {
//           console.log("User already identified in session, skipping identification.");
//           logUserInfo(email); // Log user info
//         }
//       } else {
//         storePostHogUserData(null);
//       }

//       trackCustomEvent("$pageview", { page: location.pathname });
//       console.log("Pageview event captured for:", location.pathname);
//     }

//     // Track session duration before component unmount
//     return () => {
//       trackSessionDuration(sessionStartTime);
//     };
//   }, [location]);

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       {children}
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router basename="/MarketOS">
//       <Routes>
//         <Route path="/" element={<MarketingOSLandingPage />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/aboutus" element={<AboutUsPage />} />
//         <Route path="/contact" element={<ContactPage />} />
//         <Route path="/login" element={<AdminLoginPage />} />
//         <Route path="/CaseStudyPage" element={<CaseStudyPage />} />
//         <Route path="/content" element={<ContentPage />} />
//         <Route path="/privacyPolicy" element={<PrivacyPolicyPage />} />
//         <Route path="/blog/:id" element={<BlogPostPage />} />
//         <Route path="/case-study/:id" element={<CaseStudyDetail />} />
//         {/* Protected Route
//         <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Route> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import logo from "./logo.svg";
import "./App.css";
import AboutUsPage from "./AboutUsPage";
import CaseStudyDetail from './CaseStudyDetail';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MarketingOSLandingPage from "./MarketingOSLandingPage";
import Blog from "./BlogPage";
import ContactPage from "./ContactPage";
import AdminLoginPage from "./AdminLoginPage";
import ProtectedRoute from "./ProtectedRoute";
import CaseStudyPage from "./CaseStudyPage";
import ContentPage from "./contentPage";
import PrivacyPolicyPage from "./privacyPolicy";
import BlogPostPage from './BlogDetail';
import posthog from "posthog-js";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// Initialize PostHog
console.log("PostHog API Key:", process.env.REACT_APP_POSTHOG_API_KEY); // Debugging log

posthog.init(process.env.REACT_APP_POSTHOG_API_KEY, {
  api_host: "https://app.posthog.com",
  persistence: "cookie",
  loaded: () => {
    console.log("PostHog SDK loaded successfully");
  },
  debug: true,
});

// Function to store PostHog user data in both localStorage and sessionStorage
const storePostHogUserData = (email) => {
  const posthogId = posthog.get_distinct_id();

  if (posthogId) {
    const userData = {
      is_identified: !!email,
      name: email || "Anonymous",
      distinct_ids: [email || "Anonymous", posthogId],
      timestamp: new Date().toISOString(), // Add timestamp
    };

    localStorage.setItem("posthog_user", JSON.stringify(userData));
    sessionStorage.setItem("posthog_user", JSON.stringify(userData));
    console.log("PostHog user data stored:", userData);
  } else {
    console.error("No PostHog distinct ID found for this session.");
  }
};

// Function to capture custom events with additional properties
const trackCustomEvent = (eventName, properties = {}) => {
  if (posthog) {
    posthog.capture(eventName, properties);
    console.log(`Captured event: ${eventName}`, properties); // Debugging log
  } else {
    console.error("PostHog is not initialized, unable to capture event.");
  }
};

// Function to log user distinct IDs and email
const logUserInfo = (email) => {
  const distinctId = posthog.get_distinct_id();
  console.log(`User Info: Email: ${email || "Anonymous"}, Distinct ID: ${distinctId}`);
};

// Function to track session duration
const trackSessionDuration = (start) => {
  const duration = Math.floor((Date.now() - start) / 1000); // Duration in seconds
  trackCustomEvent("session_duration", { duration });
  console.log(`Session duration tracked: ${duration} seconds`); // Debugging log
};

function Layout({ children }) {
  const location = useLocation();
  const sessionStartTime = Date.now(); // Record session start time

  useEffect(() => {
    console.log("Layout component mounted"); // Debugging log

    // Leadfeeder tracking script
    (function(ss, ex) {
      window.ldfdr = window.ldfdr || function() {
        (window.ldfdr._q = window.ldfdr._q || []).push([].slice.call(arguments));
      };
      (function(d, s) {
        const fs = d.getElementsByTagName(s)[0];
        function ce(src) {
          const cs = d.createElement(s);
          cs.src = src;
          cs.async = 1;
          fs.parentNode.insertBefore(cs, fs);
        }
        ce('https://sc.lfeeder.com/lftracker_v1_' + ss + (ex ? '_' + ex : '') + '.js');
      })(document, 'script');

      console.log("Leadfeeder script attempted to load."); // Debugging log
    })(process.env.REACT_APP_LEAD_FEEDER_ID);

    const trackedPaths = ["/", "/blog", "/aboutus", "/contact", "/CaseStudyPage", "/content", "/privacyPolicy","/blog/","/CaseStudyPage/"];

    if (trackedPaths.includes(location.pathname)) {
      const params = new URLSearchParams(location.search);
      const email = params.get("email");

      if (email && posthog) {
        const storedUserData = JSON.parse(sessionStorage.getItem("posthog_user"));

        if (!storedUserData || storedUserData.name !== email) {
          posthog.identify(email, { email: email });
          logUserInfo(email); // Log user info
          storePostHogUserData(email);
        } else {
          console.log("User already identified in session, skipping identification.");
          logUserInfo(email); // Log user info
        }
      } else {
        storePostHogUserData(null);
      }

      trackCustomEvent("$pageview", { page: location.pathname });
      console.log("Pageview event captured for:", location.pathname); // Debugging log
    }

    // Track session duration before component unmount
    return () => {
      trackSessionDuration(sessionStartTime);
    };
  }, [location]);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {children}
    </div>
  );
}

function App() {
  return (
    <Router basename="/MarketOS">
      <Routes>
        <Route path="/" element={<MarketingOSLandingPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<AdminLoginPage />} />
        <Route path="/CaseStudyPage" element={<CaseStudyPage />} />
        <Route path="/content" element={<ContentPage />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicyPage />} />
        {/* <Route path="/blog" element={<BlogPostPage />} /> */}
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        {/* <Route path="/CaseStudyPage/:id" element={<CaseStudyDetail />} /> */}
        <Route path="/CaseStudyPage/:slug" element={<CaseStudyDetail />} />
        {/* Protected Route
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
