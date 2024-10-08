import React from "react";
import OurService from "../homepage-components/ourService";
import Footer from "../layout/footer"; // Adjusted path if necessary
// import { Link } from "react-router-dom"; // Remove if not used
import { heroBackground } from "../../images/index";
import NavBar from "../layout/nav";

const Welcome = () => {
  return (
    <div>
      <NavBar />
      <section>
        <header
          style={{ backgroundImage: `url(${heroBackground})` }}
          className="bg-[#00A651] h-[100vh] w-full flex justify-center items-center text-center"
        >
          <div className="md:p-20">
            <div className="flex justify-center items-center">
              <div className="text-[#00A651] bg-white text-xl md:text-2xl font-bold rounded-xl py-5 w-[85%] md:w-[50%]">
                Hi, John Austin! 👋
              </div>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white py-9">
              We Are Your Logistics Partner For Seamless Delivery.
            </h1>
            <p className="text-white text-md md:text-2xl">
              We provide services for all your nationwide shipping needs.
            </p>
          </div>
        </header>
        <OurService /> {/* Correctly used the component */}
        <Footer />
      </section>
    </div>
  );
};

export default Welcome; // Capitalized the component name
