import React from "react";
import { deliveryGuys } from "../../images/index";

const aboutUs = () => {
  return (
    <div>
      <section className="px-12">
        <div className="flex justify-center items-center">
          <h1 className="bg-[#00A651] px-2 py-2 my-8 text-white text-xl md:text-3xl hover:bg-white hover:text-[#00A651] font-bold ">ABOUT US</h1>
        </div>
        {/* <hr className="w-full h-1 bg-black border-0"/> */}
        <div className=" md:flex justify-around w-fill md:p-12">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img className="w-[85%] h-[75vh] rounded-xl object-cover" src={deliveryGuys} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center mt-3 md:mt-0 md:w-1/2 gap-5 md:px-12">
            <article className="flex md:text-md md:text-left text-center w-[100%] font-normal">
              Spruce Xpress is your trusted partner for all your pickup and
              delivery needs. We understand that in today's fast-paced world,
              convenience is key, and that's why we're here to simplify your
              life. Whether you need to send a package across town or receive an
              essential item at your doorstep, Spruce Xpress is dedicated to
              providing reliable, efficient, and secure pickup and delivery
              services. With a commitment to excellence, our team of experienced
              professionals is ready to handle your logistics, ensuring your
              items reach their destination safely and on time. Choose Spruce
              Xpress for hassle-free, door-to-door delivery solutions that put
              your peace of mind first
            </article>
            <article className="md:text-md md:text-left text-center inline sm:hidden lg:inline">
              At Spruce Xpress, we take pride in offering a seamless pickup and
              delivery experience tailored to your unique requirements. With our
              customer-centric approach, we prioritize your satisfaction above
              all else. Whether it's a last-minute business delivery, an
              important document, or a special gift for a loved one, we've got
              you covered. Our dedicated team is equipped with the latest
              technology to track and manage your deliveries, and we're
              committed to maintaining the highest standards of professionalism
              and punctuality. Trust Spruce Xpress to be your go-to pickup and
              delivery service, where your needs are met with precision and
              care, every time
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default aboutUs;
