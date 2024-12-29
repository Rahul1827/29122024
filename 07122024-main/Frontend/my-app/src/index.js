// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { RouterProvider } from 'react-router-dom';
// import projectroute from './projectroute.js';
// import "bootstrap/dist/css/bootstrap.min.css"

// const rootElement = document.getElementById('root');
// const root = ReactDOM.createRoot(rootElement);

// root.render(<RouterProvider router={projectroute} />);









import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux
import projectroute from "./projectroute.js";
import store from "./Store"; // Import your Redux store
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}> {/* Wrap with Provider */}
    <RouterProvider router={projectroute} />
  </Provider>
);


