import {
  Banner,
  BestSelling,
  Categories,
  ExploreProducts,
  FlashSale,
  Music,
  NewArrival,
  Service,
} from "../../components/home";
const Home = () => {
  return (
    <div>
      <Banner />
      <FlashSale />
      <hr />
      <Categories />
      <BestSelling />
      <Music />
      <ExploreProducts />
      <NewArrival />
      <Service />
      <button className="rounded-full p-2 bg-[#f5f5f5] bottom-4 left-full hidden lg:block sticky mr-14">
        <img src="./assets/icon/icons_arrow-up.svg" alt className />
      </button>
    </div>
  );
};

export default Home;
