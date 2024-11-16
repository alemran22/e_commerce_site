import React from "react";

const Music = () => {
  return (
    <section className="px-4 lg:px-28">
      <div className=" bg-black">
        {/* mobile only */}
        <div className="lg:hidden flex-row gap-5 items-center pl-4 pt-4">
          <p className="text-[#00ff66] font-semibold text-2xl poppins">
            Categories
          </p>
        </div>
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          {/* left */}
          <div className="lg:w-6/12 flex flex-col gap-8 p-2 lg:p-12">
            <div className="lg:flex flex-row gap-5 items-center hidden">
              <p className="text-[#00ff66] font-semibold text-2xl poppins">
                Categories
              </p>
            </div>
            <h1 className="text-white font-semibold text-3xl lg:text-5xl leading-tight">
              Enhance Your <br />
              Music Experience
            </h1>
            {/* timer */}
            <div className="flex flex-row gap-2 lg:gap-3">
              <div className="bg-white flex flex-col justify-center items-center h-[70px] w-[70px] p-1 rounded-full leading-none">
                <h3 className="text-base font-semibold">23</h3>
                <p className="text-black text-xs poppins">Hours</p>
              </div>
              <div className="bg-white flex flex-col justify-center items-center h-[70px] w-[70px] p-1 rounded-full leading-none">
                <h3 className="text-base font-semibold">05</h3>
                <p className="text-black text-xs poppins">Days</p>
              </div>
              <div className="bg-white flex flex-col justify-center items-center h-[70px] w-[70px] p-1 rounded-full leading-none ">
                <h3 className="text-base font-semibold">59</h3>
                <p className="text-black text-xs poppins">Minutes</p>
              </div>
              <div className="bg-white flex flex-col justify-center items-center h-[70px] w-[70px] p-1 rounded-full leading-none">
                <h3 className="text-base font-semibold">35</h3>
                <p className="text-black text-xs poppins ">Seconds</p>
              </div>
            </div>
            <button className="mx-auto lg:mx-0 my-3 py-3 w-fit px-4 lg:px-10 text-white rounded bg-[#00ff66]">
              Buy Now!
            </button>
          </div>
          {/* right */}
          <div className="bg-black w-full lg:w-6/12 flex flex-row ">
            <img
              src="./assets/image/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.svg"
              alt
              className="self-center p-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Music;
