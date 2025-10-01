import React from "react";
import { Outlet, useNavigation } from "react-router";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Loadingspinner from "../Loadingspinner";
// import Loadingspinner from "../Loadingspinner";

const MainLayout = () => {
  const navigation = useNavigation();
  console.log(navigation.state);

  return (
    <div>
      <NavBar></NavBar>
      {navigation.state === "loading" ? (
        <Loadingspinner />
      ) : (
        <main className="min-h-[calc(100vh-287px)]">
          <Outlet></Outlet>
        </main>
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
