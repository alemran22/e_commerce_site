import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import bestSellingProductData from "./bestSellingProductData";

const BestSelling = () => {
  return (
    <section className="my-6 lg:mt-10 lg:mb-20 px-4 lg:px-28">
      {/* heading */}
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
          <Link to={"products"}>
            <button className="bg-[#DB4444] text-base font-medium py-4 px-12 text-white rounded-sm hidden lg:block">
              View All
            </button>
          </Link>
        </div>
      </div>
      {/* carts */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
        {bestSellingProductData.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
