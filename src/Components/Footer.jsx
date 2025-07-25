import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div
        className="container-fluid footer py-5 wow fadeIn"
        data-wow-delay="0.2s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-9">
              <div className="mb-5">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-6 col-xl-5">
                    <div className="footer-item">
                      <Link to="index.html" className="p-0">
                        <h3 className="text-white">
                          <i className="fab fa-slack me-3"></i> LifeSure
                        </h3>
                        {/* <!-- <img src="img/logo.png" alt="Logo">  */}
                      </Link>
                      <p className="text-white mb-4">
                        Dolor amet sit justo amet elitr clita ipsum elitr
                        est.Lorem ipsum dolor sit amet, consectetur
                        adipiscing...
                      </p>
                      <div className="footer-btn d-flex">
                        <Link
                          className="btn btn-md-square rounded-circle me-3"
                          to="#"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link
                          className="btn btn-md-square rounded-circle me-3"
                          to="#"
                        >
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link
                          className="btn btn-md-square rounded-circle me-3"
                          to="#"
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                        <Link
                          className="btn btn-md-square rounded-circle me-0"
                          to="#"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-3">
                    <div className="footer-item">
                      <h4 className="text-white mb-4">Useful Links</h4>
                      <Link to="/about">
                        <i className="fas fa-angle-right me-2"></i> About Us
                      </Link>
                      <Link to="/feature">
                        <i className="fas fa-angle-right me-2"></i> Features
                      </Link>
                      <Link to="/service">
                        <i className="fas fa-angle-right me-2"></i> Services
                      </Link>
                      <Link to="/FAQ">
                        <i className="fas fa-angle-right me-2"></i> FAQ's
                      </Link>
                      <Link to="/blogs">
                        <i className="fas fa-angle-right me-2"></i> Blogs
                      </Link>
                      <Link to="/contact">
                        <i className="fas fa-angle-right me-2"></i> Contact
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4">
                    <div className="footer-item">
                      <h4 className="mb-4 text-white">Instagram</h4>
                      <div className="row g-3">
                        <div className="col-4">
                          <div className="footer-instagram rounded">
                            <img
                              src="assets/img/instagram-footer-1.jpg"
                              className="img-fluid w-100"
                              alt=""
                            />
                            <div className="footer-search-icon">
                              <Link
                                to="assets/img/instagram-footer-1.jpg"
                                data-lightbox="footerInstagram-1"
                                className="my-auto"
                              >
                                <i className="fas fa-link text-white"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="footer-instagram rounded">
                            <img
                              src="assets/img/instagram-footer-2.jpg"
                              className="img-fluid w-100"
                              alt=""
                            />
                            <div className="footer-search-icon">
                              <Link
                                to="assets/img/instagram-footer-2.jpg"
                                data-lightbox="footerInstagram-2"
                                className="my-auto"
                              >
                                <i className="fas fa-link text-white"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="footer-instagram rounded">
                            <img
                              src="assets/img/instagram-footer-3.jpg"
                              className="img-fluid w-100"
                              alt=""
                            />
                            <div className="footer-search-icon">
                              <Link
                                to="assets/img/instagram-footer-3.jpg"
                                data-lightbox="footerInstagram-3"
                                className="my-auto"
                              >
                                <i className="fas fa-link text-white"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="footer-instagram rounded">
                            <img
                              src="assets/img/instagram-footer-4.jpg"
                              className="img-fluid w-100"
                              alt=""
                            />
                            <div className="footer-search-icon">
                              <Link
                                to="assets/img/instagram-footer-4.jpg"
                                data-lightbox="footerInstagram-4"
                                className="my-auto"
                              >
                                <i className="fas fa-link text-white"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="footer-instagram rounded">
                            <img
                              src="assets/img/instagram-footer-5.jpg"
                              className="img-fluid w-100"
                              alt=""
                            />
                            <div className="footer-search-icon">
                              <Link
                                to="assets/img/instagram-footer-5.jpg"
                                data-lightbox="footerInstagram-5"
                                className="my-auto"
                              >
                                <i className="fas fa-link text-white"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="footer-instagram rounded">
                            <img
                              src="assets/img/instagram-footer-6.jpg"
                              className="img-fluid w-100"
                              alt=""
                            />
                            <div className="footer-search-icon">
                              <Link
                                to="assets/img/instagram-footer-6.jpg"
                                data-lightbox="footerInstagram-6"
                                className="my-auto"
                              >
                                <i className="fas fa-link text-white"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="pt-5"
                style={{borderTop: "1px solid rgba(255, 255, 255, 0.08)"}}
              >
                <div className="row g-0">
                  <div className="col-12">
                    <div className="row g-4">
                      <div className="col-lg-6 col-xl-4">
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                            <i className="fas fa-map-marker-alt fa-2x"></i>
                          </div>
                          <div>
                            <h4 className="text-white">Address</h4>
                            <p className="mb-0">123 Street New York.USA</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-4">
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                            <i className="fas fa-envelope fa-2x"></i>
                          </div>
                          <div>
                            <h4 className="text-white">Mail Us</h4>
                            <p className="mb-0">info@example.com</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-xl-4">
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                            <i className="fa fa-phone-alt fa-2x"></i>
                          </div>
                          <div>
                            <h4 className="text-white">Telephone</h4>
                            <p className="mb-0">(+012) 3456 7890</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3">
              <div className="footer-item">
                <h4 className="text-white mb-4">Newsletter</h4>
                <p className="text-white mb-3">
                  Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <div className="position-relative rounded-pill mb-4">
                  <input
                    className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
                <div className="d-flex flex-shrink-0">
                  <div className="footer-btn">
                    <Link
                      to="#"
                      className="btn btn-lg-square rounded-circle position-relative wow tada"
                      data-wow-delay=".9s"
                    >
                      <i className="fa fa-phone-alt fa-2x"></i>
                      <div
                        className="position-absolute"
                        style={{top: "2px", right: "12px"}}
                      >
                        <span>
                          <i className="fa fa-comment-dots text-secondary"></i>
                        </span>
                      </div>
                    </Link>
                  </div>
                  <div className="d-flex flex-column ms-3 flex-shrink-0">
                    <span>Call to Our Experts</span>
                    <Link to="tel:+ 0123 456 7890">
                      <span className="text-white">Free: + 0123 456 7890</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;


