import React from "react";

import Navbar from "./Navbar";

import "../styles/components/Layout.scss";

const Layout = (props) => {
  return (
    <div className="Wrapper">
      <Navbar></Navbar>
      {props.children}
    </div>
  );
};

export default Layout;
