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
          <h1 className="bg-[#00A651]  px-2 py-2 my-8 text-white text-xl md:text-3xl hover:bg-white hover:text-[#00A651] font-bold">
            WHY CHOOSE US
          </h1>
        </div>
        <div className="md:flex justify-around items-center md:p-6 w-full md:gap-4">
          <div className=" md:w-1/2 px-10 ">
            <img src={africanFemale} alt="" />
          </div>
          <div className=" md:w-1/2 md:space-y-3 mt-3 md:mt-auto">
            <div className="inline md:flex md:items-center md:justify-between">
              <div className="flex justify-center items-center md:inline md:w-[20%]">
                <img className="scale-50 sm:scale-90 md:scale-auto md:hidden lg:block" src={bolt} alt="" />
              </div>
              <div className="p-5 md:px-12 text-center md:text-left">
                <h1 className="text-lg sm:text-xl md:text-3xl font-bold">Reliability</h1>
                <p className="p-5 md:p-auto md:pl-0">
                  We have a proven track record of on-time deliveries and
                  consistent service. Our commitment to reliability ensures that
                  your shipments will reach their destination as schedule
                </p>
              </div>
            </div>
            <div className="inline md:flex md:items-center md:justify-between">
              <div className="flex justify-center items-center md:inline md:w-[30%]">
                <img className="scale-50 sm:scale-90 md:scale-auto md:hidden lg:block" src={payment} alt="" />
              </div>
              <div className="p-5 md:px-12 text-center md:text-left">
                <h1 className="text-lg sm:text-xl md:text-3xl font-bold">Advanced Technology</h1>
                <p className="p-5 md:p-auto md:pl-0">
                  We leverage cutting-edge logistics technology to optimize
                  routes, track shipments in real-time, and provide transparent
                  communication with customers. This approach enhances
                  efficiency and visibility throughout the shipping process.
                </p>
              </div>
            </div>
            <div className="inline md:flex md:items-center md:justify-between">
              <div className="flex justify-center items-center md:inline md:w-[20%]">
                <img className="scale-50 sm:scale-90 md:scale-auto md:hidden lg:block" src={armingCountDown} alt="" />
              </div>
              <div className="p-5 md:px-12 text-center md:text-left">
                <h1 className="text-lg sm:text-xl md:text-3xl font-bold">Customized Solutions</h1>
                <p className="p-5 md:p-auto md:pl-0">
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
