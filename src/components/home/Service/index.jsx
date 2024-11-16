import React from "react";

const Service = () => {
  return (
    <section className="flex flex-col lg:flex-row w-fit mx-auto gap-16 pb-14 lg:py-24 px-4 lg:px-28 ">
      <div className="flex flex-col items-center gap-4">
        <img src="./assets/icon/Services.svg" alt />
        <div className="text-center">
          <h5 className="font-bold text-lg leading-7">
            FREE AND FAST DELIVERY
          </h5>
          <p className="text-sm font-normal poppins">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src="./assets/icon/Services (1).svg" alt />
        <div className="text-center">
          <h5 className="font-bold text-lg leading-7">24/7 CUSTOMER SERVICE</h5>
          <p className="text-sm font-normal poppins">
            Friendly 24/7 customer support
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img src="./assets/icon/Services (2).svg" alt />
        <div className="text-center">
          <h5 className="font-bold text-lg leading-7">MONEY BACK GUARANTEE</h5>
          <p className="text-sm font-normal poppins">
            We reurn money within 30 days
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
