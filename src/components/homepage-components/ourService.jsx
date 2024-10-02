import React from "react";
import { bike } from "../../images/index";
import { airplane } from "../../images/index";
import { truck } from "../../images/index";

const ourService = () => {
  return (
    <div>
      <section>
        <div className="flex justify-center items-center">
          <h1 className="bg-[#00A651] px-2 hover:bg-white hover:text-[#00A651] py-2 my-8 text-white text-4xl font-bold ">
            our services
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-10 md:px-28">
          <div className="rounded-xl border">
            <div className="flex items-center justify-center py-10">
              <img src={bike} alt="" />
            </div>
            <h1 className="text-[#00A651] text-4xl font-bold text-center">
              BIKE
            </h1>
            <p className="text-center p-8">
              Our Bike Delivery Service is perfect for quick and eco-friendly
              local deliveries. Our skilled cyclists navigate congested city
              streets to ensure your packages and documents reach their
              destination with speed and efficiency.
            </p>
          </div>
          <div className="rounded-xl border">
            <div className="flex items-center justify-center py-10">
              <img src={truck} alt="" />
            </div>
            <h1 className="text-[#00A651] text-4xl font-bold text-center">
              Truck
            </h1>
            <p className="text-center p-8">
              With our Truck Delivery Service, we provide versatile freight
              transport solutions for goods of all sizes. Our extensive fleet
              and inter-state coverage ensure your cargo arrives safely and on
              time.
            </p>
          </div>
          <div className="rounded-xl border">
            <div className="flex items-center justify-center py-10">
              <img src={airplane} alt="" />
            </div>
            <h1 className="text-[#00A651] text-4xl font-bold text-center">
              airplane
            </h1>
            <p className="text-center p-8">
              With our Aircraft Delivery Service, we transport aircraft to
              airports nationwide. Our team of aviation experts ensures secure
              and efficient delivery while adhering to strict safety standards.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ourService;
