import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/Layout";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Products from "./pages/Products";
import Product from "./pages/Product";
import ErrorPage from "./components/ErrorPage";
import HomePage from "./pages/HomePage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/error",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <ErrorPage />,
      },
      {
        path: ":categories",
        element: <Products />,
        errorElement: <ErrorPage />,
      },
      {
        path: "categories/:product",
        element: <Product />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "cart/payment",
    element: <Payment />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
