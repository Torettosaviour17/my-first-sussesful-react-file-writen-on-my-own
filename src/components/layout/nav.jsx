import React from "react";
import { logo } from "../../images/index.js";
import { Link } from "react-router-dom";

function navBar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4">
      <div>
        <img src={logo} alt="" className="scale-75 sm:scale-95" />
      </div>
      <div>
        <ul className="hidden md:flex justify-between gap-6">
          <li className="text-xl hover:scale-90 hover:font-bold hover:text-green-900">
            Home
          </li>
          <li className="text-xl hover:scale-90 hover:font-bold hover:text-green-900">
            About
          </li>
          <li className="text-xl hover:scale-90 hover:font-bold hover:text-green-900">
            Services
          </li>
          <li className="text-xl hover:scale-90 hover:font-bold hover:text-green-900">
            Contact Us
          </li>
        </ul>
      </div>
      <div className="space-x-5 hidden xl:inline">
        <Link to={"/login"} className="bg-[#00A651] hover:text-[#00A651] px-10 py-4 rounded-xl text-lg text-white hover:bg-white border">
          Login
        </Link>
        <Link to={"/signin"} className="px-14 py-4 rounded-xl text-lg border hover:bg-[#00A651] hover:text-white">
          Create Account
        </Link>
        {/* <Link
          to={"/product"}
          className="block text-white py-2 md:py-0 md:px-2 hover:text-gray-400"
        >
          Product
        </Link> */}
      </div>
    </nav>
  );
}

export default navBar;
