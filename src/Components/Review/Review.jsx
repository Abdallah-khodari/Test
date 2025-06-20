import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    comment: "Amazing experience! Will definitely come back.",
    location: "Germany",
    rating: 5,
  },
  {
    name: "Fatima Ali",
    comment: "The trip was beyond my expectations, highly recommended!",
    location: "UAE",
    rating: 4,
  },
  {
    name: "Ahmed Mostafa",
    comment: "Beautiful places, friendly people, and great service.",
    location: "Egypt",
    rating: 5,
  },
];

export default function ReviewSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="max-w-2xl mt-20 mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        What Our Guests Say
      </h2>
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center gap-4">
              
              <p className="text-gray-700 italic">"{review.comment}"</p>
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < review.rating ? "fill-current" : "text-gray-300"} />
                ))}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-500">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
