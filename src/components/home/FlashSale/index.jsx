import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import cardImg1 from "../../../assets/images/home/flashSale/g92-2-500x500 1.svg";
import cardImg2 from "../../../assets/images/home/flashSale/ak-900-01-500x500 1.svg";
import cardImg3 from "../../../assets/images/home/flashSale/g27cq4-500x500 1.svg";
import cardImg4 from "../../../assets/images/home/flashSale/sam-moghadam-khamseh-kvmdsTrGOBM-unsplash 1.svg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const FlashSale = () => {
  return (
    <section className="py-4 px-4 lg:py-16 lg:px-28">
      {/* title */}
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
      {/* carts */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* cart 1 */}
        <div className="lg:w-3/12">
          <div className=" relative group">
            <div className="bg-[#DB4444] text-[#FAFAFA] absolute top-2 left-2 text-xs px-2 py-1 rounded">
              -40%
            </div>
            <div className="flex flex-col gap-1 absolute top-2 right-2">
              <button className="rounded-full p-2 bg-white">
                <FaRegHeart />
              </button>
              <button className="rounded-full p-2 bg-white">
                <MdOutlineRemoveRedEye />
              </button>
            </div>
            <Link
              to={"product-details/:productId"}
              className="bg-[#F5F5F5] flex flex-col justify-center items-center p-[33px] rounded-md"
            >
              <img src={cardImg1} alt className="h-36 p-4" />
            </Link>
            <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="mt-4 lg:ml-2 flex flex-col items-center">
            <h6 className="font-medium text-base poppins">
              HAVIT HV-G92 Gamepad
            </h6>
            <div className="flex flex-row items-center text-base font-medium gap-2">
              <p className="text-[#DB4444]">$120</p>
              <p className="line-through text-[#808080]">$160</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row">
                <IoIosStar color="orange" />
                <IoIosStar color="orange" />
                <IoIosStar color="orange" />
                <IoIosStarOutline color="orange" />
                <IoIosStarOutline color="orange" />
              </div>
              <p className="text-[#808080]">(88)</p>
            </div>
          </div>
        </div>
        {/* cart 2 */}
        <div className="lg:w-3/12 ">
          <div className="relative group">
            <div className="bg-[#DB4444] text-[#FAFAFA] absolute top-2 left-2 text-xs px-2 py-1 rounded">
              -35%
            </div>
            <div className="flex flex-col gap-1 absolute top-2 right-2">
              <button className="rounded-full p-2 bg-white">
                <FaRegHeart />
              </button>
              <button className="rounded-full p-2 bg-white">
                <MdOutlineRemoveRedEye />
              </button>
            </div>
            <Link
              to={"product-details/:productId"}
              className="bg-[#F5F5F5] flex flex-col justify-center items-center py-[42px] rounded-md"
            >
              <img src={cardImg2} alt className="h-32 p-4" />
            </Link>
            <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="mt-4 lg:ml-2 flex flex-col items-center">
            <h6 className="font-medium text-base poppins">
              AK-900 Wired Keyboard
            </h6>
            <div className="flex flex-row items-center text-base font-medium gap-2">
              <p className="text-[#DB4444]">$900</p>
              <p className="line-through text-[#808080]">$1160</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row">
                <IoIosStar color="orange" />
                <IoIosStar color="orange" />
                <IoIosStar color="orange" />
                <IoIosStar color="orange" />
                <IoIosStarOutline color="orange" />
              </div>
              <p className="text-[#808080]">(75)</p>
            </div>
          </div>
        </div>
        {/* cart 3 */}
        <div className="lg:w-3/12 ">
          <div className="relative group">
            <div className="bg-[#DB4444] text-[#FAFAFA] absolute top-2 left-2 text-xs px-2 py-1 rounded">
              -30%
            </div>
            <div className="flex flex-col gap-1 absolute top-2 right-2">
              <button className="rounded-full p-2 bg-white">
                <FaRegHeart />
              </button>
              <button className="rounded-full p-2 bg-white">
                <MdOutlineRemoveRedEye />
              </button>
            </div>
            <Link
              to={"product-details/:productId"}
              className="bg-[#F5F5F5] flex flex-col justify-center items-center py-[44px] rounded-md"
            >
              <img src={cardImg3} alt className="h-[124px] p-4" />
            </Link>
            <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="mt-4 lg:ml-2 flex flex-col items-center">
            <h6 className="font-medium text-base poppins">
              IPS LCD Gaming Monitor
            </h6>
            <div className="flex flex-row items-center text-base font-medium gap-2">
              <p className="text-[#DB4444]">$370</p>
              <p className="line-through text-[#808080]">$400</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row">
                <IoIosStar color="orange" />
                <IoIosStar color="orange" />
                <IoIosStar color="orange" />
                <IoIosStar color="orange" />
                <IoIosStarHalf color="orange" />
              </div>
              <p className="text-[#808080]">(99)</p>
            </div>
          </div>
        </div>
        {/* cart 4 */}
        <div className="lg:w-3/12 ">
          <div className="relative group">
            <div className="bg-[#DB4444] text-[#FAFAFA] absolute top-2 left-2 text-xs px-2 py-1 rounded">
              -25%
            </div>
            <div className="flex flex-col gap-1 absolute top-2 right-2">
              <button className="rounded-full p-2 bg-white">
                <FaRegHeart />
              </button>
              <button className="rounded-full p-2 bg-white">
                <MdOutlineRemoveRedEye />
              </button>
            </div>
            <Link
              to={"product-details/:productId"}
              className="bg-[#F5F5F5] flex flex-col justify-center items-center py-[19px] rounded-md"
            >
              <img src={cardImg4} alt className="h-[174px] p-4" />
            </Link>
            <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="mt-4 lg:ml-2 flex flex-col items-center">
            <h6 className="font-medium text-base poppins">
              S-Series Comfort Chair
            </h6>
            <div className="flex flex-row items-center text-base font-medium gap-2">
              <p className="text-[#DB4444]">$375</p>
              <p className="line-through text-[#808080]">$400</p>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-row">
                <IoIosStar color="orange" />
                <IoIosStar color="orange" />
                <IoIosStar color="orange" />
                <IoIosStar color="orange" />
                <IoIosStar color="orange" />
              </div>
              <p className="text-[#808080]">(99)</p>
            </div>
          </div>
        </div>
      </div>
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
