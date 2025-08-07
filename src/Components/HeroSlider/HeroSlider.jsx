import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/pagination";
import "./HeroSlider.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Images
import group10 from "../../assets/Group 10.jpg";
import group11 from "../../assets/Group 11.jpg";
import group12 from "../../assets/Group 12.jpg";
import group13 from "../../assets/Group 10.jpg";
import group14 from "../../assets/Group 11.jpg";
import group15 from "../../assets/Group 12.jpg";
// import swaper from "../../assets/div.swiper-pagination.jpg";
const HeroSlider = () => {
  const slides = [group10, group11, group12, group13, group14, group15];

  return (
    <div className="container-fluid bg-white py-4" >
      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="img-fluid rounded d-block mx-auto"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;