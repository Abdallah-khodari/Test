import React from "react";

const Transfer = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      {/* Hero Section */}
      <div
        className="w-full h-[40vh] md:h-[50vh] bg-cover bg-center flex items-end"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), 
            url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUcKlqi-nwMIR0_r_I5kRekOzae8O9aIm1mutHLOsP5NLGPyD6OF_RzPIZzegXhFs7pgQMepjgvrF6-Ilh8g6Xms0OrHMVyh56N461AUvHBIC3CdwT2vQZnWnjn4YVwEgZ0oOxC3ye5IFnvLo5t9My6W6kye1RbtCWJryYZ_R1DhmaDCpIb2fAIxaK8PrrVNSO9amL2Nfus3xSo9btdVTJeLWG2UnAE0fUuMLh-MIhE2gTbVqDcurq0EDf7C0Wx-Z0fJ4vJ3zY2nuO")`,
        }}
      >
        <div className="p-6 md:p-12">
          <h1 className="text-white text-3xl md:text-5xl font-bold">
            Hurghada Car Transfer
          </h1>
        </div>
      </div>

      {/* Single Center Image */}
      <div className="w-full flex justify-center py-6 px-4">
        <div
          className="w-full max-w-3xl h-64 sm:h-80 md:h-[400px] bg-cover bg-center rounded-xl shadow-lg"
          style={{
            backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBE-yrtoK0qmj1WaQQXSWoggfcJl8Yote9kI849ERbda8fh6teJWHoo-qj-9WL5VKsrEQJslFlu0RC0fzeBnZNV5GuErisz-q_Cpa9CdDp-qiiagTZeOWu7EwQLliNeS5k3soXHSxYyL9CU83fG_yCaaK18WCXtnTnPK-kM9Nu8OMT9-TXeV3gpP0vEGjbZHsQk_xbzQRyOAR7a_MmyhdxEIsclU5nwajK1KLW8krHNHfYduEguG_e8pgloWdUNh1zLhSVgvzsgTtDG")`,
          }}
        ></div>
      </div>

      {/* Text Section */}
      <div className="w-full px-6 md:px-12 lg:px-20 py-6">
        <p className="text-[#121516] text-lg md:text-xl leading-relaxed text-center md:text-left">
          Explore Hurghada at your own pace with our dependable transfer
          service. Whether you're heading to the airport, your hotel, or a local
          attraction, we offer comfortable and punctual rides to suit your
          travel plans. Enjoy the convenience of door-to-door service,
          professional drivers, and 24/7 availability. Book your transfer today
          and make your journey stress-free from start to finish!
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-center py-6">
        <button
          onClick={() => window.open("https://wa.me/+2001010536102", "_blank")}
          className="cursor-pointer bg-green-600 hover:bg-green-700 transition text-white font-semibold text-lg py-3 px-8 rounded-full shadow-lg"
        >
          Reserve a Car
        </button>
      </div>
    </div>
  );
};

export default Transfer;
