import React from "react";

const Address = () => {
  return (
    <section className="lg:px-28 px-4 py-6 lg:py-14 flex flex-col gap-7">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 justify-between items-center">
        {/* cart-1 */}
        <div className="w-full lg:w-4/12 h-[564px] flex flex-col gap-6 rounded-md cursor-pointer">
          <div className=" bg-[#F5F5F5]  flex items-end">
            <img
              src="./assets/image/image 46_about.svg"
              alt
              className="h-[391px] pl-12 pt-10"
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="font-semibold text-3xl">Tom Cruise</h3>
            <p className>Founder &amp; Chairman</p>
          </div>
          <div className="flex flex-row gap-3 justify-center">
            <img src="./assets/icon/Icon-Twitter.svg" alt className />
            <img src="./assets/icon/icon-instagram.svg" alt className />
            <img src="./assets/icon/Icon-Linkedin.svg" alt className />
          </div>
        </div>
        {/* cart-2 */}
        <div className="w-full lg:w-4/12 h-[564px] flex flex-col gap-6 rounded-md cursor-pointer">
          <div className=" bg-[#F5F5F5] flex items-center lg:items-end">
            <img
              src="./assets/image/image 51_about.svg"
              alt
              className="h-[391px] pl-10 pt-10"
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="font-semibold text-3xl">Emma Watson</h3>
            <p className>Mannaging Director</p>
          </div>
          <div className="flex flex-row justify-center gap-3">
            <img src="./assets/icon/Icon-Twitter.svg" alt className />
            <img src="./assets/icon/icon-instagram.svg" alt className />
            <img src="./assets/icon/Icon-Linkedin.svg" alt className />
          </div>
        </div>
        {/* cart-3 */}
        <div className="w-full lg:w-4/12 h-[564px] flex flex-col gap-6 rounded-md cursor-pointer">
          <div className="bg-[#F5F5F5] flex items-end">
            <img
              src="./assets/image/image 47_about.svg"
              alt
              className="h-[391px] pl-4 pt-10"
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h3 className="font-semibold text-3xl">Will Smith</h3>
            <p className>Founder &amp; Chairman</p>
          </div>
          <div className="flex flex-row gap-3 justify-center">
            <img src="./assets/icon/Icon-Twitter.svg" alt className />
            <img src="./assets/icon/icon-instagram.svg" alt className />
            <img src="./assets/icon/Icon-Linkedin.svg" alt className />
          </div>
        </div>
      </div>
      {/* slider */}
      <div className="hidden lg:flex flex-row justify-center items-center gap-3 py-5">
        <div className="bg-[#808080] w-3 h-3 rounded-full cursor-pointer" />
        <div className="bg-[#808080] w-3 h-3 rounded-full cursor-pointer" />
        <div className="bg-[#e95353] w-3 h-3 rounded-full cursor-pointer ring" />
        <div className="bg-[#808080] w-3 h-3 rounded-full cursor-pointer" />
        <div className="bg-[#808080] w-3 h-3 rounded-full cursor-pointer" />
      </div>
    </section>
  );
};

export default Address;
