import React from "react";

export default function RateUs() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4 text-center">Rate Us</h2>
      <form  className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Rating (1-5)</label>
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            className="w-full p-2 border rounded"
            placeholder="Rate us"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            className="w-full p-2 border rounded"
            placeholder="Leave a comment"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Send Rating
        </button>
      </form>
    </div>
  );
}
