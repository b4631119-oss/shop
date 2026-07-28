import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Favorites from "../pages/Favorites/Favorites";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Phone from "../pages/Phone/Phone";
import Phones from "../pages/Phones/Phones";
import Accessories from "../pages/Accessories/Accessories";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('/phones.json') // или /phones.json
      },
      {
        path: "/phones",
        element: <Phones />,
        loader: () => fetch('/phones.json')
      },
      {
        path: "/accessories",
        element: <Accessories />,
        loader: () => fetch('/phones.json')
      },
      {
        path: "/favorites",
        element: <Favorites />
      },
      {
        path: "/phones/:id",
        element: <Phone />,
        loader: () => fetch('/phones.json')
      }
    ]
  }
]);

export default myCreatedRoute;