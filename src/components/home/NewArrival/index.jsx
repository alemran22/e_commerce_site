import React from "react";

const NewArrival = () => {
  return (
    <section className="py-10 px-4 lg:px-28">
      {/* title */}
      <div className="py-6 lg:py-14">
        <div className="flex flex-row items-center gap-4 mb-5">
          <div className="bg-[#DB4444] w-5 h-10 rounded-sm" />
          <p className="text-[#DB4444] text-base font-semibold poppins">
            Featured
          </p>
        </div>
        <h4 className="font-semibold text-3xl lg:text-4xl">New Arrival</h4>
      </div>
      {/* carts */}
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <div
          className="bg-black lg:w-6/12 rounded-[4px] bg-no-repeat bg-right-bottom h-[570px] relative"
          style={{
            backgroundImage:
              'url("./assets/image/ps5-slim-goedkope-playstation_large 1.svg")',
          }}
        >
          <div className="text-white bottom-6 left-6 absolute">
            <h5 className="font-semibold text-2xl">PlayStation 5</h5>
            <p className="text-sm poppins">
              Black and White version of the PS5 <br /> coming out on sale.
            </p>
            <a href className="text-base font-medium underline">
              Shop Now
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:w-6/12 gap-4">
          <div
            className="bg-black rounded-[4px] bg-no-repeat bg-center h-[278px] relative"
            style={{
              backgroundImage:
                'url("./assets/image/attractive-woman-wearing-hat-posing-black-background 1.svg")',
            }}
          >
            <div className="text-white bottom-6 left-6 absolute">
              <h5 className="font-semibold text-2xl">Women’s Collections</h5>
              <p className="text-sm poppins">
                Featured woman collections that give you another vibe.
              </p>
              <a href className="text-base font-medium underline">
                Shop Now
              </a>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 h-[276px]">
            <div
              className="bg-black lg:w-6/12 rounded-[4px] h-full bg-no-repeat bg-center relative"
              style={{
                backgroundImage:
                  'url("./assets/image/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.svg")',
              }}
            >
              <div className="text-white bottom-6 left-6 absolute">
                <h5 className="font-semibold text-2xl">Speakers</h5>
                <p className="text-sm poppins">Amazon wireless speakers</p>
                <a href className="text-base font-medium underline">
                  Shop Now
                </a>
              </div>
            </div>
            <div
              className="bg-black lg:w-6/12 rounded-[4px] h-full bg-no-repeat bg-center relative"
              style={{
                backgroundImage:
                  'url("./assets/image/652e82cd70aa6522dd785109a455904c.svg")',
              }}
            >
              <div className="text-white bottom-6 left-6 absolute">
                <h5 className="font-semibold text-2xl">Perfume</h5>
                <p className="text-sm poppins">GUCCI INTENSE OUD EDP</p>
                <a href className="text-base font-medium underline">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
