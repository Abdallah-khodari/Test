import React from "react";
import diving from "../../assets/Diving.webp"
import { Link } from "react-router-dom";
const activities = [
  {
    title: "Water sport",
    location: "Hurghada, Egypt",
    price: "160 €",
    duration: "1 day",
    image: diving,
    id:0,
  },
  {
    title: "Zero Hassle: Visa + SIM Card + Shuttle",
    location: "Hurghada, Egypt",
    price: "45 €",
    duration: "1 day",
    image: diving,
      id:1,
  },
  {
    title: "Neverland Show",
    location: "Hurghada, Egypt",
    price: "65 €",
    duration: "1 day",
    image: diving,  
    id:2,
  },
  {
    title: "Karting El Gouna",
    location: "Hurghada, Egypt",
    price: "25 €",
    duration: "1 day",
    image: diving,
      id:3,
  },
  {
    title: "Aquarium Hurghada",
    location: "Hurghada, Egypt",
    price: "40 €",
    duration: "1 day",
    image: diving,
      id:4,
  },
  {
    title: "Fantastic Sahara",
    location: "Hurghada, Egypt",
    price: "50 €",
    duration: "1 day",
    image: diving,
      id:5,
  },
  {
    title: "Carriage ride",
    location: "Hurghada, Egypt",
    price: "45 €",
    duration: "1 day",
    image: diving,
      id:6,
  },
  {
    title: "Horse riding",
    location: "Hurghada, Egypt",
    price: "35 €",
    duration: "1 day",
    image: diving,
      id:7,
  },
];

export default function Hurghada() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <p className="text-center my-10 font-bold text-2xl">
        Our Activities in Hurghada
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <Link to={`/activity/hurghada/${activity.id}`} key={activity.id}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-500 text-sm mb-1">
                  📍 {activity.location}
                </p>
                <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                <div className="flex justify-between text-sm text-gray-700 mt-2 pt-2 border-t">
                  <span>
                    <strong>Price:</strong> {activity.price}
                  </span>
                  <span>🕒 {activity.duration}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
