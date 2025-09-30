import React from "react";
import { Outlet } from "react-router";
import NavBar from "../NavBar";
import Footer from "../Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <main className="min-h-[calc(100vh-285px)]">
        <p>parrent</p>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
