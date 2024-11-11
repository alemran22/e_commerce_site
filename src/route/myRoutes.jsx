import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout";
import Contact from "../pages/Contact";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
export default routes;
