import React from "react";
import "./testimonial.css";
import AVART1 from "../../asesst/sel-4.jpeg";
import AVART2 from "../../asesst/sel-1.jpg";
import AVART3 from "../../asesst/sel-2.jpg";
import AVART4 from "../../asesst/sel-4.jpeg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVART1,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet vel facilis dolorem doloremque modi, cumque voluptatibus nam enim explicabo totam, qui nihil ut distinctio. doloribus itaque voluptatum asperiores?",
  },
  {
    avatar: AVART2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet vel facilis dolorem doloremque modi, cumque voluptatibus nam enim explicabo totam, qui nihil ut distinctio. doloribus itaque voluptatum asperiores?",
  },
  {
    avatar: AVART3,
    name: "Regina Daves",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet vel facilis dolorem doloremque modi, cumque voluptatibus nam enim explicabo totam, qui nihil ut distinctio. doloribus itaque voluptatum asperiores?",
  },
  {
    avatar: AVART4,
    name: "Kwame Despite",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet vel facilis dolorem doloremque modi, cumque voluptatibus nam enim explicabo totam, qui nihil ut distinctio. doloribus itaque voluptatum asperiores?",
  },
];

function Testimonial() {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials_container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client_name">{name} </h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonial;
