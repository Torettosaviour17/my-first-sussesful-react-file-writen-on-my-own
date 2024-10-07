// import React, { useState } from "react";
// import { logo } from "../../images/index.js";
// import { Link } from "react-router-dom";


// function NavBar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="flex justify-between items-unset  md:items-center px-8 py-4 relative">
//       <div>
//         <img src={logo} alt="Logo" className="scale-75 sm:scale-95" />
//       </div>
//       {/* Desktop Navigation */}
//       <div>
//         <ul className="hidden md:flex justify-between gap-6">
//           <li className="text-xl hover:scale-90 hover:font-bold hover:text-green-900">
//             <Link to={"/"}>Home</Link>
//           </li>
//           <li className="text-xl hover:scale-90 hover:font-bold hover:text-green-900">
//             <Link to={"/AboutUs"}>About</Link>
//           </li>
//           <li className="text-xl hover:scale-90 hover:font-bold hover:text-green-900">
//             <Link to={"/OurService"}>Services</Link>
//           </li>
//           <li className="text-xl hover:scale-90 hover:font-bold hover:text-green-900">
//             Contact Us
//           </li>
//         </ul>
//       </div>
//       {/* Desktop Login/Sign In Buttons */}
//       <div className="space-x-5 hidden lg:inline">
//         <Link
//           to={"/login"}
//           className="bg-[#00A651] hover:text-[#00A651] px-10 py-4 rounded-xl text-lg text-white hover:bg-white border"
//         >
//           Login
//         </Link>
//         <Link
//           to={"/signin"}
//           className="px-14 py-4 rounded-xl text-lg border hover:bg-[#00A651] hover:text-white"
//         >
//           Create Account
//         </Link>
//       </div>
//       {/* Hamburger Menu Button */}
//       <button
//         id="menu-btn"
//         className={`block md:hidden focus:outline-none ${isOpen ? "open" : ""}`}
//         onClick={toggleMenu}
//       >
//         <div className="w-6 h-6 flex flex-col justify-between items-center">
//           <span
//             className={`block w-full h-[3px] bg-black transition-transform duration-300 ${
//               isOpen ? "transform rotate-45 translate-y-[9px]" : ""
//             }`}
//           ></span>
//           <span
//             className={`block w-full h-[3px] bg-black transition-opacity duration-300 ${
//               isOpen ? "opacity-0" : ""
//             }`}
//           ></span>
//           <span
//             className={`block w-full h-[3px] bg-black transition-transform duration-300 ${
//               isOpen ? "transform -rotate-45 -translate-y-[9px]" : ""
//             }`}
//           ></span>
//         </div>
//       </button>
//       {/* Mobile Navigation */}
//       <div
//         id="menu"
//         className={`${
//           isOpen ? "flex" : "hidden"
//         } flex-col items-center py-8 mt-10 space-y-6 font-bold bg-white w-full mx-6 drop-shadow-md md:hidden`}
//       >
//         <Link
//           to="/"
//           className="hover:text-[#4BA586] text-[#8E8E8E] hover:scale-y-125 hover:pb-3"
//         >
//           Home
//         </Link>
//         <Link
//           to="/AboutUs"
//           className="hover:text-[#4BA586] text-[#8E8E8E] hover:scale-y-125 hover:pb-3"
//         >
//           About
//         </Link>
//         <Link
//           to="/OurService"
//           className="hover:text-[#4BA586] text-[#8E8E8E] hover:scale-y-125 hover:pb-3"
//         >
//           Services
//         </Link>
//         <Link
//           to="/contact"
//           className="hover:text-[#4BA586] text-[#8E8E8E] hover:scale-y-125 hover:pb-3"
//         >
//           Contact Us
//         </Link>
//         <Link
//           to="/login"
//           className="hover:text-[#4BA586] text-[#8E8E8E] hover:scale-y-125 hover:pb-3"
//         >
//           Login
//         </Link>
//         <Link
//           to="/signin"
//           className="hover:text-[#4BA586] text-[#8E8E8E] hover:scale-y-125 hover:pb-3"
//         >
//           Create Account
//         </Link>
//       </div>
//     </nav>
//   );
// }



import React, { useState } from "react";
import { logo } from "../../images/index.js";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 relative">
      <div>
        <img src={logo} alt="Logo" className="scale-75 sm:scale-95" />
      </div>
      {/* Desktop Navigation */}
      <div>
        <ul className="hidden md:flex justify-between gap-6">
          <li className="text-xl hover:scale-90 hover:font-bold hover:text-green-900">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-xl hover:scale-90 hover:font-bold hover:text-green-900">
            <Link to={"/AboutUs"}>About</Link>
          </li>
          <li className="text-xl hover:scale-90 hover:font-bold hover:text-green-900">
            <Link to={"/OurService"}>Services</Link>
          </li>
          <li className="text-xl hover:scale-90 hover:font-bold hover:text-green-900">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
      {/* Desktop Login/Sign In Buttons */}
      <div className="space-x-5 hidden lg:inline">
        <Link
          to={"/login"}
          className="bg-[#00A651] hover:text-[#00A651] px-10 py-4 rounded-xl text-lg text-white hover:bg-white border"
        >
          Login
        </Link>
        <Link
          to={"/signin"}
          className="px-14 py-4 rounded-xl text-lg border hover:bg-[#00A651] hover:text-white"
        >
          Create Account
        </Link>
      </div>
      {/* Hamburger Menu Button */}
      <button
        id="menu-btn"
        className="block md:hidden focus:outline-none z-50"
        onClick={toggleMenu}
      >
        <div className={`w-6 h-6 flex flex-col items-center justify-center`}>
          <span
            className={`block w-6 h-[3px] bg-black transition-transform duration-300 ${
              isOpen ? "transform rotate-45 translate-y-[3px]" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "mt-[3px]"
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-black transition-transform duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-[3px]" : "mt-[3px]"
            }`}
          ></span>
        </div>
      </button>
      {/* Mobile Navigation Overlay */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed inset-0 bg-white flex-col md:hidden items-center justify-center space-y-6 font-bold z-40`}
      >
        {/* Close Button */}
        {/* <button
          className="absolute top-5 right-5 text-3xl font-bold"
          onClick={toggleMenu}
        >
          &times;
        </button> */}
        <Link
          to="/"
          className="hover:text-[#4BA586] text-[#8E8E8E] text-lg"
        >
          Home
        </Link>
        <Link
          to="/property"
          className="hover:text-[#4BA586] text-[#8E8E8E] text-lg"
        >
          Property
        </Link>
        <Link
          to="/AboutUs"
          className="hover:text-[#4BA586] text-[#8E8E8E] text-lg"
        >
          About
        </Link>
        <Link
          to="/OurService"
          className="hover:text-[#4BA586] text-[#8E8E8E] text-lg"
        >
          Service
        </Link>
        <Link
          to="/contact"
          className="hover:text-[#4BA586] text-[#8E8E8E] text-lg"
        >
          Contact
        </Link>
        <Link
          to="/signin"
          className="hover:text-[#4BA586] text-[#8E8E8E] text-lg"
        >
          Sign-in
        </Link>
        <Link
          to="/login"
          className="hover:text-[#4BA586] text-[#8E8E8E] text-lg"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
