import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Components/MainLayOut/MainLayOut";
import Home from "../Components/Home/Home";
import Profile from "../Components/Profile/Profile";
import Login from "../Login/Login";
import Register from "../Components/Register/Register";
import Error from "../Components/ErrorPage/Error";
import PrivateRoutes from "../Components/PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    loader: () =>
      fetch("https://openapi.programming-hero.com/api/videos/category/1000"),

    children: [
      {
        path: "/",
        element: <PrivateRoutes><Home></Home></PrivateRoutes>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
