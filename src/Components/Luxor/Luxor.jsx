import React from "react";

import luxor from "../../assets/luxor.jpg"
import { Link } from "react-router-dom";

const luxorActivities = [
  {
    id: 1,
    title: "Luxor – Overnight Formula",
    location: "Luxor, Egypt",
    price: "280 €",
    duration: "1 day",
    image: luxor,
  },
  {
    id: 2,
    title: "Luxor – VAN Formula",
    location: "Luxor, Egypt",
    price: "85 €",
    duration: "1 day",
    image: luxor,
  },
  {
    id: 3,
    title: "Luxor – Eco Formula",
    location: "Luxor, Egypt",
    price: "55 €",
    duration: "1 day",
    image: luxor,
  },
];

export default function Luxor() {
  return (
    <div className="p-8 bg-white">
      <p className="text-center my-10 font-bold text-2xl">
        Our Activities in Luxor
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {luxorActivities.map((activity) => (
          <Link to={`/activity/luxor/${activity.id}`}
            key={activity.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer"
          >
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
          </Link>
        ))}
      </div>
    </div>
  );
}
