/* eslint-disable react/no-unescaped-entities */
import apple from "../../../assets/icons/1200px-Apple_gray_logo 1.svg";
import mobile from "../../../assets/images/home/banner/hero_endframe__cvklg0xk3w6e_large 2.svg";
import bannerData from "./bannerData";
import LeftCategories from "./LeftCategories";
const Banner = () => {
  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row w-full gap-7 px-4 lg:px-28">
        {/* left */}
        <div className="flex flex-col lg:w-3/12 gap-2 lg:gap-3 lg:border-r-2 pt-4 md:pt-10">
          {bannerData.map((data) => (
            <LeftCategories key={data.id} {...data} />
          ))}
        </div>
        {/* right */}
        <div className="relative w-full flex flex-row justify-center pt-4 md:pt-10">
          <div className="flex flex-col lg:flex-row justify-between">
            {/*  text*/}
            <div className="flex flex-col gap-4 bg-black py-4 lg:py-12 pl-4 lg:pl-10">
              <div className="flex flex-row gap-5 items-center">
                <img src={apple} alt="" className="" />
                <h3 className="text-white">iPhone 14 Series</h3>
              </div>
              <h1 className="text-white font-semibold text-3xl lg:text-5xl leading-tight">
                Up to 10% <br />
                off Voucher
              </h1>
              <div className="flex flex-row gap-3 items-center">
                <button className="text-white border-b poppins">
                  Shop Now
                </button>
                <img
                  src="./assets/icon/Vector (3)_h.svg"
                  alt
                  className="cursor-pointer h-4 w-4"
                />
              </div>
            </div>
            {/* image */}
            <div className="bg-black flex flex-row">
              <img src={mobile} alt="" className="" />
            </div>
          </div>
          <div className="absolute flex flex-row gap-3 bottom-4">
            <div className="bg-[#808080] w-3 h-3 rounded-full cursor-pointer" />
            <div className="bg-[#808080] w-3 h-3 rounded-full cursor-pointer" />
            <div className="bg-[#e95353] w-3 h-3 rounded-full cursor-pointer ring ring-white" />
            <div className="bg-[#808080] w-3 h-3 rounded-full cursor-pointer" />
            <div className="bg-[#808080] w-3 h-3 rounded-full cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
