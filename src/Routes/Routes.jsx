import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import MyList from "../pages/MyList/MyList";
import AllTouristSpot from "../pages/AllTouristSpot/AllTouristSpot";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import UpdatePlace from "../pages/UpdatePlace/UpdatePlace";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [

      {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://assignment-10-tmw-southeast-asia-server.vercel.app/touristSpots')
      },
      {
          path: '/login',
          element: <Login></Login>
      },
      {
          path: '/register',
          element: <Register></Register>
      },
      {
        path: '/myList',
        element: <PrivateRoutes><MyList></MyList></PrivateRoutes>,
      },
      {
        path: '/allTouristSpot',
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('https://assignment-10-tmw-southeast-asia-server.vercel.app/touristSpots')
      },
      {
        path: '/addTouristSpot',
        element: <PrivateRoutes><AddTouristSpot></AddTouristSpot></PrivateRoutes>
      },
      {
        path: '/updatePlace/:id',
        element: <PrivateRoutes><UpdatePlace></UpdatePlace></PrivateRoutes>,
      },
      {
        path: '/viewDetails/:id',
        element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
      },
      ]
    },
    
  ]);

  export default router;