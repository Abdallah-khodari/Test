import React, { useState } from "react";

export default function RateUs() {
  const [rating, setRating] = useState(0);

  return (
    <div className="max-w-md mx-auto mt-12 p-8 border rounded-2xl shadow-xl bg-gradient-to-br from-blue-50 to-white">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        ⭐ Rate Your Experience
      </h2>

      <form className="space-y-6">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">Rating</label>
          <div className="flex gap-2 text-3xl cursor-pointer">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => setRating(star)}
                className={`transition ${
                  rating >= star ? "text-yellow-400" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Feedback
          </label>
          <textarea
            name="description"
            className="w-full p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Share your thoughts..."
            rows="4"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 shadow-md transition"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}
