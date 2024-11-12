import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import Error from "../pages/Error";
import About from "../pages/About";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
      {
        path: "product-details/:productId",
        element: <ProductDetails />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
export default routes;
