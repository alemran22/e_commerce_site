import { Link, NavLink } from "react-router-dom";
import navLinkData from "../../../constants/navlink.constant";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const NavArea = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="max-w-7xl mx-auto text-white flex flex-col lg:flex-row py-3 lg:px-28 justify-end items-center text-sm lg:gap-[106px]">
          <div className="flex flex-col lg:flex-row gap-2">
            <p className="px-2 text-wrap poppins">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <button className="border-b border-white font-semibold border-none outline-none poppins">
              ShopNow
            </button>
          </div>
          <div className>
            <select
              name="language"
              id="language"
              className="bg-transparent poppins font-medium cursor-pointer outline-none"
            >
              <option
                value="English"
                className="poppins font-medium text-black"
              >
                English
              </option>
              <option value="Bangla" className="poppins font-medium text-black">
                Bangla
              </option>
            </select>
          </div>
        </div>
      </div>

      <header className="max-w-7xl mx-auto w-full lg:px-28 px-2 flex flex-row justify-between pt-10 pb-4 border-b-2">
        {/* left */}
        <div className="lg:w-[60%] w-full flex flex-row justify-between items-center">
          <Link to={"/"} className="text-2xl font-bold">
            Exclusive
          </Link>
          <div className="lg:flex flex-row gap-6 hidden">
            {navLinkData.map((item) => (
              <NavLink
                key={item.id}
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-base poppins underline duration-300 transition px-2 py-1 rounded"
                    : "text-base poppins hover:bg-gray-300 duration-300 transition px-2 py-1 rounded"
                }
              >
                {item.title}
              </NavLink>
            ))}
          </div>
          {/* menu icon */}
          <button className="lg:hidden block">
            <img
              src="./assets/icon/more (3).png"
              id="burgerMenu"
              className="w-8 h-8"
              alt
            />
          </button>
          {/* mobile navbar */}
          <div id="mobileNavSec" className="hidden">
            {/* mobile nav menu */}
            <div
              id="mobileNavOpen"
              className="bg-white inset-y-0 left-0  w-8/12 fixed z-20"
            >
              <div className="flex flex-col text-lg font-medium p-5">
                {navLinkData.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.link}
                    className={({ isActive }) =>
                      isActive
                        ? "text-base poppins underline duration-300 transition px-2 py-1 rounded"
                        : "text-base poppins hover:bg-gray-300 duration-300 transition px-2 py-1 rounded"
                    }
                  >
                    {item.title}
                  </NavLink>
                ))}
              </div>
            </div>
            <div
              id="mobileNavShadow"
              className="w-4/12 fixed inset-y-0 right-0 bg-black/30"
            />
          </div>
        </div>
        {/* right */}
        <div className="lg:w-[30%] lg:flex flex-row justify-between items-center gap-2 hidden">
          <div className="w-9/12 rounded-sm relative bg-[#F5F5F5] flex flex-row pr-2 items-center">
            <input
              type="text"
              name
              id
              placeholder="What are you looking for?"
              className="poppins text-xs outline-none py-[7px] pl-4 w-full bg-transparent"
            />
            {/* search icon */}
            <button>
              <IoSearchOutline size={20} />
            </button>
          </div>
          <div className="w-3/12 flex flex-row justify-around items-center">
            <Link to={"wishlist"} className="relative">
              <FaRegHeart size={20} />
              {/* <div className="absolute -top-1.5 -right-0.5 bg-[#DB4444] py-[1px] px-1 rounded-full text-center text-white font-medium text-[8px]">
                4
              </div> */}
            </Link>
            <Link to={"cart"} className="relative">
              <IoCartOutline size={20} />
              {/* <div
              class="absolute -top-1 -right-1 bg-[#DB4444] py-[1px] px-1 rounded-full text-center text-white font-medium text-[8px]">
              2</div> */}
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <button className="poppins relative">
              <Link to={"profile"}>
                <CgProfile size={20} />
              </Link>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavArea;
