import React from "react";
import { Link } from "react-router-dom";

const LanguageDropdown = () => (
  <div className="dropdown ms-3">
    <Link to="#" className="dropdown-toggle text-dark" data-bs-toggle="dropdown">
      <small><i className="fas fa-globe-europe text-primary me-2"></i> English</small>
    </Link>
    <div className="dropdown-menu rounded">
      {["English", "Bangla", "French", "Spanish", "Arabic"].map((lang) => (
        <Link key={lang} to="#" className="dropdown-item">{lang}</Link>
      ))}
    </div>
  </div>
);

export default LanguageDropdown;
