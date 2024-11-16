import React from "react";

const OurStory = () => {
  return (
    <section className="lg:pl-28 px-4 flex flex-col justify-between">
      <p className>
        <span className="text-[#808080]">Home /</span> About
      </p>
      <div className="flex flex-row justify-between">
        {/* main story */}
        <div className="py-16 w-full flex flex-col-reverse lg:flex-row gap-6 lg:gap-10">
          {/* left side */}
          <div className="lg:w-5/12 w-full flex flex-col gap-7 ">
            <h1 className="text-[54px] font-semibold">Our Story</h1>
            <div className="flex flex-col gap-5 ">
              <p className="lg:pr-9 text-justify poppins">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.{" "}
              </p>
              <p className="pr-9 text-justify">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </p>
            </div>
          </div>
          {/* right side */}
          <div className="lg:w-7/12 w-full">
            <img
              src="./assets/image/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.svg"
              alt
              className="rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
