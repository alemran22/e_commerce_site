import { FaRegHeart } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  FiveStar,
  FourStar,
  OneStar,
  ThreeStar,
  TwoStar,
} from "../../FlashSale/Ratings";

/* eslint-disable react/prop-types */
const ProductCard = ({
  name,
  image,
  price,
  originalPrice,
  ratings,
  reviews,
}) => {
  return (
    <div className="lg:w-3/12">
      <div className=" relative group">
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
          <img src={image} alt className="h-36 p-4" />
        </Link>
        <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
          Add To Cart
        </button>
      </div>
      <div className="mt-4 lg:ml-2 flex flex-col items-center">
        <h6 className="font-medium text-base poppins">{name}</h6>
        <div className="flex flex-row items-center text-base font-medium gap-2">
          <p className="text-[#DB4444]">$ {price}</p>
          <p className="line-through text-[#808080]">${originalPrice}</p>
        </div>
        <div className="flex flex-row items-center">
          {ratings === 5 ? (
            <FiveStar />
          ) : ratings === 4 ? (
            <FourStar />
          ) : ratings === 3 ? (
            <ThreeStar />
          ) : ratings === 2 ? (
            <TwoStar />
          ) : (
            <OneStar />
          )}
          <p className="text-[#808080]">({reviews})</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
