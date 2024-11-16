import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import mobileIcon from "../../../assets/icons/icon/Category-CellPhone.svg";
import mobileIconHover from "../../../assets/icons/icon/Category-CellPhone-hover.svg";
import cameraIcon from "../../../assets/icons/icon/Category-Camera.svg";
import cameraIconHover from "../../../assets/icons/icon/Category-Camera-hover.svg";
import computerIcon from "../../../assets/icons/icon/Category-Computer.svg";
import computerIconHover from "../../../assets/icons/icon/Category-Computer-hover.svg";
import gamePad from "../../../assets/icons/icon/Category-Gamepad.svg";
import gamePadHover from "../../../assets/icons/icon/Category-Gamepad-hover.svg";
import headPhone from "../../../assets/icons/icon/Category-Headphone.svg";
import headPhoneHover from "../../../assets/icons/icon/Category-Headphone-hover.svg";
import smartWatch from "../../../assets/icons/icon/Category-SmartWatch.svg";
import smartWatchHover from "../../../assets/icons/icon/Category-SmartWatch-hover.svg";
const Categories = () => {
  return (
    <section className="lg:pb-16 py-8 px-4 lg:px-28">
      {/* title */}
      <div className="lg:py-14 py-4">
        <div className="flex flex-row items-center gap-4 mb-5">
          <div className="bg-[#DB4444] w-5 h-10 rounded-sm" />
          <p className="text-[#DB4444] text-base font-semibold poppins">
            Categories
          </p>
        </div>
        <div className="block lg:flex flex-row justify-between items-center">
          <h4 className="font-semibold text-3xl lg:text-4xl">
            Browse By Category
          </h4>
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
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-7">
        {/* cart 1 */}
        <div className="lg:w-2/12 h-36 border-2 flex flex-col justify-center items-center gap-4 rounded hover:bg-[#DB4444] hover:text-white group cursor-pointer">
          <img src={mobileIcon} alt className="group-hover:hidden" />
          <img src={mobileIconHover} alt className="hidden group-hover:block" />
          <p className="text-base poppins">Phones</p>
        </div>
        {/* cart 2 */}
        <div className="lg:w-2/12 h-36 border-2 flex flex-col justify-center items-center gap-4 rounded hover:bg-[#DB4444] hover:text-white group cursor-pointer">
          <img src={computerIcon} alt className="group-hover:hidden" />
          <img
            src={computerIconHover}
            alt
            className="group-hover:block hidden"
          />
          <p className="text-base poppins">Computers</p>
        </div>
        {/* cart 3 */}
        <div className="lg:w-2/12 h-36 border-2 flex flex-col justify-center items-center gap-4 rounded hover:bg-[#DB4444] hover:text-white group cursor-pointer">
          <img src={smartWatch} alt className="group-hover:hidden" />
          <img src={smartWatchHover} alt className="group-hover:block hidden" />
          <p className="text-base poppins">SmartWatch</p>
        </div>
        {/* cart 4 */}
        <div className="lg:w-2/12 h-36 border-2 flex flex-col justify-center items-center gap-4 rounded hover:bg-[#DB4444] hover:text-white group cursor-pointer">
          <img src={cameraIcon} alt className="group-hover:block hidden" />
          <img src={cameraIconHover} alt className="group-hover:hidden" />
          <p className="text-base poppins">Camera</p>
        </div>
        {/* cart 5 */}
        <div className="lg:w-2/12 h-36 border-2 flex flex-col justify-center items-center gap-4 rounded hover:bg-[#DB4444] hover:text-white group cursor-pointer">
          <img src={headPhone} alt className="group-hover:hidden" />
          <img src={headPhoneHover} alt className="group-hover:block hidden" />
          <p className="text-base poppins">HeadPhones</p>
        </div>
        {/* cart 6 */}
        <div className="lg:w-2/12 h-36 border-2 flex flex-col justify-center items-center gap-4 rounded hover:bg-[#DB4444] hover:text-white group cursor-pointer">
          <img src={gamePad} alt className="group-hover:hidden" />
          <img src={gamePadHover} alt className="group-hover:block hidden" />
          <p className="text-base poppins">Gaming</p>
        </div>
      </div>
    </section>
  );
};

export default Categories;
