import React from 'react'
import { Link } from "react-router-dom";
import Testimonial from '../../Components/Testimonial'

export default function TestimonialPage() {
  return (
   <>
    {/* Header Start */}
        <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{maxWidth: "900px"}}>
                <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Our Testimonial</h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#Pages">Pages</Link></li>
                    <li className="breadcrumb-item active text-primary">Testimonial</li>
                </ol>    
            </div>
        </div>

        <Testimonial/>
        <Link to="#top" className="btn btn-primary btn-lg-square rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></Link>   

   </>
  )
}
