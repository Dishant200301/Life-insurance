import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef, useEffect } from "react";

export default function Testimonial() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    // Swiper needs refs to be available before init
  }, []);
  return (
    <div className="container-fluid testimonial pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Testimonial</h4>
          <h1 className="display-4 mb-4">What Our Customers Are Saying</h1>
          <p className="mb-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="d-flex justify-content-between mb-3 px-5">
          <button ref={prevRef} className="btn btn-primary rounded-pill px-4">
            <i className="fas fa-arrow-left"></i>
          </button>
          <button ref={nextRef} className="btn btn-primary rounded-pill px-4">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="testimonial-item bg-light rounded">
              <div className="row g-0">
                <div className="col-4 col-lg-4 col-xl-3">
                  <div className="h-100">
                    <img
                      src="assets/img/testimonial-1.jpg"
                      className="img-fluid h-100 rounded"
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-8 col-lg-8 col-xl-9">
                  <div className="d-flex flex-column my-auto text-start p-4">
                    <h4 className="text-dark mb-0">Client Name</h4>
                    <p className="mb-3">Profession</p>
                    <div className="d-flex text-primary mb-3">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <p className="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Enim error molestiae aut modi corrupti fugit eaque rem
                      nulla incidunt temporibus quisquam,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="testimonial-item bg-light rounded">
              <div className="row g-0">
                <div className="col-4 col-lg-4 col-xl-3">
                  <div className="h-100">
                    <img
                      src="assets/img/testimonial-2.jpg"
                      className="img-fluid h-100 rounded"
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-8 col-lg-8 col-xl-9">
                  <div className="d-flex flex-column my-auto text-start p-4">
                    <h4 className="text-dark mb-0">Client Name</h4>
                    <p className="mb-3">Profession</p>
                    <div className="d-flex text-primary mb-3">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star text-body"></i>
                    </div>
                    <p className="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Enim error molestiae aut modi corrupti fugit eaque rem
                      nulla incidunt temporibus quisquam,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="testimonial-item bg-light rounded">
              <div className="row g-0">
                <div className="col-4 col-lg-4 col-xl-3">
                  <div className="h-100">
                    <img
                      src="assets/img/testimonial-3.jpg"
                      className="img-fluid h-100 rounded"
                      style={{ objectFit: "cover" }}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-8 col-lg-8 col-xl-9">
                  <div className="d-flex flex-column my-auto text-start p-4">
                    <h4 className="text-dark mb-0">Client Name</h4>
                    <p className="mb-3">Profession</p>
                    <div className="d-flex text-primary mb-3">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star text-body"></i>
                      <i className="fas fa-star text-body"></i>
                    </div>
                    <p className="mb-0">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Enim error molestiae aut modi corrupti fugit eaque rem
                      nulla incidunt temporibus quisquam,
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
