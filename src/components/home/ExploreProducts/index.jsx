import React from "react";

const ExploreProducts = () => {
  return (
    <section className="flex flex-col py-6 px-4 lg:px-28">
      {/* title */}
      <div className="py-14">
        <div className="flex flex-row items-center gap-4 mb-5">
          <div className="bg-[#DB4444] w-5 h-10 rounded-sm" />
          <p className="text-[#DB4444] text-base font-semibold poppins">
            Our Products
          </p>
        </div>
        <div className="flex flex-row justify-between items-center">
          <h4 className="font-semibold text-3xl lg:text-4xl">
            Explore Our Products
          </h4>
          <div className="lg:flex flex-row gap-2 hidden">
            <div className="bg-[#f5f5f5] p-3 rounded-full">
              <img src="./assets/icon/Vector (1).svg" alt className="h-4 w-4" />
            </div>
            <div className="bg-[#f5f5f5] p-3 rounded-full">
              <img src="./assets/icon/Vector.svg" alt className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      {/* carts */}
      <div className="flex flex-col gap-10">
        {/* cart upper */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
          {/* cart 1 */}
          <div className="lg:w-3/12">
            <div className=" relative group">
              <div className="flex flex-col gap-1 absolute top-2 right-2">
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Vector (2).svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Quick View.svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
              </div>
              <a
                href="./pro_details.html"
                className="bg-[#F5F5F5] flex flex-col justify-center items-center p-4"
              >
                <img
                  src="./assets/image/71RdoeXxtrL 1.svg"
                  alt
                  className="py-4 h-[212px] w-[146px]"
                />
              </a>
              <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 lg:ml-2 flex flex-col items-center">
              <h6 className="font-semibold text-base">Breed Dry Dog Food</h6>
              <div className="flex flex-row items-center text-base font-medium gap-2">
                <p className="poppins">$100</p>
                <div className="flex flex-row">
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (4).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (4).svg"
                    alt
                    className="h-3 w-3"
                  />
                </div>
                <p className="poppins">(35)</p>
              </div>
            </div>
          </div>
          {/* cart 2 */}
          <div className="lg:w-3/12 ">
            <div className="relative group ">
              <div className="flex flex-col gap-1 absolute top-2 right-2">
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Vector (2).svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Quick View.svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
              </div>
              <a
                href="./pro_details.html"
                className="bg-[#F5F5F5] flex flex-col justify-center items-center p-4"
              >
                <img
                  src="./assets/image/eos-250d-03-500x500 1.svg"
                  alt
                  className="h-[212px] w-[146px] py-6"
                />
              </a>
              <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 lg:ml-2 flex flex-col items-center">
              <h6 className="font-semibold text-base">CANON EOS DSLR Camera</h6>
              <div className="flex flex-row items-center text-base font-medium gap-2">
                <p>$360</p>
                <div className="flex flex-row">
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (4).svg"
                    alt
                    className="h-3 w-3"
                  />
                </div>
                <p className="poppins">(95)</p>
              </div>
            </div>
          </div>
          {/* cart 3 */}
          <div className="lg:w-3/12 ">
            <div className="relative group">
              <div className="flex flex-col gap-1 absolute top-2 right-2">
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Vector (2).svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Quick View.svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
              </div>
              <a
                href="./pro_details.html"
                className="bg-[#F5F5F5] flex flex-col justify-center items-center p-4"
              >
                <img
                  src="./assets/image/ideapad-gaming-3i-01-500x500 1.svg"
                  alt
                  className=" h-[212px] w-[146px]"
                />
              </a>
              <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 lg:ml-2 flex flex-col items-center">
              <h6 className="font-semibold text-base">
                ASUS FHD Gaming Laptop
              </h6>
              <div className="flex flex-row items-center text-base font-medium gap-2">
                <p className="poppins">$700</p>
                <div className="flex flex-row">
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                </div>
                <p className="poppins">(325)</p>
              </div>
            </div>
          </div>
          {/* cart 4 */}
          <div className="lg:w-3/12 ">
            <div className="relative group">
              <div className="flex flex-col gap-1 absolute top-2 right-2">
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Vector (2).svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Quick View.svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
              </div>
              <a
                href="./pro_details.html"
                className="bg-[#F5F5F5] flex flex-col justify-center items-center p-4"
              >
                <img
                  src="./assets/image/curology-j7pKVQrTUsM-unsplash 1.svg"
                  alt
                  className="py-4 h-[212px] w-[146px]"
                />
              </a>
              <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 lg:ml-2 flex flex-col items-center">
              <h6 className="font-semibold text-base">Curology Product Set</h6>
              <div className="flex flex-row items-center text-base font-medium gap-2">
                <p className="poppins">$500</p>
                <div className="flex flex-row">
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (4).svg"
                    alt
                    className="h-3 w-3"
                  />
                </div>
                <p className="poppins">(145)</p>
              </div>
            </div>
          </div>
        </div>
        {/* cart lower */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
          {/* cart 5 */}
          <div className="lg:w-3/12 ">
            <div className="relative group">
              <div className="flex flex-col gap-1 absolute top-2 right-2">
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Vector (2).svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Quick View.svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
              </div>
              <div className="absolute bg-[#00FF66] py-1 px-2 text-white text-xs left-2 top-2 rounded-md">
                NEW
              </div>
              <a
                href="./pro_details.html"
                className="bg-[#F5F5F5] flex flex-col justify-center items-center p-4"
              >
                <img
                  src="./assets/image/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.svg"
                  alt
                  className="h-[212px] w-[146px]"
                />
              </a>
              <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 lg:ml-2 flex flex-col items-center">
              <h6 className="font-semibold text-base">Kids Electric Car</h6>
              <div className="flex flex-row items-center text-base font-medium gap-2">
                <p className="poppins">$960</p>
                <div className="flex flex-row">
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                </div>
                <p className="poppins">(65)</p>
              </div>
              <div className="flex flex-row gap-1 mt-4">
                <img
                  src="./assets/icon/Ellipse 10.svg"
                  alt
                  className="bg-red-600 rounded-full w-5 h-5"
                />
                <img
                  src="./assets/icon/Ellipse 8.svg"
                  alt
                  className="w-5 h-5
                "
                />
              </div>
            </div>
          </div>
          {/* cart 6 */}
          <div className="lg:w-3/12 ">
            <div className="relative group">
              <div className="flex flex-col gap-1 absolute top-2 right-2">
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Vector (2).svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Quick View.svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
              </div>
              <a
                href="./pro_details.html"
                className="bg-[#F5F5F5] flex flex-col justify-center items-center p-4"
              >
                <img
                  src="./assets/image/Copa_Sense 1.svg"
                  alt
                  className="h-[212px] w-[146px]"
                />
              </a>
              <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 lg:ml-2 flex flex-col items-center">
              <h6 className="font-semibold text-base">
                Jr. Zoom Soccer Cleats
              </h6>
              <div className="flex flex-row items-center text-base font-medium gap-2">
                <p className="poppins">$1160</p>
                <div className="flex flex-row">
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                </div>
                <p className="poppins">(35)</p>
              </div>
              <div className="flex flex-row gap-1 mt-4">
                <img
                  src="./assets/icon/Ellipse 10.svg"
                  alt
                  className="bg-[#EEFF61] rounded-full w-5 h-5"
                />
                <img
                  src="./assets/icon/Ellipse 8.svg"
                  alt
                  className="w-5 h-5
                                    "
                />
              </div>
            </div>
          </div>
          {/* cart 7 */}
          <div className="lg:w-3/12 ">
            <div className="relative group">
              <div className="flex flex-col gap-1 absolute top-2 right-2">
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Vector (2).svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Quick View.svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
              </div>
              <div className="absolute bg-[#00FF66] py-1 px-2 text-white text-xs left-2 top-2 rounded-md">
                NEW
              </div>
              <a
                href="./pro_details.html"
                className="bg-[#F5F5F5] flex flex-col justify-center items-center p-4"
              >
                <img
                  src="./assets/image/GP11_PRD3 1.svg"
                  alt
                  className="h-[212px] w-[146px]"
                />
              </a>
              <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 lg:ml-2 flex flex-col items-center">
              <h6 className="font-semibold text-base">
                GP11 Shooter USB Gamepad
              </h6>
              <div className="flex flex-row items-center text-base font-medium gap-2">
                <p className="poppins">$660</p>
                <div className="flex flex-row">
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (4).svg"
                    alt
                    className="h-3 w-3"
                  />
                </div>
                <p className="poppins">(55)</p>
              </div>
              <div className="flex flex-row gap-1 mt-4">
                <img
                  src="./assets/icon/Ellipse 10.svg"
                  alt
                  className="bg-black rounded-full w-5 h-5"
                />
                <img
                  src="./assets/icon/Ellipse 8.svg"
                  alt
                  className="w-5 h-5
                                    "
                />
              </div>
            </div>
          </div>
          {/* cart 8 */}
          <div className="lg:w-3/12 ">
            <div className="relative group">
              <div className="flex flex-col gap-1 absolute top-2 right-2">
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Vector (2).svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
                <button className="rounded-full p-2 bg-white">
                  <img
                    src="./assets/icon/Quick View.svg"
                    alt
                    className="w-4 h-4"
                  />
                </button>
              </div>
              <a
                href="./pro_details.html"
                className="bg-[#F5F5F5] flex flex-col justify-center items-center p-4"
              >
                <img
                  src="./assets/image/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.svg"
                  alt
                  className="h-[212px] w-[146px]"
                />
              </a>
              <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 lg:ml-2 flex flex-col items-center">
              <h6 className="font-semibold text-base">Quilted Satin Jacket</h6>
              <div className="flex flex-row items-center text-base font-medium gap-2">
                <p className="poppins">$660</p>
                <div className="flex flex-row">
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (3).svg"
                    alt
                    className="h-3 w-3"
                  />
                  <img
                    src="./assets/icon/Vector (4).svg"
                    alt
                    className="h-3 w-3"
                  />
                </div>
                <p className="poppins">(55)</p>
              </div>
              <div className="flex flex-row gap-1 mt-4">
                <img
                  src="./assets/icon/Ellipse 10.svg"
                  alt
                  className="bg-black rounded-full w-5 h-5"
                />
                <img
                  src="./assets/icon/Ellipse 8.svg"
                  alt
                  className="w-5 h-5
                                    "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href
        className="text-base font-medium py-4 px-12 bg-[#DB4444] hover:bg-[#a73232] text-white rounded w-fit self-center mt-14"
      >
        View All Products
      </a>
    </section>
  );
};

export default ExploreProducts;
