import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login/loginpage">Login</Link>
      {/* <Link to="/dashboard/dashboardpage">Dashboard</Link> */}
    </nav>
  );
}

export default Nav;
