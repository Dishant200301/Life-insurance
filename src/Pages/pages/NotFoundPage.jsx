import React from 'react'
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
        {/* Header Start  */}
        <div className="container-fluid bg-breadcrumb">
            <div className="container text-center py-5" style={{maxWidth: "900px"}}>
                <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">404 Pages</h4>
                <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="#Pages">Pages</Link></li>
                    <li className="breadcrumb-item active text-primary">404 Page</li>
                </ol>    
            </div>
        </div>
        


        {/* 404 Start */}
        <div className="container-fluid bg-light py-5">
            <div className="container py-5 text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <i className="far fa-frown-open display-1 text-primary mb-4" style={{width: "80px", height: "80px"}}></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">Page Not Found</h1>
                        <p className="mb-4">We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                        <Link className="btn btn-primary rounded-pill py-3 px-5" to="/">Go Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>



        <Link to="#top" className="btn btn-primary btn-lg-square rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></Link>   

    </>
  )
}
