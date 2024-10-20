import logo from "./logo.svg";
import "./App.css";
import AboutUsPage from "./AboutUsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MarketingOSLandingPage from "./MarketingOSLandingPage";
import Blog from "./BlogPage";
import ContactPage from "./ContactPage";
import AdminLoginPage from "./AdminLoginPage";
import ProtectedRoute from "./ProtectedRoute";
import CaseStudyPage from "./CaseStudyPage";
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
        {/* Protected Route
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
