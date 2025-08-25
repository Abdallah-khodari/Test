import React from "react";
import { FaMapMarkedAlt, FaCalendarCheck, FaUsers } from "react-icons/fa";
import seaimge from "../../assets/Home.jpeg"
import image1 from "../../assets/1.jpg";
import safari from "../../assets/safari.jpg";
import diving from "../../assets/Diving.webp";
import { Link } from "react-router-dom";
export default function AboutSection() {
  return (
    <section className="bg-white text-gray-800 px-4 py-10 sm:px-6 lg:px-20 max-w-screen-xl mx-auto">
      {/* Hero Image Section */}
      <div className="relative rounded-xl overflow-hidden mb-10">
        <img
          src={seaimge}
          alt="seaimge"
          className="w-full h-64 sm:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-transparent bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            About Hurghada Fun
          </h2>
          <p className="mb-4 font-bold">Your Gateway to the Wonders of Egypt</p>
          <button
            onClick={() => {
              window.open("https://wa.me/+2001010536102", "_blank");
            }}
            className="w-1/4 text-center p-2 cursor-pointer bg-green-400 rounded-full"
          >
            Book Now!
          </button>
        </div>
      </div>

      {/* Mission */}
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-2">Our Mission</h3>
        <p className="text-gray-600 leading-relaxed">
          At Hurghada Fun, our mission is to provide unforgettable experiences
          that capture the vibrant spirit of Hurghada — from its crystal-clear
          Red Sea waters and colorful coral reefs to its exciting desert
          adventures and lively local culture. We are committed to creating
          personalized tours that suit every traveler’s style, ensuring a fun,
          seamless, and truly memorable journey in one of Egypt’s top coastal
          destinations.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="mb-10">
        <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 px-4 py-2 border rounded shadow-sm bg-white hover:shadow-md transition">
            <FaMapMarkedAlt className="text-gray-500" />
            <span className="font-medium">Expertly Curated Itineraries</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border rounded shadow-sm bg-white hover:shadow-md transition">
            <FaCalendarCheck className="text-gray-500" />
            <span className="font-medium">Flexible Booking Options</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 border rounded shadow-sm bg-white hover:shadow-md transition">
            <FaUsers className="text-gray-500" />
            <span className="font-medium">Small Group Tours</span>
          </div>
        </div>
        <p className="mt-4 text-gray-600 leading-relaxed">
          With years of experience and a deep understanding of Egypt, our team
          of travel experts crafts unique itineraries that blend iconic
          landmarks with hidden gems. We offer flexible booking options to suit
          your schedule and preferences, and our small group tours ensure a more
          intimate and immersive experience.
        </p>
      </div>

      {/* Our Tours */}
      <div>
        <h3 className="text-xl font-bold mb-4">Our Tours</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            {
              title: "Historical Tours",
              desc: "Explore ancient temples and tombs",
              image: image1,
            },

            {
              title: "Desert Safaris",
              desc: "Experience the thrill of desert adventures",
              image: safari,
            },
            {
              title: "Sea Trips",
              desc: "Discover the red sea from inside and see the Coral reefs in the sea",
              image: diving,
            },
          ].map((tour, idx) => (
            <Link
            to={tour.title === "Historical Tours" ? "/luxor" : tour.title === "Desert Safaris" ? "/cairo" : "/hurghada"}
              key={idx}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">{tour.title}</h4>
                <p className="text-sm text-gray-600">{tour.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
