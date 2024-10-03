// import React from "react";
// import { google } from "../../images/index";
// import { heroBackground } from "../../images/index";
// import { Link } from "react-router-dom";

// const login = () => {
//   return (
//     <div>
//       <h1>
//         <section
//           style={{ backgroundImage: `url(${heroBackground})` }}
//           className=" flex object-cover justify-center items-center h-[100vh] w-full"
//         >
//           <div className="bg-[#00A651]/70 text-[#FFFFFF] w-1/2 h-[100%] flex justify-center items-center">
//             <div className="pl-28 pr-14">
//               <h1 className="text-4xl font-bold pb-5">
//                 Your Logistics Partner For Seamless Delivery.
//               </h1>
//               <p className="text-2xl">
//                 We provide services for all your nationwide shipping needs.
//               </p>
//             </div>
//           </div>
//           <div className="bg-[#D9D9D9] w-1/2 h-[100%] flex justify-center items-center">
//             <div className="bg-white rounded-xl py-16 px-10">
//               <h1 className="text-3xl font-bold text-[#00A651] py-4">
//                 Welcome Back!
//               </h1>
//               <p className="text-xl pb-7">
//                 Track your logistics with <b>SpruceXpress</b>
//               </p>
//               <form>
//                 <label htmlFor="mail">
//                   <b>Email</b>
//                 </label>
//                 <br />
//                 <input
//                   type="email"
//                   name="mail"
//                   id="mail"
//                   className="w-full border text-lg p-2"
//                   placeholder="Enter your email"
//                 />
//                 <br />
//                 <br />
//                 <label htmlFor="password">
//                   <b>password</b>
//                 </label>
//                 <br />
//                 <input
//                   type="text"
//                   className="w-full border text-lg p-2"
//                   id="password"
//                   placeholder="•••••••••"
//                 />
//                 <br />
//                 <div className="flex justify-between text-md py-3">
//                   <div>
//                     <input type="checkbox" name="" id="" />
//                     <label htmlFor="">Remember me</label>
//                   </div>
//                   <div>
//                     <p>Forgot Password?</p>
//                   </div>
//                 </div>
//                 <button className="w-full items-center bg-[#00A651] text-white rounded-xl py-3 text-xl font-bold">
//                   Sign in
//                 </button>
//               </form>
//               <button className="w-full flex justify-center items-center bg-[#353535] mt-4 text-white rounded-xl gap-2 mb-4 py-3 text-xl font-semibold">
//                 <img src={google} alt="" />
//                 <p>Or continue with Google</p>
//               </button>
//               <div className="flex justify-between">
//                 <p>New to SpruceXpress?</p>
//                 <Link to={"/Signin"} className="text-[#00A651]">
//                   Create an account.
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </h1>
//     </div>
//   );
// };

// export default login;

import React from "react";
import { google } from "../../images/index";
import { heroBackground } from "../../images/index";
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div>
      <section
        style={{ backgroundImage: `url(${heroBackground})` }}
        className="relative flex object-cover justify-center items-center h-[100vh] w-full bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/60"></div>{" "}
        {/* Overlay to make the background image appear thicker */}
        <div className="relative flex w-full h-full">
          <div className="bg-[#00A651]/70 text-[#FFFFFF] w-1/2 h-full flex justify-center items-center">
            {" "}
            {/* Adjusted opacity */}
            <div className="pl-28 pr-14">
              <h1 className="text-4xl font-bold pb-5">
                Your Logistics Partner For Seamless Delivery.
              </h1>
              <p className="text-2xl">
                We provide services for all your nationwide shipping needs.
              </p>
            </div>
          </div>
          <div className="bg-[#D9D9D9]/70 w-1/2 h-full flex justify-center items-center">
            <div className="bg-white rounded-xl py-16 px-10">
              <h1 className="text-3xl font-bold text-[#00A651] py-4">
                Welcome Back!
              </h1>
              <p className="text-xl pb-7">
                Track your logistics with <b>SpruceXpress</b>
              </p>
              <form>
                <label htmlFor="mail">
                  <b>Email</b>
                </label>
                <br />
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  className="w-full border text-lg p-2"
                  placeholder="Enter your email"
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
                  placeholder="•••••••••"
                />
                <br />
                <div className="flex justify-between text-md py-3">
                  <div>
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Remember me</label>
                  </div>
                  <div>
                    <p>Forgot Password?</p>
                  </div>
                </div>
                <Link to={"/welcome"} className="w-full items-center bg-[#00A651] text-white rounded-xl py-3 text-xl font-bold">
                  Sign in
                </Link>
              </form>
              <button className="w-full flex justify-center items-center bg-[#353535] mt-4 text-white rounded-xl gap-2 mb-4 py-3 text-xl font-semibold">
                <img src={google} alt="" />
                <p>Or continue with Google</p>
              </button>
              <div className="flex justify-between">
                <p>New to SpruceXpress?</p>
                <Link to={"/Signin"} className="text-[#00A651]">
                  Create an account.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default login;
