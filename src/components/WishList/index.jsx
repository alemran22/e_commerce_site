const WishListSection = () => {
  return (
    <main className="max-w-7xl mx-auto bg-white w-full lg:py-16 p-4 lg:px-28">
      {/* wishlist */}
      <section className="mt-10">
        {/* title */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-center pb-6 lg:pb-16 gap-4">
          <h5 className="text-xl poppins">Wishlist (4)</h5>
          <button className="text-base font-medium px-8 py-3 border-2 border-[#808080] rounded-md hover:bg-red-500 hover:text-white hover:border-red-500 duration-300 transition">
            Move All To Bag
          </button>
        </div>
        {/* carts */}
        <div className="flex flex-col lg:flex-row gap-6 w-full p-2 lg:p-0">
          {/* cart 1 */}
          <div className="w-full lg:w-3/12 relative">
            <div className="bg-[#DB4444] text-[#FAFAFA] absolute top-2 left-2 text-xs px-2 py-1 rounded">
              -35%
            </div>
            <div className="flex flex-col gap-1 absolute top-2 right-2">
              <button className="rounded-full p-2 bg-white">
                <img
                  src="./assets/icon/icon-delete.svg"
                  alt
                  className="w-4 h-4"
                />
              </button>
            </div>
            <a
              href="./pro_details.html"
              className="bg-[#F5F5F5] flex flex-col justify-center items-center py-[42px] rounded-t-md"
            >
              <img
                src="./assets/image/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.svg"
                alt
              />
            </a>
            <div className="bg-black w-full py-1 rounded-b flex flex-row items-center gap-2 justify-center">
              <img src="./assets/icon/Cart1.svg" alt />
              <button className="text-white text-xs poppins">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 ml-2">
              <h6 className="font-medium text-base poppins">
                Gucci duffle bag
              </h6>
              <div className="flex flex-row items-center text-base font-medium gap-2">
                <p className="text-[#DB4444]">$960</p>
                <p className="line-through text-[#808080]">$1160</p>
              </div>
              {/* <div class="flex flex-row items-center">
                  <div class="flex flex-row">
                      <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                      <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                      <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                      <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                      <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                      <img src="./assets/icon/Vector (4).svg" alt="" class="h-3 w-3">
                  </div>
                  <p class="text-[#808080]">(75)</p>
              </div> */}
            </div>
          </div>
          {/* cart 2 */}
          <div className="w-full lg:w-3/12 relative">
            <div className="flex flex-col gap-1 absolute top-2 right-2">
              <button className="rounded-full p-2 bg-white">
                <img
                  src="./assets/icon/icon-delete.svg"
                  alt
                  className="w-4 h-4"
                />
              </button>
            </div>
            <a
              href="./pro_details.html"
              className="bg-[#F5F5F5] flex flex-col justify-center items-center py-[42px] rounded-t-md"
            >
              <img
                src="./assets/image/gammaxx-l240-argb-1-500x500 1.svg"
                alt
                className="h-32 w-44"
              />
            </a>
            <div className="bg-black w-full py-1 rounded-b flex flex-row items-center gap-2 justify-center">
              <img src="./assets/icon/Cart1.svg" alt />
              <button className="text-white text-xs poppins">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 ml-2">
              <h6 className="font-medium text-base poppins">
                RGB liquid CPU Cooler
              </h6>
              <div className="flex flex-row items-center text-base font-medium gap-2">
                <p className="text-[#DB4444]">$1960</p>
              </div>
              {/* <div class="flex flex-row items-center">
                  <div class="flex flex-row">
                      <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                      <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                      <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                      <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                      <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                      <img src="./assets/icon/Vector (4).svg" alt="" class="h-3 w-3">
                  </div>
                  <p class="text-[#808080]">(75)</p>
              </div> */}
            </div>
          </div>
          {/* cart 3 */}
          <div className="w-full lg:w-3/12 relative">
            <div className="flex flex-col gap-1 absolute top-2 right-2">
              <button className="rounded-full p-2 bg-white">
                <img
                  src="./assets/icon/icon-delete.svg"
                  alt
                  className="w-4 h-4"
                />
              </button>
            </div>
            <a
              href="./pro_details.html"
              className="bg-[#F5F5F5] flex flex-col justify-center items-center py-[42px] rounded-t-md"
            >
              <img
                src="./assets/image/GP11_PRD3 1.svg"
                alt
                className="h-32 w-44"
              />
            </a>
            <div className="bg-black w-full py-1 rounded-b flex flex-row items-center gap-2 justify-center">
              <img src="./assets/icon/Cart1.svg" alt />
              <button className="text-white text-xs poppins">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 ml-2">
              <h6 className="font-medium text-base poppins">
                GP11 Shooter USB Gamepad
              </h6>
              <div className="flex flex-row items-center text-base font-medium gap-2">
                <p className="text-[#DB4444]">$550</p>
              </div>
              {/* <div class="flex flex-row items-center">
                              <div class="flex flex-row">
                                  <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                                  <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                                  <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                                  <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                                  <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                                  <img src="./assets/icon/Vector (4).svg" alt="" class="h-3 w-3">
                              </div>
                              <p class="text-[#808080]">(75)</p>
                          </div> */}
            </div>
          </div>
          {/* cart 4 */}
          <div className="w-full lg:w-3/12 relative">
            <div className="flex flex-col gap-1 absolute top-2 right-2">
              <button className="rounded-full p-2 bg-white">
                <img
                  src="./assets/icon/icon-delete.svg"
                  alt
                  className="w-4 h-4"
                />
              </button>
            </div>
            <a
              href="./pro_details.html"
              className="bg-[#F5F5F5] flex flex-col justify-center items-center py-[42px] rounded-t-md"
            >
              <img
                src="./assets/image/698717_Z8A1X_3475_001_100_0000_Light-Reversible-quilted-satin-jacket 1.svg"
                alt
                className="h-32"
              />
            </a>
            <div className="bg-black w-full py-1 rounded-b flex flex-row items-center gap-2 justify-center">
              <img src="./assets/icon/Cart1.svg" alt />
              <button className="text-white text-xs poppins">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 ml-2">
              <h6 className="font-medium text-base poppins">
                Quilted Satin Jacket
              </h6>
              <div className="flex flex-row items-center text-base font-medium gap-2">
                <p className="text-[#DB4444]">$960</p>
                <p className="line-through text-[#808080]">$1160</p>
              </div>
              {/* <div class="flex flex-row items-center">
                                  <div class="flex flex-row">
                                      <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                                      <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                                      <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                                      <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                                      <img src="./assets/icon/Vector (3).svg" alt="" class="h-3 w-3">
                                      <img src="./assets/icon/Vector (4).svg" alt="" class="h-3 w-3">
                                  </div>
                                  <p class="text-[#808080]">(75)</p>
                              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* just for you */}
      <section className="lg:mt-20 lg:mb-14 my-10">
        {/* title */}
        <div className="py-14 flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-4 mb-5">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm" />
            <p className="text-[#DB4444] text-base font-semibold poppins">
              Just For You
            </p>
          </div>
          <button className="text-base font-medium px-8 py-3 border-2 border-[#808080] rounded-md hover:bg-red-500 hover:text-white hover:border-red-500 duration-300 transition">
            See All
          </button>
        </div>
        {/* carts */}
        <div className="flex flex-col lg:flex-row gap-6 p-2 lg:p-0">
          {/* cart 1 */}
          <div className="w-full lg:w-3/12 relative">
            <div className="bg-[#DB4444] text-[#FAFAFA] absolute top-2 left-2 text-xs px-2 py-1 rounded">
              -35%
            </div>
            <div className="flex flex-col gap-1 absolute top-2 right-2">
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
                src="./assets/image/ideapad-gaming-3i-01-500x500 1.svg"
                alt
                className="h-36"
              />
            </a>
            <div className="bg-black w-full py-1 rounded-b flex flex-row items-center gap-2 justify-center">
              <img src="./assets/icon/Cart1.svg" alt />
              <button className="text-white text-xs poppins">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 ml-2">
              <h6 className="font-semibold text-base">
                ASUS FHD Gaming Laptop
              </h6>
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
                <p className="text-[#808080] poppins">(65)</p>
              </div>
            </div>
          </div>
          {/* cart 2 */}
          <div className="w-full lg:w-3/12 relative">
            {/* <div class="bg-[#DB4444] text-[#FAFAFA] absolute top-2 left-2 text-xs px-2 py-1 rounded">-35%</div> */}
            <div className="flex flex-col gap-1 absolute top-2 right-2">
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
                src="./assets/image/g27cq4-500x500 1.svg"
                alt
                className="h-36"
              />
            </a>
            <div className="bg-black w-full py-1 rounded-b flex flex-row items-center gap-2 justify-center">
              <img src="./assets/icon/Cart1.svg" alt />
              <button className="text-white text-xs poppins">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 ml-2">
              <h6 className="font-semibold text-base">
                IPS LCD Gaming Monitor
              </h6>
              <div className="flex flex-row items-center text-base font-medium gap-2">
                <p className="text-[#DB4444] poppins">$1160</p>
                {/* <p class="line-through text-[#808080] poppins">$1160</p> */}
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
          {/* cart 3 */}
          <div className="w-full lg:w-3/12 relative">
            <div className="bg-[#00FF66] text-[#FAFAFA] absolute top-2 left-2 text-xs px-2 py-1 rounded">
              NEW
            </div>
            <div className="flex flex-col gap-1 absolute top-2 right-2">
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
                src="./assets/image/g92-2-500x500 1.svg"
                alt
                className="h-36"
              />
            </a>
            <div className="bg-black w-full py-1 rounded-b flex flex-row items-center gap-2 justify-center">
              <img src="./assets/icon/Cart1.svg" alt />
              <button className="text-white text-xs poppins">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 ml-2">
              <h6 className="font-semibold text-base">HAVIT HV-G92 Gamepad</h6>
              <div className="flex flex-row items-center text-base font-medium gap-2">
                <p className="text-[#DB4444] poppins">$560</p>
                {/* <p class="line-through text-[#808080] poppins">$1160</p> */}
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
          {/* cart 4 */}
          <div className="w-full lg:w-3/12 relative">
            {/* <div class="bg-[#DB4444] text-[#FAFAFA] absolute top-2 left-2 text-xs px-2 py-1 rounded">-35%</div> */}
            <div className="flex flex-col gap-1 absolute top-2 right-2">
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
                src="./assets/image/ak-900-01-500x500 1.svg"
                alt
                className="h-36"
              />
            </a>
            <div className="bg-black w-full py-1 rounded-b flex flex-row items-center gap-2 justify-center">
              <img src="./assets/icon/Cart1.svg" alt />
              <button className="text-white text-xs poppins">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 ml-2">
              <h6 className="font-semibold text-base">AK-900 Wired Keyboard</h6>
              <div className="flex flex-row items-center text-base font-medium gap-2">
                <p className="text-[#DB4444] poppins">$200</p>
                {/* <p class="line-through text-[#808080] poppins">$1160</p> */}
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
    </main>
  );
};

export default WishListSection;
