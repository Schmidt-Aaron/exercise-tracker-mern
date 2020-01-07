import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = props => {
  return (
    <div className="App">
      <Header user={props.user} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
