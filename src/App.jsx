import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./Components/Topbar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Search from "./Components/Search";

import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import Home from "./Pages/Home";
import ServicePage from "./Pages/ServicePage";
import BlogPage from "./Pages/BlogPage";
import FAQsPage from "./Pages/pages/FAQsPage";
import FeaturesPage from "./Pages/pages/FeaturesPage";
import TeamPage from "./Pages/pages/TeamPage";
import TestimonialPage from "./Pages/pages/TestimonialPage";
import NotFoundPage from "./Pages/pages/NotFoundPage";

export default function App() {
  return (
    <Router>
      <Topbar />
      <Navbar />
      <Search />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/blogs" element={<BlogPage />} />
          
        {/* Nested Pages */}
        <Route path="/feature" element={<FeaturesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/FAQ" element={<FAQsPage />} />
        <Route path="/404" element={<NotFoundPage />} />
      
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

