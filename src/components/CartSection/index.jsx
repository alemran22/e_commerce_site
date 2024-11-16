import React from "react";
import { Link } from "react-router-dom";

const CartSection = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <section className="lg:px-28 px-4 py-4 lg:py-8 flex flex-col gap-10">
        <div className="flex flex-row justify-between items-center">
          {/* heading */}
          <div className="py-3">
            <p className>
              <span className="text-[#808080]">Home /</span> Cart
            </p>
          </div>
        </div>
        {/* pattern */}
        <div className=" hidden lg:flex flex-row items-center border rounded-md shadow-lg px-7 py-5">
          <p className="w-4/12 text-center">Product</p>
          <p className="w-4/12 text-center">Price</p>
          <p className="w-4/12 text-center">Quantity</p>
          <p className="w-4/12 text-center">Subtotal</p>
        </div>
        {/* pattern 1 */}
        <div className="flex flex-col lg:flex-row items-center border rounded-md shadow-lg px-7 py-5">
          <div className="w-full lg:w-4/12 text-center relative flex flex-col lg:flex-row items-center gap-4 group cursor-pointer">
            <img
              src="./assets/image/g27cq4-500x500 1.svg"
              alt
              className="lg:h-10 h-16"
            />
            <div className>
              <p className>LCD Monitor</p>
            </div>
            <div className="absolute bg-red-600 rounded-full px-1 -top-1.5 -left-1.5 hidden group-hover:block">
              <p className="text-white text-xs">X</p>
            </div>
          </div>
          <div className="lg:w-4/12 lg:block flex mt-2 lg:mt-0">
            <p className="poppins lg:hidden">Price:</p>
            <p className=" text-center poppins">$650</p>
          </div>
          <div className="lg:w-4/12 text-center  mt-2 lg:mt-0">
            <input
              type="number"
              name
              id
              placeholder={"01"}
              className="w-16 lg:w-[74px] outline-none  py-1 lg:py-2 pl-3 pr-2 border-2 rounded"
            />
          </div>
          <div className="lg:w-4/12 lg:block flex mt-2 lg:mt-0">
            <p className="poppins lg:hidden">Subtotal:</p>
            <p className=" text-center poppins">$650</p>
          </div>
        </div>
        {/* pattern 2*/}
        <div className="flex flex-col lg:flex-row items-center border rounded-md shadow-lg px-7 py-5">
          <div className="lg:w-4/12 text-center relative flex flex-col lg:flex-row items-center gap-4 group cursor-pointer">
            <img
              src="./assets/image/g92-2-500x500 1.svg"
              alt
              className="h-16 lg:h-10"
            />
            <p className>H1 Gamepad</p>
            <div className="absolute bg-red-600 rounded-full px-1 -top-1.5 -left-1.5 hidden group-hover:block">
              <p className="text-white text-xs">X</p>
            </div>
          </div>
          <div className="lg:w-4/12 lg:block flex mt-2 lg:mt-0">
            <p className="poppins lg:hidden">Price:</p>
            <p className=" text-center poppins">$550</p>
          </div>
          <div className="lg:w-4/12 text-center  mt-2 lg:mt-0">
            <input
              type="number"
              name
              id
              placeholder={"02"}
              className="w-16 lg:w-[74px] outline-none py-1 lg:py-2 pl-3 pr-2 border-2 rounded"
            />
          </div>
          <div className="lg:w-4/12 lg:block flex mt-2 lg:mt-0">
            <p className="poppins lg:hidden">Subtotal:</p>
            <p className=" text-center poppins">$1100</p>
          </div>
        </div>
        {/* select button */}
        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between">
          <button className="border-2 px-10 py-4 font-semibold rounded-md hover:bg-red-500 hover:text-white">
            Return To Shop
          </button>
          <button className="border-2 px-10 py-4 font-semibold rounded-md hover:bg-red-500 hover:text-white">
            Update Cart
          </button>
        </div>
      </section>
      {/* checkout */}
      <section className="lg:px-28 px-4 py-4 lg:py-10 flex flex-col lg:flex-row justify-between gap-5">
        {/* left */}
        <div className="flex flex-row w-full lg:w-7/12">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-5">
            <div className="flex flex-row">
              <div className>
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border-2 py-4 pl-3 outline-none rounded-md"
                />
              </div>
            </div>
            <div className>
              <button className="lg:px-10 px-[60px] py-4 rounded-md bg-red-500 hover:bg-red-700 font-medium text-white">
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col gap-6 lg:w-5/12 rounded-md border-2 border-black p-4">
          <div className="flex flex-col gap-6">
            <p className="text-xl font-semibold">Cart Total</p>
            <div className="flex flex-row justify-between">
              <p className>Subtotal:</p>
              <p className>$1750</p>
            </div>
            <hr className="border-[1px]" />
          </div>
          <div className>
            <div className="flex flex-row justify-between">
              <p className>Shipping:</p>
              <p className>Free</p>
            </div>
            <hr className="border-[1px]" />
          </div>
          <div className="flex flex-row justify-center">
            <Link to={"/checkout"}>
              <button className="bg-red-500 hover:bg-red-700 text-white font-medium py-3 px-10 rounded">
                Process to checkout
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CartSection;
