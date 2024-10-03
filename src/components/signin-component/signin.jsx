import React from "react";
import { heroBackground } from "../../images/index";
// import { google } from "../../images/index";
import { signfacebook } from "../../images/index";
import { signgoogle } from "../../images/index";
import { Link } from "react-router-dom";
import { appleicon } from "../../images/index";

const signin = () => {
  return (
    <div>
      <section
        style={{ backgroundImage: `url(${heroBackground})` }}
        className="relative flex object-cover justify-center items-center h-[100vh] w-full bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/60"></div>{" "}
        <div className="relative flex w-full h-full">
          <div className="bg-[#00A651]/70 text-[#FFFFFF] w-1/2 h-full flex justify-center items-center">
            <div className="pl-28 pr-14">
              <h1 className="text-4xl font-bold pb-5">
                Your Logistics Partner For Seamless Delivery.
              </h1>
              <p className="text-2xl">
                We provide services for all your nationwide shipping needs.
              </p>
            </div>
          </div>
          <div className="bg-[#D9D9D9] w-1/2 h-full flex justify-center items-center">
            <div className="bg-white rounded-xl py-10 px-10">
              <h1 className="text-3xl font-bold text-[#00A651] py-4">
                Create an account
              </h1>
              <p className="text-xl pb-7">
                <b>Provide your details</b>
              </p>
              <form>
                <label htmlFor="name">
                  <b>Your name</b>
                </label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="mail"
                  className="w-full border text-lg p-2"
                  placeholder="First Name"
                />
                <br />
                <br />
                <label htmlFor="mail">
                  <b>Email</b>
                </label>
                <br />
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  className="w-full border text-lg p-2"
                  placeholder="you@email.com"
                />
                <br />
                <br />
                <label htmlFor="password">
                  <b>password</b>
                </label>
                <br />
                <input
                  type="text"
                  className="w-full border text-lg p-2"
                  id="password"
                  placeholder="By.Y0u02"
                />
                <br />
                <div className="flex justify-between text-md py-3">
                  {/* <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Remember me</label>
                  </div>
                  <div>
                    <p>Forgot Password?</p>
                  </div> */}
                  <p>
                    By signing up I agree to the{" "}
                    <i className="text-[#00A651]">terms & conditions</i> and{" "}
                    <i className="text-[#00A651]">privacy policy</i>
                  </p>
                </div>
                <button className="w-full items-center bg-[#00A651] text-white rounded-xl py-3 text-lg font-bold">
                  Create An Account
                </button>
              </form>
              <div className="flex justify-between p-5">
                <img src={signgoogle} alt="" />
                <img src={signfacebook} alt="" />
                <img src={appleicon} alt="" />
              </div>
              <div className="flex justify-center">
                <p>Already a Member?</p>
                <Link to={"/login"} className="text-[#00A651]">
                  Login in.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default signin;
