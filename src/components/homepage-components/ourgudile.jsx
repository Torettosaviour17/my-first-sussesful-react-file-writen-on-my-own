import React from "react";
import { vision } from "../../images/index";
import { coreValue } from "../../images/index";
import { mission } from "../../images/index";

const ourgudile = () => {
  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 p-10 md:px-28">
        <div className="rounded-xl border">
          <div className="flex items-center justify-center py-10">
            <img className="scale-50 sm:scale-75 md:scale-95" src={mission} alt="" />
          </div>
          <h1 className="text-[#00A651] text-2xl md:text-3xl font-bold text-center">
            Mission
          </h1>
          <p className="text-center p-6">
            Revolutionize the pickup and delivery service industry by providing
            unparalleled convenience, reliability, and sustainability. their
            goods.
          </p>
        </div>
        <div className="rounded-xl border">
          <div className="flex items-center justify-center py-10">
            <img className="scale-50 sm:scale-75 md:scale-95" src={vision} alt="" />
          </div>
          <h1 className="text-[#00A651] text-2xl md:text-3xl font-bold text-center">
            Vision
          </h1>
          <p className="text-center p-6">
            We envision a future where the act of sending and receiving items is
            a frictionless and eco-conscious experience.
          </p>
        </div>
        <div className="rounded-xl border">
          <div className="flex items-center justify-center py-10">
            <img className="scale-50 sm:scale-75 md:scale-95" src={coreValue} alt="" />
          </div>
          <h1 className="text-[#00A651] text-2xl md:text-3xl font-bold text-center">
            CORE VALUES
          </h1>
          <p className="text-center p-6">Innovative – Responsible – Reliable</p>
        </div>
      </section>
    </div>
  );
};

export default ourgudile;
