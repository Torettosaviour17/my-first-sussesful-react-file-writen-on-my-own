import React from "react";
import { heroBackground } from "../../images";
import { signgoogle, signfacebook, appleicon } from "../../images";
import { Link } from "react-router-dom";

const signin = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${heroBackground})` }}
        className="bg-background1  w-full flex flex-row h-screen"
      >
        <div className="w-1/2 h-[100%] hidden   opacity-80 md:flex items-center justify-center bg-[green] text-white">
          {/* Adjusted opacity */}
          <div className="pl-28 pr-14">
            <h1 className="text-[20px] leading-[40px] lg:text-[40px] font-bold pb-5">
              Your Logistics Partner For Seamless Delivery.
            </h1>
            <p className="text-2xl">
              We provide services for all your nationwide shipping needs.
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center md:w-1/2 h-[100%] bg-[#D9D9D9]">
          <div className="bg-white rounded-xl flex flex-col py-5 items-center justify-center ">
            <div className="space-y-3 w-[90%] h-[90%]">
              <h1 className="font-bold text-[25px] text-[#00A651]">
                Create an account
              </h1>
              <p className="font-normal text-[20px] text-[#282828]">
                Provide your details.
              </p>
              <div className="">
                <h1 className="font-semibold text-[18px] text-[#282828]">
                  Your name
                </h1>
                <div className=" rounded-[5px] border-[#353535] w-[100%] h-[2.8rem]">
                  <input
                    className="w-full border text-sm lg:text-lg p-2"
                    type="text"
                    placeholder="First Last"
                  />
                </div>
              </div>
              <div className="">
                <h1 className="font-semibold text-[18px] text-[#282828]">
                  Email
                </h1>
                <div className=" rounded-[5px] border-[#353535] w-[100%] h-[2.8rem] ">
                  <input
                    className="w-full border text-sm lg:text-lg p-2"
                    type="text"
                    placeholder="you@email.com"
                  />
                </div>
              </div>
              <div className="">
                <h1 className="font-semibold text-[18px] text-[#282828]">
                  Password
                </h1>
                <div className=" border-[#353535] w-[100%] h-[2.8rem]">
                  <input
                    className="w-full border text-sm lg:text-lg p-2"
                    type="text"
                    placeholder="By.Y0u02"
                  />
                </div>
              </div>
              <p className="text-[#606060]">
                By signing up I agree to the{" "}
                <span className="font-normal text-[#00A651]">
                  terms & conditions
                </span>{" "}
                and{" "}
                <span className="font-normal text-[#00A651]">
                  privacy policy
                </span>
              </p>
              <div className=" w-full flex justify-center h-3rem">
                <button className="h-[3rem] w-full rounded-lg bg-[#00A651] text-white">
                  Create An Account
                </button>
              </div>
              <div className="flex items-center justify-center">
                <div className="border-t border-gray-300 flex-grow"></div>
                <span className="mx-4 text-gray-500">or</span>
                <div className="border-t border-gray-300 flex-grow"></div>
              </div>
              <div className="h-16 w-full flex items-center flex-row justify-center gap-3">
                <div className=" w-[25%] flex items-center justify-center border-2">
                  <img src={signgoogle} alt="" />
                </div>
                <div className="h-10 w-[25%]   flex items-center justify-center ">
                  <img className="" src={signfacebook} alt="" />
                </div>
                <div className="h-10 w-[25%]   flex items-center justify-center ">
                  <img src={appleicon} alt="" />
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <p>Already a Member?</p>
              <Link to={"/login"} className="text-[#00A651]">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signin;
