import React from "react";
import { logo2 } from "../../images/index";
import { facebook } from "../../images/index";
import { tiwtter } from "../../images/index";
import { instgram } from "../../images/index";
import { location } from "../../images/index";
import { phone } from "../../images/index";
import { mail } from "../../images/index";

const footer = () => {
  return (
    <div>
      <footer className="bg-[#282828] flex justify-between items-center p-6 md:p-8 text-white w-full md:px-24">
        <div className="space-y-8 md:w-[39%]">
          <div>
            <img src={logo2} alt="" />
          </div>
          <p className="text-center md:text-left">
            At Spruce Xpress Logistics, we are more than just a logistics
            company – we are your trusted partner in delivering excellence. With
            a passion for precision and a commitment to reliability, we have
            been at the forefront of the logistics industry, shaping the way
            goods move from one place to another.
          </p>
          <div className="flex space-x-5">
            <img src={instgram} alt="" />
            <img src={tiwtter} alt="" />
            <img src={facebook} alt="" />
          </div>
        </div>
        <div className="hidden md:inline space-y-5">
          <h1 className="text-xl font-bold">Quick Links</h1>
          <p>Home</p>
          <p>About Us</p>
          <p>Service</p>
          <p>Contact Us</p>
        </div>
        <div className="hidden md:inline space-y-5">
          <h1 className="text-xl font-bold">Services</h1>
          <p>Bike</p>
          <p>Truck</p>
          <p>Airplane</p>
        </div>
        <div className="hidden md:inline space-y-5">
          <h1 className="text-xl font-bold">Contact us</h1>
          <p className="flex gap-3">
            <img src={location} alt="" />
            Netisens ICT
          </p>
          <p className="flex gap-3">
            <img src={phone} alt="" />
            <span>+234-5675-5700</span>
          </p>
          <p className="flex gap-3">
            <img src={mail} alt="" />
            <span>Info@netisensict.com</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default footer;
