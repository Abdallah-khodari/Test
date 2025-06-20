import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import cairo from "../../assets/Pyramids.jpg"
import { Link } from "react-router-dom";
const packages = [
  {
    title: "Cairo – Overnight Package",
    location: "Cairo, Egypt",
    price: "250 €",
    duration: "1 day",
    image: cairo,
    id: 1,
  },
  {
    title: "Cairo – Plane Package",
    location: "Cairo, Egypt",
    price: "250 €",
    duration: "1 day",
    image: cairo,
    id: 2,
  },
  {
    title: "Cairo - Van Formula",
    location: "Cairo, Egypt",
    price: "85 €",
    duration: "1 day",
    image: cairo,
    id: 3,
  },
  {
    title: "Cairo – Eco Package",
    location: "Cairo, Egypt",
    price: "55 €",
    duration: "1 day",
    image: cairo,
    id: 4,
  },
];

export default function CairoPackages() {
  return (
    <div className="flex flex-wrap gap-6 justify-center py-8">
      {packages.map((pkg, idx) => (
        <Link to={`/activity/cairo/${pkg.id}`}
          key={idx}
          className="bg-white rounded-2xl shadow-md w-80 flex flex-col overflow-hidden"
        >
          <img
            src={pkg.image}
            alt={pkg.title}
            className="h-56 w-full object-cover"
          />
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center text-gray-500 text-sm mb-2 gap-1">
              <FaMapMarkerAlt className="inline-block mr-1" />
              {pkg.location}
            </div>
            <h3 className="font-bold text-lg mb-4">{pkg.title}</h3>
            <hr className="my-2" />
            <div className="flex justify-between items-center mt-auto">
              <span className="font-bold text-gray-800">
                Price: <span className="text-blue-900">{pkg.price}</span>
              </span>
              <span className="flex items-center text-gray-500 text-sm">
                <FaClock className="mr-1" /> {pkg.duration}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
