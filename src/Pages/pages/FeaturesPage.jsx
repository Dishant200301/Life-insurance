import React from 'react'
import Features from '../../Components/Features'
import { Link } from "react-router-dom";

export default function FeaturesPage() {
  return (
    <>
       {/* Header Start */}
        <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{maxWidth: "900px"}}>
                <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Features</h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item"><Link to="index.html">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#Pages">Pages</Link></li>
                    <li className="breadcrumb-item active text-primary">Feature</li>
                </ol>    
            </div>
        </div>

        <Features/>
                <Link to="#top" className="btn btn-primary btn-lg-square rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></Link>   

    </>
  )
}
