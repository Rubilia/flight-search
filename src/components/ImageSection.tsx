import React from "react";
import flightsImage from "../assets/images/flights_image.svg";

function ImageSection() {
  return (
    <div className="relative mx-[10%] text-center">
      <img src={flightsImage} alt="Flights" className="w-full h-auto" />

      <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 text-[#202124] font-roboto font-normal text-5xl p-2 rounded-md">
        Flights
      </div>
    </div>
  );
}

export default ImageSection;
