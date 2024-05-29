import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/logo-icon.png";

const Layout = () => {
  return (
    <div>
      <aside>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <p>Home</p>
        </div>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
