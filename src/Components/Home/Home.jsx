import React from "react";
import image from "../../assets/Home.jpeg";


import Exploretrips from "../Exploretrips/Exploretrips";
import Slider from "../Slider/Slider";
import Book from "../Book/Book";
import Review from "../Review/Review";

export default function Home() {


  return (
    <>
      <div className="relative w-full h-screen">
        <img
          src={image}
          alt="Home image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            style={{
              color: "#002147     ",
            }}
            className="  text-2xl font-bold  bg-opacity-50 px-6 py-3 rounded"
          >
            Welcome to Hurghada Fun The Best Place for Fun and Adventure
          </h1>
        </div>
      </div>
      <Exploretrips />
      <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2 w-full bg-gray-200 mt-20 ">
        <Slider />
        <Book />
      </div>
      <Review  />
    </>
  );
}
