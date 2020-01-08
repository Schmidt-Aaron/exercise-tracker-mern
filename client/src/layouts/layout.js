import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = props => {
  const { children, logout } = props;
  return (
    <div className="App">
      <Header logout={logout} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
