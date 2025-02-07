import React, { useEffect, useState } from "react";
import { useApi } from "../Constant/Store";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { data } = useApi();
  return (
    <>
      <div className="w-screen h-auto relative">
        <div className="nav flex justify-between w-full py-6 px-6 md:px-10 lg:px-14 box-border">
          <div className="flex items-center gap-2">
            <i className="ri-verified-badge-fill text-3xl md:text-4xl"></i>
            <h1 className="font-bold text-2xl md:text-3xl overflow-hidden">
              Company Name
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8 text-md font-medium">
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Contact Us</a>
          </div>

          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 gap-4 md:hidden z-50">
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Contact Us</a>
          </div>
        )}

        <div className="center w-full h-auto flex flex-col-reverse lg:flex-row px-6 md:px-10 lg:px-14  md:py-12">
          <div className="w-full lg:w-[40%] text-center lg:text-left">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold font-[china] leading-tight md:mt-10">
              {data?.Hero?.Title}
            </h1>
            <p className="text-md md:text-xl mt-5 md:mt-5">
              {data?.Hero?.Description}
            </p>
            <button className="bg-black text-white rounded-lg font-medium px-5 py-3 mt-4  md:mt-10">
              Contact Us
            </button>
          </div>

          <div className="w-full lg:w-[60%] flex justify-center lg:justify-end mt-8 lg:mt-0">
            <img
              className="w-[70%] md:w-[80%] lg:w-[80%] h-auto object-cover"
              src={data?.Hero?.Img}
            />
          </div>
        </div>

        <div className="bottom flex flex-wrap justify-center md:justify-between items-center px-6 md:px-10 lg:px-14 py-6 gap-4 md:gap-8">
          <img
            className="h-[40px] md:h-[80px]"
            src="https://t4.ftcdn.net/jpg/07/61/26/97/360_F_761269715_R2SfifMayIgqQB43m18zDjeMrHez6PNB.jpg"
            alt=""
          />
          <img
            className="h-[40px] md:h-[80px]"
            src="https://thumbs.dreamstime.com/b/fast-delivery-icon-timer-stopwatch-line-shipping-service-sign-speed-clock-symbol-urgency-deadline-time-management-competition-166208063.jpg"
            alt=""
          />
          <img
            className="h-[40px] md:h-[80px]"
            src="https://static.vecteezy.com/system/resources/thumbnails/010/594/616/small/experience-qualification-team-line-icon-satisfaction-user-customer-service-review-linear-pictogram-good-quality-happy-client-high-quality-outline-icon-editable-stroke-illustration-vector.jpg"
            alt=""
          />
          <img
            className="h-[40px] md:h-[80px]"
            src="https://banner2.cleanpng.com/20180816/kqy/75ce13444745ff49ff257a1bf43aa521.webp"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
