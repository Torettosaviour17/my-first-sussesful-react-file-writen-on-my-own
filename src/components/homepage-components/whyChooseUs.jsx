import React from "react";
import { bolt } from "../../images/index";
import { africanFemale } from "../../images/index";
import { payment } from "../../images/index";
import { armingCountDown } from "../../images/index";

const whyChooseUs = () => {
  return (
    <div>
      <section>
        <div className="flex justify-center items-center">
          <h1 className="bg-[#00A651] px-2 py-2 my-8 text-white text-3xl font-bold hover:bg-white hover:text-[#00A651] ">
            WHY CHOOSE US
          </h1>
        </div>
        <div className="md:flex justify-around items-center md:p-6 w-full md:gap-7">
          <div className=" md:w-1/2">
            <img src={africanFemale} alt="" />
          </div>
          <div className=" md:w-1/2 md:space-y-8 mt-3 md:mt-auto">
            <div className="inline md:flex md:items-center md:justify-between">
              <div className="flex justify-center items-center md:inline md:w-[20%]">
                <img src={bolt} alt="" />
              </div>
              <div className="p-5 md:px-24 text-center md:text-left">
                <h1 className="text-3xl font-bold">Reliability</h1>
                <p>
                  We have a proven track record of on-time deliveries and
                  consistent service. Our commitment to reliability ensures that
                  your shipments will reach their destination as schedule
                </p>
              </div>
            </div>
            <div className="inline md:flex md:items-center md:justify-between">
              <div className="flex justify-center items-center md:inline md:w-[30%]">
                <img src={payment} alt="" />
              </div>
              <div className="p-5 md:px-24 text-center md:text-left">
                <h1 className="text-3xl font-bold">Advanced Technology</h1>
                <p>
                  We leverage cutting-edge logistics technology to optimize
                  routes, track shipments in real-time, and provide transparent
                  communication with customers. This approach enhances
                  efficiency and visibility throughout the shipping process.
                </p>
              </div>
            </div>
            <div className="inline md:flex md:items-center md:justify-between">
              <div className="flex justify-center items-center md:inline md:w-[20%]">
                <img src={armingCountDown} alt="" />
              </div>
              <div className="p-5 md:px-24 text-center md:text-left">
                <h1 className="text-3xl font-bold">Customized Solutions</h1>
                <p>
                  We understand that different businesses have unique logistics
                  needs. We offer tailored solutions to meet your specific
                  requirements nationwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default whyChooseUs;
