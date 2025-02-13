
import React from "react";
import FarmerRegistration from "./Components/FarmerRegistration";
import Header from "./Components/Header";
import FarmerLogin from "./Components/FarmerLogin";
import AdminLogin from "./Components/AdminLogin";
import Services from "./Components/Services";
import About from "./Components/Products";
import CropDetails from "./Components/CropDetails";
import SignInDropDown from "./Components/SignInDropDown";
import Contact from "./Components/Contact";
import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./Components/App";
import Products from "./Components/Products";
import AdminDashboard from "./Components/AdminDashboard";
import AddProduct from "./Components/AddProduct"; 
import ManageStock from "./Components/ManageStock"; 
import ViewOrders from "./Components/ViewOrders"; 
import Home from "./Components/Home"; 
import NutritionRecommendation from "./Components/NutritionRecommendation";
import BookFieldVisit from "./Components/BookFieldVisit";
import { Login } from "./Components/Login";
import { ViewFieldRequest } from "./Components/ViewFieldRequest";
import { FarmerDashboard } from "./Components/FarmerDashboard";
import AdminHeader from "./Components/AdminHeader";
import AdminProduct from "./Components/AdminProduct";
import FarmerHeader from "./Components/FarmerHeader";
import ResetPassword from "./Components/ResetPassword";  // Adjust the path if necessary
import AddCropAdvisory from "./Components/AddCropAdvisory"; // Adjust the path if necessary
import  Booking  from "./Components/Booking";
import FarmerProducts from "./Components/FarmerProducts";
import  MyBooking  from "./Components/MyBooking";
import CropNutrition from "./Components/CropNutrition";
import FertilizerGuidance from "./Components/FertilizerGuidance";
import InventoryManagement from "./Components/InventoryManagement";
import GetStarted from "./Components/GetStarted";
import Notifications from "./Components/Notification";








const projectroute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },


      // 
      {
        path: "/cropNutrition",
        element: <CropNutrition/>,
      },
      {
        path: "/fertilizerGuidance",
        element: <FertilizerGuidance/>,
      },
      {
        path: "/inventoryManagement",
        element: <InventoryManagement/>,
      },
      
      {
        path: "/getStarted",
        element: <GetStarted/>,
      },

      // 


      {
        path: "/farmerRegistration",
        element: <FarmerRegistration />,
      },
      {
        path: "/farmerLogin",
        element: <FarmerLogin />,
      },
      {
        path: "/adminLogin",
        element: <AdminLogin />,
      },
      {
        path: "/adminDashboard",
        element: <AdminDashboard />,
      },
      {
        path: "/farmerDashboard",
        element: <FarmerDashboard />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/manageStock",
        element: <ManageStock />,
      },
      {
        path: "/viewOrders",
        element: <ViewOrders />,
      },
      {
        path: "/viewFieldVisitRequest",
        element: <ViewFieldRequest/>,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cropdetail",
        element: <CropDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },

      
    ],
  },
  {
    path: "admindsh",
    element: (
      <>
        <AdminHeader />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "adminhome",
        element: <Home />,
      },
      {
        path: "adminproduct",
        element: <AdminProduct />,
      },
      {
        path: "adminDashboard",
        element: <AdminDashboard />,
      },
      {
        path: "addproduct",
        element: <AddProduct />,
      },
      {
        path: "managestock",
        element: <ManageStock />,
      },
      {
        path: "vieworders",
        element: <ViewOrders />,
      },
      {
        path: "viewfieldvisitrequest",
        element: <ViewFieldRequest />,
      },

      {
        path: "addCropAdvisory",
        element: <AddCropAdvisory/>,
      },

      {
        path: "notification",
        element: <Notifications/>,
      },
    ],
  },
  {
    path: "farmerdash",
    element: (
      <>
        <FarmerHeader />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "farmerhome",
        element: <Home />,
      },
      {
        path: "farmerproducts",
        element: <FarmerProducts/>,
      },
      {
        path: "farmerservices",
        element: <Services />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "bookFieldVisit", // Add this route
        element: <BookFieldVisit />,
      },
      {
        path: "nutritionRecommendation", // Add this route
        element: <NutritionRecommendation />,
      },

      {
        path: "bookingProducts",
        element: <Booking/>,
      },
      {
        path: "mybookings", 
        element: <MyBooking/>,
      },
    ],
  },
]);

export default projectroute;


