import { Link } from "react-router-dom";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import FlashProductData from "./FlashCardData";

import FlashCard from "./FlashCard";

const FlashSale = () => {
  return (
    <section className="py-4 px-4 lg:py-16 lg:px-28">
      {/* heading */}
      <div className="lg:py-14 py-6">
        <div className="flex flex-row items-center gap-4 mb-5">
          <div className="bg-[#DB4444] w-5 h-10 rounded-sm" />
          <p className="text-[#DB4444] text-base font-semibold poppins">
            Today’s
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full lg:w-6/12 gap-2 lg:gap-0">
            <h4 className="font-semibold text-3xl lg:text-4xl">Flash Sales</h4>
            {/* countdown */}
            <div className="flex flex-row items-end gap-3">
              {/* 1 */}
              <div className="flex flex-col items-center gap-1">
                <p className="poppins text-xs font-medium">Days</p>
                <h6 className="text-2xl font-bold">03</h6>
              </div>
              <span className="text-[#E07575] text-3xl">:</span>
              {/* 2 */}
              <div className="flex flex-col items-center gap-1">
                <p className="poppins text-xs font-medium">Hours</p>
                <h6 className="text-2xl font-bold">23</h6>
              </div>
              <span className="text-[#E07575] text-3xl">:</span>
              {/* 3 */}
              <div className="flex flex-col items-center gap-1">
                <p className="poppins text-xs font-medium">Minutes</p>
                <h6 className="text-2xl font-bold">19</h6>
              </div>
              <span className="text-[#E07575] text-3xl">:</span>
              {/* 4 */}
              <div className="flex flex-col items-center gap-1">
                <p className="poppins text-xs font-medium">Seconds</p>
                <h6 className="text-2xl font-bold">56</h6>
              </div>
            </div>
          </div>
          <div className="lg:flex flex-row gap-2 hidden">
            <button className="bg-[#f5f5f5] p-3 rounded-full">
              <AiOutlineArrowLeft size={25} />
            </button>
            <button className="bg-[#f5f5f5] p-3 rounded-full">
              <AiOutlineArrowRight size={25} />
            </button>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {FlashProductData.map((product) => (
          <FlashCard {...product} key={product.id} />
        ))}
      </div>
      {/* view all products button */}
      <div className="flex flex-row justify-center items-center">
        <Link
          to={"products"}
          className="text-base font-medium py-4 px-12 bg-[#DB4444] hover:bg-[#a73232] text-white rounded w-fit self-center mt-14"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default FlashSale;
