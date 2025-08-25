import React from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "flowbite-react";
import pyramids from "../../assets/Pyramids.jpg";
import luxour from "../../assets/luxor.jpg";
const activities = [
  {
    title: "Cairo – Overnight Package",
    location: "Cairo, Egypt",
    price: "250 €",
    duration: "1 day",
    images: [pyramids, luxour, pyramids], // كرر الصورة هنا
    id: 1,
    details: {
      duration: "1 Day",
      inclusions: "Guided tours, transportation within the Amazon",
      price: "$299 per person",
      childPrice: "$199 per child (ages 5–12)",
      availability: "Limited spots available",
    },
    schedule: {
      title: "Full-Day Amazon Exploration",
      desc: "Explore the Amazon River by boat, visit a local community, and experience the rainforest from above with a canopy walk.",
    },
  },
  {
    title: "Cairo – Plane Package",
    location: "Cairo, Egypt",
    price: "250 €",
    duration: "1 day",
    images: [pyramids, luxour, pyramids],
    id: 2,
    details: {
      duration: "1 Day",
      inclusions: "Guided tours, transportation within the Amazon",
      price: "$299 per person",
      childPrice: "$199 per child (ages 5–12)",
      availability: "Limited spots available",
    },
    schedule: {
      title: "Full-Day Amazon Exploration",
      desc: "Explore the Amazon River by boat, visit a local community, and experience the rainforest from above with a canopy walk.",
    },
  },
  {
    title: "Cairo - Van Formula",
    location: "Cairo, Egypt",
    price: "85 €",
    duration: "1 day",
    images: [luxour, luxour, luxour],
    id: 3,
    details: {
      duration: "1 Day",
      inclusions: "Guided tours, transportation within the Amazon",
      price: "$299 per person",
      childPrice: "$199 per child (ages 5–12)",
      availability: "Limited spots available",
    },
    schedule: {
      title: "Full-Day Amazon Exploration",
      desc: "Explore the Amazon River by boat, visit a local community, and experience the rainforest from above with a canopy walk.",
    },
  },
  {
    title: "Cairo – Eco Package",
    location: "Cairo, Egypt",
    price: "55 €",
    duration: "1 day",
    images: [pyramids, luxour, pyramids],
    id: 4,
    details: {
      duration: "1 Day",
      inclusions: "Guided tours, transportation within the Amazon",
      price: "$299 per person",
      childPrice: "$199 per child (ages 5–12)",
      availability: "Limited spots available",
    },
    schedule: {
      title: "Full-Day Amazon Exploration",
      desc: "Explore the Amazon River by boat, visit a local community, and experience the rainforest from above with a canopy walk.",
    },
  },
];

export default function LuxorActivityDetails() {
  const { id } = useParams();
  const activity = activities[id - 1];

  if (!activity)
    return <p className="text-center mt-10 text-xl">Activity not found</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <Carousel className="w-full h-80">
          {activity.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={activity.title}
              className="w-full h-80 object-cover"
            />
          ))}
        </Carousel>
      </div>

      <h1 className="text-4xl font-extrabold text-gray-800 mt-8">
        {activity.title}
      </h1>

      {/* الوصف */}
      <p className="text-gray-600 mt-4 text-lg leading-relaxed">
        {activity.description ||
          "Enjoy this once-in-a-lifetime experience with amazing guides and activities!"}
      </p>

      {/* التفاصيل */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Trip Details
        </h2>
        <div className="bg-white border rounded-xl shadow-sm divide-y">
          <DetailRow label="Duration" value={activity.details.duration} />
          <DetailRow label="Inclusions" value={activity.details.inclusions} />
          <DetailRow label="Price" value={activity.price} />
          <DetailRow label="Child Price" value={activity.details.childPrice} />
          <DetailRow
            label="Availability"
            value={activity.details.availability}
          />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Program Description
        </h2>
        <ul className="list-disc ml-6 text-gray-700 text-base">
          <li className="mb-2">
            <span className="font-medium">{activity.schedule.title}:</span>{" "}
            <span className="text-gray-600">{activity.schedule.desc}</span>
          </li>
        </ul>
      </div>

      {/* زر الحجز */}
      <div className="mt-12 text-center">
        <button
          onClick={() => window.open("https://wa.me/+2001010536102", "_blank")}
          className=" cursor-pointer bg-green-600 hover:bg-green-700 transition text-white font-semibold text-lg py-3 px-6 rounded-full shadow-md"
        >
          Reserve Your Adventure
        </button>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="flex justify-between px-6 py-4 text-gray-700 text-sm sm:text-base">
      <span className="font-medium">{label}</span>
      <span className="text-right">{value}</span>
    </div>
  );
}
