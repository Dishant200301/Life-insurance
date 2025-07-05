import React from "react";
import Features from "../Components/Features";
import FAQs from "../Components/FAQs";
import Team from "../Components/Team";
import About from "../Components/About";
import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <>
      {/* Header Start  */}
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            About Us
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#pages">Pages</Link>
            </li>
            <li className="breadcrumb-item active text-primary">About</li>
          </ol>
        </div>
      </div>

      {/* About Start */}
      <About />

      {/* Feature Start  */}
      <Features />

      {/* FAQs Start  */}
      <FAQs />

      {/* Team Start  */}
      <Team />
      
      <Link to="#top" className="btn btn-primary btn-lg-square rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></Link>   

    </>
  );
}
