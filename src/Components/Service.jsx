import React from "react";
import { Link } from "react-router-dom";

export default function Service() {
  return (
    <> <div className="container-fluid service py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: "800px"}}>
                    <h4 className="text-primary">Our Services</h4>
                    <h1 className="display-4 mb-4">We Provide Best Services</h1>
                    <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur adipisci facilis cupiditate recusandae aperiam temporibus corporis itaque quis facere, numquam, ad culpa deserunt sint dolorem autem obcaecati, ipsam mollitia hic.
                    </p>
                </div>
                <div className="row g-4 justify-content-center">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="assets/img/blog-1.png" className="img-fluid rounded-top w-100" alt=""/>
                                <div className="service-icon p-3">
                                    <i className="fa fa-users fa-2x"></i>
                                </div>
                            </div>
                            <div className="service-content p-4">
                                <div className="service-content-inner">
                                    <Link to="#" className="d-inline-block h4 mb-4">Life Insurance</Link>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eum!</p>
                                    <Link className="btn btn-primary rounded-pill py-2 px-4" to="#">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="assets/img/blog-2.png" className="img-fluid rounded-top w-100" alt=""/>
                                <div className="service-icon p-3">
                                    <i className="fa fa-hospital fa-2x"></i>
                                </div>
                            </div>
                            <div className="service-content p-4">
                                <div className="service-content-inner">
                                    <Link to="#" className="d-inline-block h4 mb-4">Health Insurance</Link>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eum!</p>
                                    <Link className="btn btn-primary rounded-pill py-2 px-4" to="#">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="assets/img/blog-3.png" className="img-fluid rounded-top w-100" alt=""/>
                                <div className="service-icon p-3">
                                    <i className="fa fa-car fa-2x"></i>
                                </div>
                            </div>
                            <div className="service-content p-4">
                                <div className="service-content-inner">
                                    <Link to="#" className="d-inline-block h4 mb-4">Car Insurance</Link>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eum!</p>
                                    <Link className="btn btn-primary rounded-pill py-2 px-4" to="#">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="service-item">
                            <div className="service-img">
                                <img src="assets/img/blog-4.png" className="img-fluid rounded-top w-100" alt=""/>
                                <div className="service-icon p-3">
                                    <i className="fa fa-home fa-2x"></i>
                                </div>
                            </div>
                            <div className="service-content p-4">
                                <div className="service-content-inner">
                                    <Link to="#" className="d-inline-block h4 mb-4">Home Insurance</Link>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, eum!</p>
                                    <Link className="btn btn-primary rounded-pill py-2 px-4" to="#">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.2s">
                        <Link className="btn btn-primary rounded-pill py-3 px-5" to="#">More Services</Link>
                    </div>
                </div>
            </div>
        </div></>
  )
}
