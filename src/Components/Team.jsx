import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Team() {
  const teamMembers = [
    {
      name: "David James",
      profession: "Profession",
      image: "assets/img/team-1.jpg",
    },
    {
      name: "David James",
      profession: "Profession",
      image: "assets/img/team-2.jpg",
    },
    {
      name: "David James",
      profession: "Profession",
      image: "assets/img/team-3.jpg",
    },
    {
      name: "David James",
      profession: "Profession",
      image: "assets/img/team-4.jpg",
    },
  ];

  return (
    <div className="container-fluid team py-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: "800px" }}
        >
          <h4 className="text-primary">Our Team</h4>
          <h1 className="display-4 mb-4">Meet Our Expert Team Members</h1>
          <p className="mb-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            adipisci facilis cupiditate recusandae aperiam temporibus corporis
            itaque quis facere, numquam, ad culpa deserunt sint dolorem autem
            obcaecati, ipsam mollitia hic.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div
                className="team-item wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.2}s`}
              >
                <div className="team-img">
                  <img
                    src={member.image}
                    className="img-fluid rounded-top w-100"
                    alt={member.name}
                  />
                  <div className="team-icon">
                    {["facebook-f", "twitter", "linkedin-in", "instagram"].map(
                      (icon, i) => (
                        <Link
                          key={i}
                          className="btn btn-primary btn-sm-square rounded-pill mb-2"
                          to="/"
                        >
                          <i className={`fab fa-${icon}`}></i>
                        </Link>
                      )
                    )}
                  </div>
                </div>
                <div className="team-title p-4">
                  <h4 className="mb-0">{member.name}</h4>
                  <p className="mb-0">{member.profession}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
