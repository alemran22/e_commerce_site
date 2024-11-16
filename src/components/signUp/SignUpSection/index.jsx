import { Link } from "react-router-dom";

const SignUpSection = () => {
  return (
    <section className="max-w-full mx-auto flex flex-col lg:flex-row p-4 lg:pt-14 lg:pb-24 lg:pr-28 justify-between gap-6 last:gap-0">
      <div className="w-full lg:w-[61%]">
        <img
          src="./assets/image/Side Image.svg"
          alt
          className="rounded-r-sm w-full"
        />
      </div>
      <div className=" flex flex-col gap-8 lg:py-28">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl lg:text-4xl font-bold lg:font-medium">
            Create an account
          </h1>
          <p className="text-base poppins">Enter your details below</p>
        </div>
        <div className="flex flex-col gap-10 poppins">
          <div className="flex flex-col gap-1">
            <input type="text" placeholder="Name" className="outline-none" />
            <hr className="border-0.5 border-black text-base" />
          </div>
          <div className="flex flex-col gap-1 poppins">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="outline-none"
            />
            <hr className="border-0.5 border-black text-base" />
          </div>
          <div className="flex flex-col gap-1 poppins">
            <input
              type="text"
              placeholder="Password"
              className="outline-none"
            />
            <hr className="border-0.5 border-black text-base" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <button className="bg-[#db4444] py-3  lg:px-20 text-white rounded-md poppins">
            Create Account
          </button>
          <div className="relative poppins">
            <button className="w-full border py-3 lg:px-20 font-semibold rounded-md">
              Sign up with Google
            </button>
            <img
              src="./assets/icon/Icon-Google.svg"
              alt="google"
              className="absolute top-3 left-5 lg:left-10"
            />
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center justify-center poppins mb-6 lg:mb-0">
          <p className="text-base">Already have account?</p>
          <Link to={"/login"} className="font-medium text-base underline">
            Log in
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
