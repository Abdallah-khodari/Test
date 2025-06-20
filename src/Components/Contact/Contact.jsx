import React from "react";
import contact from "../../assets/contact.jpg"
export default function Contact() {
  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
      

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <p className="text-[#161412] tracking-light text-[32px] font-bold leading-tight">
                  Contact Us
                </p>
                <p className="text-[#81736a] text-sm font-normal leading-normal">
                  We're here to help you plan your dream trip to Egypt. Reach
                  out with any questions or inquiries.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex w-full grow bg-white @container p-4">
              <div className="w-full gap-1 overflow-hidden bg-white @[480px]:gap-2 aspect-[3/2] rounded-xl flex">
                <div
                  className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                  style={{
                    backgroundImage:
                      `url(${contact})`,
                  }}
                ></div>
              </div>
            </div>

            {/* Contact Information */}
            <h2 className="text-[#161412] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
              Our Contact Information
            </h2>
            <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e3e0dd] py-5">
                <p className="text-[#81736a] text-sm font-normal leading-normal">
                  Email
                </p>
                <p className="text-[#161412] text-sm font-normal leading-normal">
                  info@wanderlustadventures.com
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e3e0dd] py-5">
                <p className="text-[#81736a] text-sm font-normal leading-normal">
                  Phone
                </p>
                <p className="text-[#161412] text-sm font-normal leading-normal">
                  +20 123 456 7890
                </p>
              </div>
              <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#e3e0dd] py-5">
                <p className="text-[#81736a] text-sm font-normal leading-normal">
                  Address
                </p>
                <p className="text-[#161412] text-sm font-normal leading-normal">
                  123 Nile Street, Cairo, Egypt
                </p>
              </div>
            </div>

            {/* Second Image Instead of Map */}
            <div className="flex px-4 py-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl object-cover"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA-dmWNtUSyKOD3YBxcfx_esrwGp97hSpPZSJ0x3-tyL-Hc-4TUwktl4v9sWmLWoEChbqGUdefOvxdhUNPswT8aFoJuVhF1YhoYUGLrqZqjMmNxqsv7_udEroMMtnGgR8SZqihBnpFIn71kbN4Hmp60yaGmNwq5kvAbOEHVRMvcHLFxLsCNVmZAK0MHRrQuqIEeKGcEuSYsNTAbmwV_RHoh_arTvdfNGLEFqLqW4fRwb9eI4Esywvqgw1kIelYvgYGTW8q2sB_fv5lR")',
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
