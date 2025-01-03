
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

const projectroute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />, 
      },
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
        path: "/adminDashboard", // New route for Admin Dashboard
        element: <AdminDashboard />,
      },
      {
        path: "/farmerDashboard", // New route for Admin Dashboard
        element: <FarmerDashboard />,
      },
      {
        path: "/addProduct", // Route for adding products
        element: <AddProduct />,
      },
      {
        path: "/manageStock", // Route for managing stock
        element: <ManageStock />,
      },
      {
        path: "/viewOrders", // Route for viewing orders
        element: <ViewOrders />,
      },
      {
        path: "/viewFieldVisitRequest", // Route for viewing field request
        element: <ViewFieldRequest />,
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
        element: <Login/>,
      },
      {
        path: "/contactus",
        element: <Contact />,
      },
      {
        path: "/nutritionRecommendation",
        element: <NutritionRecommendation/>,
      },

      {
        path: "/bookFieldVisit",
        element: <BookFieldVisit/>,
      },
    ],
  },
  {
    path: "admindsh",
    element: (
    <><AdminHeader />
    <Outlet/>
    </>),
    children: [
      {
        path: "adminhome",
        element: <Home />, 
      },
      {
        path: "adminproduct",
        element: <AdminProduct/>, 
      },
      {
        path: "adminDashboard",
        element: <AdminDashboard/>, 
      },
      {
        path: "addproduct",
        element: <AddProduct/>, 
      },
      {
        path: "managestock",
        element: <ManageStock/>, 
      },
      {
        path: "vieworders",
        element: <ViewOrders/>, 
      },
      {
        path: "viewfieldvisitrequest",
        element: <ViewFieldRequest/>, 
      },
    ]
  },



  //farmer

  {
    path: "farmerdash",
    element: (
    <><FarmerHeader />
    <Outlet/>
    </>),
    children: [
      {
        path: "farmerhome",
        element: <Home />, 
      },
      {
        path: "farmerproducts",
        element: <Products/>, 
      },
      {
        path: "farmerservices",
        element: <Services/>, 
      },
      {
        path: "contact",
        element: <Contact/>, 
      },
      
    ]
  }
]);

export default projectroute;
