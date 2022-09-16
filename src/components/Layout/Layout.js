import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routes from "../../routes/Routers";
import "../../styles/layout.css";

const Layout = () => {
  
  return (
    <>
      <Header />
        <main className="main">
          <Routes />
        </main>
      <Footer />
    </>
  );
};

export default Layout;
