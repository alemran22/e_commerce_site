import React from "react";

const CheckOutSection = () => {
  return (
    <main className="bg-white max-w-7xl mx-auto lg:pt-16 pt-4">
      <section className="px-4 lg:px-28 flex flex-col gap-10">
        {/*  */}
        <div className="flex flex-row justify-between items-center">
          {/* heading */}
          <div className="py-3 mb-4 lg:mb-10">
            <p className="poppins">
              <span className="text-[#808080] ">
                Account / My Account / Product / View Cart /
              </span>
              CheckOut
            </p>
          </div>
        </div>
      </section>
      {/* Billing */}
      <section className="px-4 lg:px-28 flex flex-col gap-4 lg:gap-10">
        <h2 className="text-4xl font-semibold">Billing Details</h2>
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-36">
          {/* left side */}
          <div className="flex flex-col gap-4 lg:gap-8 lg:w-6/12 poppins">
            {/* first name */}
            <div className="flex flex-col gap-2">
              <p className="text-[#999999] text-base">First Name</p>
              <input type="text" className="p-3 bg-[#f5f5f5] rounded-md" />
            </div>
            {/* company name */}
            <div className="flex flex-col gap-2">
              <p className="text-[#999999]">Company Name</p>
              <input type="text" className="p-3 bg-[#f5f5f5] rounded-md" />
            </div>
            {/* Street Address */}
            <div className="flex flex-col gap-2">
              <p className="text-[#999999]">Street Address</p>
              <input type="text" className="p-3 bg-[#f5f5f5] rounded-md" />
            </div>
            {/* Apartment, floor, etc. (optional) */}
            <div className="flex flex-col gap-2">
              <p className="text-[#999999]">Apartment</p>
              <input type="text" className="p-3 bg-[#f5f5f5] rounded-md" />
            </div>
            {/* Town/City */}
            <div className="flex flex-col gap-2">
              <p className="text-[#999999]">Town/City</p>
              <input type="text" className="p-3 bg-[#f5f5f5] rounded-md" />
            </div>
            {/* phone Number */}
            <div className="flex flex-col gap-2">
              <p className="text-[#999999]">Phone Number</p>
              <input type="text" className="p-3 bg-[#f5f5f5] rounded-md" />
            </div>
            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <p className="text-[#999999]">Email Address</p>
              <input type="text" className="p-3 bg-[#f5f5f5] rounded-md" />
            </div>
            {/* checkbox area */}
            <div className="flex flex-row gap-3 items-center">
              {/* <img src="./assets/icon/icon-checkbox.svg" alt="" class=""> */}
              <label
                htmlFor="check"
                className="font-medium text-base cursor-pointer flex flex-row items-start lg:items-center gap-2 lg:pb-6 leading-5"
              >
                <input
                  type="checkbox"
                  name
                  id="check"
                  className="h-6 w-6 accent-[#de4d4d]"
                />
                Save this information for faster check-out next time.
              </label>
            </div>
            {/*mobile responsive  Order section */}
            <div className="lg:hidden">
              {/*  buttons*/}
              <div className="flex flex-row justify-between">
                <div className>
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="border-2 py-3 px-3 w-36 outline-none rounded-md text-base"
                  />
                </div>
                <div className="flex flex-row">
                  <button className="py-3 px-3 rounded-md bg-[#db4444] text-white text-base font-medium">
                    Apply Coupon
                  </button>
                </div>
              </div>
              {/* place order */}
              <div className="flex flex-row">
                <button className="w-full py-3 px-10 my-5 rounded-md bg-[#db4444] text-white text-base font-medium">
                  Place Order
                </button>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flex flex-col lg:w-6/12 poppins gap-2">
            <div className="flex flex-col w-10/12">
              {/* pattern1 */}
              <div className="flex flex-row justify-between items-center rounded-md py-5">
                <div className="flex flex-row items-center gap-4">
                  <img
                    src="./assets/image/g92-2-500x500 1.svg"
                    alt
                    className="h-14"
                  />
                  <p className="text-base">H1 Gamepad</p>
                </div>
                <p className>$650</p>
              </div>
              {/* pattern2 */}
              <div className="flex flex-row justify-between items-center rounded-md py-5">
                <div className="flex flex-row items-center gap-4">
                  <img
                    src="./assets/image/g27cq4-500x500 1.svg"
                    alt
                    className="h-14"
                  />
                  <p className="text-base">LCD Monitor</p>
                </div>
                <p className>$1100</p>
              </div>
              {/*  */}
              <div className>
                {/* subtotal */}
                <div className="flex flex-row justify-between items-center py-3">
                  <p className>Subtotal:</p>
                  <p className>$1750</p>
                </div>
                <hr className="border-black" />
                {/* subtotal2 */}
                <div className="flex flex-row justify-between items-center py-3">
                  <p className>Shipping:</p>
                  <p className>Free</p>
                </div>
                <hr className="border-black" />
                <div className="flex flex-row justify-between items-center py-3">
                  <p className>Total:</p>
                  <p className>$1750</p>
                </div>
              </div>
              {/*payment options */}
              <div className="flex flex-row gap-4 justify-between">
                <label
                  htmlFor="bank"
                  id
                  className="flex flex-row gap-4 my-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    id="bank"
                    name="payment"
                    className="bg-black accent-black h-6 w-6"
                  />
                  Bank
                </label>
                <div className="flex flex-row gap-3 items-center">
                  <a href>
                    <img
                      src="./assets/image/image 32.svg"
                      alt
                      className="h-5"
                    />
                  </a>
                  <a href>
                    <img
                      src="./assets/image/image 30.svg"
                      alt
                      className="h-5"
                    />
                  </a>
                  <a href>
                    <img
                      src="./assets/image/image 31.svg"
                      alt
                      className="h-5"
                    />
                  </a>
                  <a href>
                    <img
                      src="./assets/image/image 33.svg"
                      alt
                      className="h-5"
                    />
                  </a>
                </div>
              </div>
              <label
                htmlFor="cash"
                id
                className="flex flex-row gap-4 cursor-pointer"
              >
                <input
                  type="radio"
                  id="cash"
                  name="payment"
                  className="bg-black accent-black h-6 w-6"
                />
                Cash on delivery
              </label>
            </div>
            {/* Order section */}
            <div className="hidden lg:block">
              {/*  buttons*/}
              <div className="flex flex-row mt-5 justify-between">
                <div className>
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="border-2 py-3 pl-4 pr-9 outline-none rounded-md text-base"
                  />
                </div>
                <div className="flex flex-row">
                  <button className="py-3 px-8 rounded-md bg-[#db4444] text-white text-base font-medium">
                    Apply Coupon
                  </button>
                </div>
              </div>
              {/* place order */}
              <div className="flex flex-row">
                <button className="py-3 px-10 mt-5 rounded-md bg-[#db4444] text-white text-base font-medium">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CheckOutSection;
