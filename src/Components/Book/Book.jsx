import React from 'react'

export default function Book() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-col justify-between items-center ">
        <div className="text-2xl mb-10 text-center font-bold ms-2 text-black ">
          Discover the magic of Egypt !
        </div>
        <div className="maincolor mb-20  text-2xl font-bold">
          From history to horizon — live the experience!
        </div>
        <div>
          <button
            onClick={() => {
              window.open("https://wa.me/+2001010536102", "_blank");
            }}
            className="w-full cursor-pointer mb-10 bg-green-400 p-4 rounded-full font-bold text-2xl  "
          >
            Book An Activity
          </button>
        </div>
      </div>
    </div>
  );
}
