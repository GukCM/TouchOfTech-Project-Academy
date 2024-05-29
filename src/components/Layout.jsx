import React from "react";
import { Outlet, Link,useLocation } from "react-router-dom";
import logo from "../assets/logo-icon.png";

const Layout = () => {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col sticky">
      <nav className=" bg-white text-black flex items-center justify-between py-4 px-14 sticky top-0 left-0 w-full z-10">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 mr-4" />
        </div>
        <div className="flex space-x-4">
          <Link to="/home" className= {`hover:text-green-200 transition-all ${location.pathname === '/home' ? 'relative text-green-500' : ''}`}>
            Home
            {location.pathname === "/home" && (
              <span className="absolute h-0.5 bg-green-500 bottom-0 left-0 w-full"></span>
            )} 
          </Link>
          
          <Link to="/register" className="hover:text-green-200 transition-all">Sign Up</Link>
          <Link to="/" className="hover:text-green-200 transition-all">Login</Link>
          <Link to="/home/cart" className={`hover:text-green-200 transition-all ${location.pathname === '/home/cart' ? 'relative text-green-500' : ''}`}>
            Cart
            {location.pathname === "/home/cart" && (
              <span className="absolute h-0.5 bg-green-500 bottom-0 left-0 w-full"></span>
            )} 
          </Link>

          <Link to= "/home/products" className={`hover:text-green-200 transition-all ${location.pathname === '/home/products' ? 'relative text-green-500' : ''}`}>
            Products
            {location.pathname === "/home/products" && (
              <span className="absolute h-0.5 bg-green-500 bottom-0 left-0 w-full"></span>
            )} 
          </Link>
        </div>
      </nav>
      
      <main className="flex-grow px-14">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
