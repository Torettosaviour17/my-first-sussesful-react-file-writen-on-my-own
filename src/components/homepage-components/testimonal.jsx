import React from "react";
import { sarah } from "../../images/index";
import { greenhy } from "../../images/index";
import { star } from "../../images/index";
import { micheal } from "../../images/index";
import { whitehy } from "../../images/index";

const testimonal = () => {
  return (
    <div>
      <section>
        <div className="flex justify-center items-center">
          <h1 className="bg-[#00A651] px-2 py-2 hover:bg-white hover:text-[#00A651] my-8 text-white text-4xl font-bold ">
            Testimonials
          </h1>
        </div>
        <div className="lg:flex  md:px-56 md:pb-44">
          <div className="px-10 py-5 border">
            <div className="inline md:flex justify-center items-center space-x-5">
              <img src={sarah} alt="" />
              <span>
                <h5 className="font-bold">Sarah J.</h5>
                <p>Small Business Owner</p>
              </span>
              <img className="hidden md:inline" src={greenhy} alt="" />
            </div>
            <p>
              <i>
                I run a small online boutique. And Spruce Xpress has been a game
                changer for my business. Their reliable delivery services
                ensures that my products reach my customers on time, everytime.
                I can’t thank them enough for their excellent service.
              </i>
            </p>
            <div>
              <img src={star} alt="" />
            </div>
          </div>
          <div className="bg-[#00A651] px-10 py-5 mb-6 md:mb-auto">
            <div className="inline md:flex justify-center items-center space-x-5">
              <img src={micheal} alt="" />
              <span>
                <h5 className="font-bold">Michael H.</h5>
                <p>Same-Day Delivery Enthusiast</p>
              </span>
              <img className="hidden md:inline" src={whitehy} alt="" />
            </div>
            <p>
              <i>
              When I need something fast, Spruce Xpress is my go to. Their same day delivery option is a life saver. I have used them for everything from forgotten anniversary gifts, to last minute party supplies. They’ve never let me down.
              </i>
            </p>
            <div>
              <img src={star} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default testimonal;
