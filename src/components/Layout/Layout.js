import React from "react";
import "./layout.scss";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div className="container">
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
