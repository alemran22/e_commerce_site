import React from "react";

const LogInSection = () => {
  return (
    <main className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:pt-14 py-4 px-4 lg:pb-24 lg:pr-28 justify-between">
      <div className="w-full lg:w-[61%]">
        <img
          src="./assets/image/Side Image.svg"
          alt
          className="rounded-r-sm w-full"
        />
      </div>
      <div className=" flex flex-col gap-10 py-6 lg:py-28 justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium">Log in to Exclusive</h1>
          <p className="text-base poppins">Enter your details below</p>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-1 ">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="outline-none poppins"
            />
            <hr className="border-0.5 border-black text-base" />
          </div>
          <div className="flex flex-col gap-1 ">
            <input
              type="text"
              placeholder="Password"
              className="outline-none poppins"
            />
            <hr className="border-0.5 border-black text-base" />
          </div>
        </div>
        <div className=" w-full flex flex-row justify-between items-center ">
          <button className="bg-[#DB4444] px-10 py-4 text-base font-medium text-white rounded-[4px]">
            Log In
          </button>
          <a href className="text-base text-[#DB4444] poppins">
            Forget Password?
          </a>
        </div>
      </div>
    </main>
  );
};

export default LogInSection;
