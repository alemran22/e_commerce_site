const ProDetails = () => {
  return (
    <main className="bg-white w-full max-w-7xl mx-auto py-4 lg:py-16 px-4 lg:px-28">
      {/* heading */}
      <div className="py-3">
        <p className="poppins">
          <span className="text-[#808080] poppins">Home / Gaming /</span> Havic
          HV G-92 Gamepad
        </p>
      </div>
      {/* details */}
      <section className="pt-6 lg:pt-16">
        <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-[58px]">
          {/* images */}
          <div className="lg:w-[58%] w-full flex flex-col lg:flex-row gap-4">
            {/* small images */}
            <div className="w-full lg:w-[30%] flex flex-col gap-5 lg:gap-3">
              <div className="flex flex-row justify-center items-center bg-[#F5F5F5] cursor-pointer">
                <img src="./assets/image/image 57.svg" alt className="py-3" />
              </div>
              <div className="flex flex-row justify-center items-center bg-[#F5F5F5] cursor-pointer">
                <img src="./assets/image/image 58.svg" alt className="py-3" />
              </div>
              <div className="flex flex-row justify-center items-center bg-[#F5F5F5] cursor-pointer">
                <img src="./assets/image/image 61.svg" alt className="py-3" />
              </div>
              <div className="flex flex-row justify-center items-center bg-[#F5F5F5] cursor-pointer">
                <img src="./assets/image/image 59.svg" alt className="py-3" />
              </div>
            </div>
            {/* big image */}
            <div className="lg:w-[70%] flex flex-row justify-center items-center bg-[#F5F5F5] p-8 cursor-zoom-in">
              <img src="./assets/image/image 63.svg" alt />
            </div>
          </div>
          {/* description */}
          <div className="w-full lg:w-[42%]">
            <div className>
              <h3 className="text-xl lg:text-2xl font-bold lg:font-semibold text-wrap">
                Havic HV G-92 Gamepad
              </h3>
              {/* review */}
              <div className="flex flex-row items-center gap-3 pt-2">
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
                <p className="text-[#808080] poppins text-sm">
                  (150 Reviews) <span> |</span>{" "}
                  <span className="text-green-500 text-sm poppins">
                    In Stock
                  </span>
                </p>
              </div>
              <p className="text-2xl my-1">$192.00</p>
              <p className="pt-2 pb-4 poppins text-sm">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install &amp; mess free
                removal Pressure sensitive.
              </p>
            </div>
            <hr className="h-[1px] bg-black" />
            {/* colour */}
            <div className="flex flex-row items-center gap-2 py-4">
              <p className="text-xl pr-1">Colours:</p>
              <div className="bg-[#A0BCE0] h-3 w-3 rounded-full ring-black ring-2 cursor-pointer" />
              <div className="bg-[#E07575] h-4 w-4 rounded-full cursor-pointer" />
            </div>
            {/* size */}
            <div className="flex flex-row items-center gap-3">
              <p className="text-xl pr-1">Size:</p>
              <div className="border border-black  p-2 rounded w-8 h-8 flex flex-row items-center justify-center ">
                <p className="poppins text-sm">XS</p>
              </div>
              <div className=" border border-black p-2 rounded w-8 h-8 flex flex-row items-center justify-center">
                <p className="poppins text-sm">S</p>
              </div>
              <div className="p-2 rounded w-8 h-8 flex flex-row items-center justify-center bg-[#db4444] text-white">
                <p className="poppins text-sm">M</p>
              </div>
              <div className=" border border-black p-2 rounded w-8 h-8 flex flex-row items-center justify-center">
                <p className="poppins text-sm">L</p>
              </div>
              <div className=" border border-black p-2 rounded w-8 h-8 flex flex-row items-center justify-center">
                <p className="poppins text-sm">XL</p>
              </div>
            </div>
            {/* buttons */}
            <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-4">
              {/* quantity */}
              <div className="w-fit flex flex-row items-center text-xl my-4 lg:my-6 border border-black rounded-md">
                <button className="py-1 px-4 hover:text-white hover:bg-[#DB4444] rounded-l-md ">
                  -
                </button>
                <p className="px-9 py-1 border-black border-x">2</p>
                <button className="py-1 px-4 hover:text-white hover:bg-[#DB4444] rounded-r-md ">
                  +
                </button>
              </div>
              <div className="flex flex-row gap-2 items-center mb-4 lg:mb-0">
                {/* buy now */}
                <div className>
                  <button className="text-base font-medium text-[#FAFAFA] bg-[#DB4444] hover:bg-[#b83838] py-2 px-8 lg:px-12 rounded-md">
                    Buy Now
                  </button>
                </div>
                {/* favourite */}
                <div className="border border-black p-2 rounded-md cursor-pointer hover:bg-[#DB4444] hover:border-none group w-fit h-fit ">
                  <img
                    src="./assets/icon/Vector (1)_h.svg"
                    alt
                    className="group-hover:hidden"
                  />
                  <img
                    src="./assets/icon/Vector (1)pro.svg"
                    alt
                    className="group-hover:block hidden"
                  />
                </div>
              </div>
            </div>
            {/* delivery */}
            <div className="border border-black flex flex-col rounded">
              <div className="flex flex-row items-center gap-4 px-6 py-5">
                <div className>
                  <img src="./assets/icon/icon-delivery.svg" alt />
                </div>
                <div className>
                  <h6 className="poppins text-base font-medium leading-loose">
                    Free Delivery
                  </h6>
                  <p className="text-xs font-medium underline poppins cursor-pointer">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>
              <hr className=" bg-slate-400 h-0.5" />
              <div className="flex flex-row items-center gap-4 px-6 py-5">
                <div className>
                  <img src="./assets/icon/Icon-return.svg" alt />
                </div>
                <div className>
                  <h6 className="poppins text-base font-medium leading-loose">
                    Return Delivery
                  </h6>
                  <p className="text-xs font-medium poppins">
                    Free 30 Days Delivery Returns.{" "}
                    <span className="underline poppins cursor-pointer font-medium">
                      Details
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* related items*/}
      <section className="my-8 lg:mt-20 lg:mb-14">
        {/* title */}
        <div className="lg:py-14 py-4 flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-4 mb-5">
            <div className="bg-[#DB4444] w-5 h-10 rounded-sm" />
            <p className="text-[#DB4444] text-base font-semibold poppins">
              Related Items
            </p>
          </div>
        </div>
        {/* carts */}
        <div className="flex flex-col lg:flex-row gap-6">
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
              href
              className="bg-[#F5F5F5] flex flex-col justify-center items-center p-[33px]"
            >
              <img
                src="./assets/image/ideapad-gaming-3i-01-500x500 1.svg"
                alt
                className="h-36"
              />
            </a>
            <div className="bg-black w-full  py-1 rounded-b flex flex-row items-center gap-2 justify-center">
              <img src="./assets/icon/Cart1.svg" alt />
              <button className="text-white text-xs poppins">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 ml-2">
              <h6 className="font-medium text-base">ASUS FHD Gaming Laptop</h6>
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
              href
              className="bg-[#F5F5F5] flex flex-col justify-center items-center p-[33px]"
            >
              <img
                src="./assets/image/g27cq4-500x500 1.svg"
                alt
                className="h-36"
              />
            </a>
            <div className="bg-black w-full  py-1 rounded-b flex flex-row items-center gap-2 justify-center">
              <img src="./assets/icon/Cart1.svg" alt />
              <button className="text-white text-xs poppins">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 ml-2">
              <h6 className="font-medium text-base">IPS LCD Gaming Monitor</h6>
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
              href
              className="bg-[#F5F5F5] flex flex-col justify-center items-center p-[33px]"
            >
              <img
                src="./assets/image/g92-2-500x500 1.svg"
                alt
                className="h-36"
              />
            </a>
            <div className="bg-black w-full  py-1 rounded-b flex flex-row items-center gap-2 justify-center">
              <img src="./assets/icon/Cart1.svg" alt />
              <button className="text-white text-xs poppins">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 ml-2">
              <h6 className="font-medium text-base">HAVIT HV-G92 Gamepad</h6>
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
              href
              className="bg-[#F5F5F5] flex flex-col justify-center items-center p-[33px]"
            >
              <img
                src="./assets/image/ak-900-01-500x500 1.svg"
                alt
                className="h-36"
              />
            </a>
            <div className="bg-black w-full  py-1 rounded-b flex flex-row items-center gap-2 justify-center">
              <img src="./assets/icon/Cart1.svg" alt />
              <button className="text-white text-xs poppins">
                Add To Cart
              </button>
            </div>
            <div className="mt-4 ml-2">
              <h6 className="font-medium text-base">AK-900 Wired Keyboard</h6>
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

export default ProDetails;
