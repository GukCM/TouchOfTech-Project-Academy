import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo-icon.png";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-gray-800 text-white flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-4" />
        </div>
        <div className="flex space-x-4">
          <Link to="/home" className="hover:text-gray-400">Home</Link>
          <Link to="/register" className="hover:text-gray-400">Sign Up</Link>
          <Link to="/login" className="hover:text-gray-400">Login</Link>
          <Link to="/home/cart" className="hover:text-gray-400">Cart</Link>
        </div>
      </nav>
      
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
