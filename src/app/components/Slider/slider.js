'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import styles from "./Slider.module.css"; // Đảm bảo bạn có file CSS này

export default function SimpleSlider({ productImg }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: A1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true, // Hiệu ứng mờ dần cho sang trọng
  };

  // Danh sách ảnh mẫu để Slider hoạt động
  const images = [
    productImg || "/mitom2.jpg",
    "/mitom3.jpeg",
    "/banhmi.jpg"
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} style={{ position: 'relative', width: '100%', height: '420px' }}>
            <Image 
              src={img} 
              alt={`Slide ${index}`} 
              width={600} 
              height={480} 
              style={{ objectFit: 'cover', borderRadius: '20px' }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}