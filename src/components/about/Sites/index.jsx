import React from "react";

const Sites = () => {
  return (
    <section className="lg:px-28 px-4 flex flex-col lg:flex-row gap-5 justify-center items-center py-20">
      {/* service1 */}
      <div className="lg:w-3/12 w-full flex flex-col justify-center items-center gap-4 border py-6 px-2 rounded-md hover:bg-[#db4444] hover:text-white group">
        <img
          src="./assets/icon/Services-hover.svg"
          alt
          className="hidden group-hover:block"
        />
        <img
          src="./assets/icon/Services_about.svg"
          alt
          className="group-hover:hidden"
        />
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="font-bold text-2xl">10.5k</h3>
          <p className="poppins text-base">Sellers active in our site</p>
        </div>
      </div>
      {/* service2 */}
      <div className="lg:w-3/12 w-full flex flex-col justify-center items-center gap-4 border py-6 px-2 rounded-md hover:bg-[#db4444] hover:text-white group">
        <img
          src="./assets/icon/Services (1)_about.svg"
          alt
          className="hidden group-hover:block"
        />
        <img
          src="./assets/icon/Services (1)-hover.svg"
          alt
          className="group-hover:hidden"
        />
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="font-bold  text-2xl">10.5k</h3>
          <p className=" text-base poppins">Monthly Produduct Sale</p>
        </div>
      </div>
      {/* service3 */}
      <div className="lg:w-3/12 w-full flex flex-col justify-center items-center gap-4 border py-6 px-2 rounded-md hover:bg-[#db4444] hover:text-white group">
        <img
          src="./assets/icon/Services (2)-hover.svg"
          alt
          className="hidden group-hover:block"
        />
        <img
          src="./assets/icon/Services (2)_about.svg"
          alt
          className="group-hover:hidden"
        />
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="font-bold text-2xl">45.5k</h3>
          <p className="text-base poppins">Customer active in our site</p>
        </div>
      </div>
      {/* service4 */}
      <div className="lg:w-3/12 w-full flex flex-col justify-center items-center gap-4 border py-6 px-2 rounded-md hover:bg-[#db4444] hover:text-white group">
        <img
          src="./assets/icon/Services (3)-hover.svg"
          alt
          className="hidden group-hover:block"
        />
        <img
          src="./assets/icon/Services (3)about.svg"
          alt
          className="group-hover:hidden"
        />
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="font-bold text-2xl">25k</h3>
          <p className="text-base poppins">Annual gross sale in our site</p>
        </div>
      </div>
    </section>
  );
};

export default Sites;
