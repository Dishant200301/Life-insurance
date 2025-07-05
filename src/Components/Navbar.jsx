import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="container-fluid nav-bar px-0 px-lg-4 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand p-0">
              <h1 className="text-primary mb-0">
                <i className="fab fa-slack me-2"></i> LifeSure
              </h1>
              {/* <img src="assets/img/logo.png" alt="Logo" /> */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-0 mx-lg-auto">
                <Link to="/" className="nav-item nav-link active">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
                <Link to="/service" className="nav-item nav-link">
                  Services
                </Link>
                <Link to="/blogs" className="nav-item nav-link">
                  Blog
                </Link>
                <div className="nav-item dropdown">
                  <Link to="#Pages" className="nav-link" data-bs-toggle="dropdown">
                    <span className="dropdown-toggle">Pages</span>
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="/feature" className="dropdown-item">
                      Our Features
                    </Link>
                    <Link to="/team" className="dropdown-item">
                      Our team
                    </Link>
                    <Link to="/testimonial" className="dropdown-item">
                      Testimonial
                    </Link>
                    <Link to="/FAQ" className="dropdown-item">
                      FAQs
                    </Link>
                    <Link to="/404" className="dropdown-item">
                      404 Page
                    </Link>
                  </div>
                </div>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
                <div className="nav-btn px-3">
                  <button
                    className="btn-search btn btn-primary btn-md-square rounded-circle flex-shrink-0"
                    data-bs-toggle="modal"
                    data-bs-target="#searchModal"
                  >
                    <i className="fas fa-search"></i>
                  </button>
                  <Link
                    to="#Quote"
                    className="btn btn-primary rounded-pill py-2 px-4 ms-3 flex-shrink-0"
                  >
                    {" "}
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
            <div className="d-none d-xl-flex flex-shrink-0 ps-4">
              <Link
                to="/"
                className="btn btn-light btn-lg-square rounded-circle position-relative wow tada"
                data-wow-delay=".9s"
              >
                <i className="fa fa-phone-alt fa-2x"></i>
                <div
                  className="position-absolute"
                  style={{ top: "7px", right: "12px" }}
                >
                  <span>
                    <i className="fa fa-comment-dots text-secondary"></i>
                  </span>
                </div>
              </Link>
              <div className="d-flex flex-column ms-3">
                <span>Call to Our Experts</span>
                <Link to="tel:+ 0123 456 7890">
                  <span className="text-dark">Free: + 0123 456 7890</span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
