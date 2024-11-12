import { Outlet } from "react-router-dom";
import NavArea from "../components/shared/NavArea";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavArea />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
