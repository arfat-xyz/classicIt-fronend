import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/index.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={routers} />
    </React.StrictMode>
  </Provider>
);
