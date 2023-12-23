import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Product from "../pages/Product";
import Signup from "../pages/Sighup";
import Signin from "../pages/Signin";
import Logout from "../pages/Logout";
import ProtectedRoute from "../components/ProtectedRoutes";
import ProductDetails from "../pages/ProductDetails";
import NotFound from "../pages/NotFound";
const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default routers;
