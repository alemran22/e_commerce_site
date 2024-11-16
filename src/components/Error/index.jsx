import { Link } from "react-router-dom";

const ErrorSection = () => {
  return (
    <main className="bg-white w-full max-w-7xl mx-auto">
      <section className="px-4 lg:px-28">
        <div className="lg:pt-8">
          <p className="poppins">
            <span className="text-[#808080]">Home /</span> 404 Error
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-14 pt-16 lg:pt-20 pb-24">
          <h1 className="lg:text-[110px] text-3xl font-medium">
            404 Not Found
          </h1>
          <p className="text-base poppins text-center">
            Your visited page not found. You may go home page.
          </p>
          <Link to={"/"}>
            <button className="py-3 px-8 rounded-md bg-[#db4444] text-white text-base font-medium poppins lg:mt-12">
              Back to home page
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ErrorSection;
