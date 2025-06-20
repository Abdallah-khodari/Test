import React from "react";

const Transfer = () => {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-[218px]"
                  style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBUcKlqi-nwMIR0_r_I5kRekOzae8O9aIm1mutHLOsP5NLGPyD6OF_RzPIZzegXhFs7pgQMepjgvrF6-Ilh8g6Xms0OrHMVyh56N461AUvHBIC3CdwT2vQZnWnjn4YVwEgZ0oOxC3ye5IFnvLo5t9My6W6kye1RbtCWJryYZ_R1DhmaDCpIb2fAIxaK8PrrVNSO9amL2Nfus3xSo9btdVTJeLWG2UnAE0fUuMLh-MIhE2gTbVqDcurq0EDf7C0Wx-Z0fJ4vJ3zY2nuO")`,
                  }}
                  
                >
                  <div className="flex p-4">
                    <p className="text-white tracking-light text-[28px] font-bold leading-tight">
                      Hurghada car Transfer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBE-yrtoK0qmj1WaQQXSWoggfcJl8Yote9kI849ERbda8fh6teJWHoo-qj-9WL5VKsrEQJslFlu0RC0fzeBnZNV5GuErisz-q_Cpa9CdDp-qiiagTZeOWu7EwQLliNeS5k3soXHSxYyL9CU83fG_yCaaK18WCXtnTnPK-kM9Nu8OMT9-TXeV3gpP0vEGjbZHsQk_xbzQRyOAR7a_MmyhdxEIsclU5nwajK1KLW8krHNHfYduEguG_e8pgloWdUNh1zLhSVgvzsgTtDG")`,
                  }}
                ></div>
              </div>
            </div>

            <p className="text-[#121516] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Explore Hurghada at your own pace with our dependable transfer
              service. Whether you're heading to the airport, your hotel, or a
              local attraction, we offer comfortable and punctual rides to suit
              your travel plans. Enjoy the convenience of door-to-door service,
              professional drivers, and 24/7 availability. Book your transfer
              today and make your journey stress-free from start to finish!
            </p>

            <div className="flex px-4 py-3 justify-end">
              <button
                onClick={() =>
                  window.open("https://wa.me/+2001010536102", "_blank")
                }
                className=" cursor-pointer bg-green-600 hover:bg-green-700 transition text-white font-semibold text-lg py-3 px-6 rounded-full shadow-md"
              >
                Reserve a Car
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
