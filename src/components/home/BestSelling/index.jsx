import React from "react";

const BestSelling = () => {
  return (
    <section className="my-6 lg:mt-10 lg:mb-20 px-4 lg:px-28">
      {/* title */}
      <div className="lg:py-14 py-3">
        <div className="flex flex-row items-center gap-4 mb-5">
          <div className="bg-[#DB4444] w-5 h-10 rounded-sm" />
          <p className="text-[#DB4444] text-base font-semibold poppins">
            This Month
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between lg:items-center">
          <h4 className="font-semibold text-3xl lg:text-4xl">
            Best Selling Products
          </h4>
          <button className="bg-[#DB4444] text-base font-medium py-4 px-12 text-white rounded-sm hidden lg:block">
            View All
          </button>
        </div>
      </div>
      {/* carts */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
        {/* cart 1 */}
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
              className="bg-[#F5F5F5] flex flex-col justify-center items-center p-[33px]"
            >
              <img
                src="./assets/image/672462_ZAH9D_5626_002_100_0000_Light-The-North-Face-x-Gucci-coat 1.svg"
                alt
                className="h-40"
              />
            </a>
            <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="mt-4 lg:ml-2 flex flex-col items-center">
            <h6 className="font-semibold text-base">The north coat</h6>
            <div className="flex flex-row items-center text-base font-medium gap-2">
              <p className="text-[#DB4444] poppins">$260</p>
              <p className="line-through text-[#808080] poppins">$360</p>
            </div>
            <div className="flex flex-row items-center">
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
              <p className="text-[#808080] poppins">(35)</p>
            </div>
          </div>
        </div>
        {/* cart 2 */}
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
              className="bg-[#F5F5F5] flex flex-col justify-center items-center p-[33px]"
            >
              <img
                src="./assets/image/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.svg"
                alt
                className="h-40"
              />
            </a>
            <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="mt-4 lg:ml-2 flex flex-col items-center">
            <h6 className="font-semibold text-base">Gucci duffle bag</h6>
            <div className="flex flex-row items-center text-base font-medium gap-2">
              <p className="text-[#DB4444] poppins">$960</p>
              <p className="line-through text-[#808080] poppins">$1160</p>
            </div>
            <div className="flex flex-row items-center">
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
              <p className="text-[#808080] poppins">(35)</p>
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
              className="bg-[#F5F5F5] flex flex-col justify-center items-center py-[49px]"
            >
              <img
                src="./assets/image/gammaxx-l240-argb-1-500x500 1.svg"
                alt
                className="h-32 w-44"
              />
            </a>
            <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="mt-4 lg:ml-2 flex flex-col items-center">
            <h6 className="font-semibold text-base">RGB liquid CPU Cooler</h6>
            <div className="flex flex-row items-center text-base font-medium gap-2">
              <p className="text-[#DB4444] poppins">$160</p>
              <p className="line-through text-[#808080] poppins">$170</p>
            </div>
            <div className="flex flex-row items-center">
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
              <p className="text-[#808080] poppins">(65)</p>
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
              className="bg-[#F5F5F5] flex flex-col justify-center items-center py-[17px]"
            >
              <img
                src="./assets/image/sam-moghadam-khamseh-L_7MQsHl_aU-unsplash 1.svg"
                alt
                className="h-48 w-32"
              />
            </a>
            <button className="bg-black w-full text-white py-1 rounded-b hidden group-hover:flex justify-center items-center absolute bottom-0">
              Add To Cart
            </button>
          </div>
          <div className="mt-4 lg:ml-2 flex flex-col items-center">
            <h6 className="font-semibold text-base">Small BookSelf</h6>
            <div className="flex flex-row items-center text-base font-medium gap-2">
              <p className="text-[#DB4444] poppins">$360</p>
            </div>
            <div className="flex flex-row items-center">
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
              <p className="text-[#808080] poppins">(65)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
