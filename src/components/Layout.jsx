import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo-icon.png";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col md:sticky">
      <nav className="bg-gray-100 text-black flex items-center py-4 px-4 md:px-8 lg:px-16 sticky top-0 left-0 w-full z-10">
        <div className="flex items-center">
          <Link
            to="/"
            className={`hover:text-green-200 transition-all ${
              location.pathname === "/" ? "relative text-green-500" : ""
            }`}
          >
            <img src={logo} alt="Logo" className="h-10 mr-4" />
          </Link>
        </div>
        <div className="flex space-x-4 md:space-x-8 lg:space-x-12 w-full justify-center">
          <Link
            to="/"
            className={`hover:text-green-200 transition-all font-semibold ${
              location.pathname === "/" ? "relative text-green-500" : ""
            }`}
          >
            Home
            {location.pathname === "/" && (
              <span className="absolute h-0.5 bg-green-500 bottom-0 left-0 w-full"></span>
            )}
          </Link>

          <Link
            to="/register"
            className="hover:text-green-200 transition-all font-semibold"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="hover:text-green-200 transition-all font-semibold"
          >
            Login
          </Link>
          <Link
            to="/cart"
            className={`hover:text-green-200 transition-all font-semibold ${
              location.pathname === "/cart" ? "relative text-green-500" : ""
            }`}
          >
            Cart
            {location.pathname === "/cart" && (
              <span className="absolute h-0.5 bg-green-500 bottom-0 left-0 w-full"></span>
            )}
          </Link>

          <Link
            to="/products"
            className={`hover:text-green-200 transition-all font-semibold ${
              location.pathname === "/products" ? "relative text-green-500" : ""
            }`}
          >
            Products
            {location.pathname === "/products" && (
              <span className="absolute h-0.5 bg-green-500 bottom-0 left-0 w-full"></span>
            )}
          </Link>
        </div>
      </nav>

      <main className="flex-grow md:px-4 lg:px-16 mt-12">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;


