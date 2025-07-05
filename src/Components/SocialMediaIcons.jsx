import React from "react";
import { Link } from "react-router-dom";


const SocialMediaIcons = () => (
  <div className="d-flex border-end border-primary pe-3">
    <Link className="btn p-0 text-primary me-3" to="https://facebook.com"><i className="fab fa-facebook-f"></i></Link>
    <Link className="btn p-0 text-primary me-3" to="https://twitter.com"><i className="fab fa-twitter"></i></Link>
    <Link className="btn p-0 text-primary me-3" to="https://instagram.com"><i className="fab fa-instagram"></i></Link>
    <Link className="btn p-0 text-primary me-0" to="https://linkedin.com"><i className="fab fa-linkedin-in"></i></Link>
  </div>
);

export default SocialMediaIcons;
