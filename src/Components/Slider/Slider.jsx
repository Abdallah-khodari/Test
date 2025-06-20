import { useState, useEffect } from "react";
import diving from "../../assets/Diving.webp";
import luxor from "../../assets/luxor.jpg";
import pyramids from "../../assets/Pyramids.jpg";
import iamge1 from "../../assets/1.jpg";
import iamge2 from "../../assets/2.jpg";
import iamge3 from "../../assets/3.jpg";
import iamge4 from "../../assets/4.jpg";

const images = [
  diving,
  luxor,
  pyramids,
  iamge1,
  iamge2,
  iamge3,
  iamge4
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative  w-full mt-20 mb-20 mx-auto   h-120  overflow-hidden  rounded-lg shadow-lg">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute top-0  w-full left-0  h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      <div className="absolute  bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
