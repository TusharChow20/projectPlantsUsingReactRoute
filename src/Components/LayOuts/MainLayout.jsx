import React from "react";
import { Outlet, useNavigation } from "react-router";
import NavBar from "../NavBar";
import Footer from "../Footer";

const MainLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);

  return (
    <div>
      <NavBar></NavBar>
      {navigation?.id='loading'? }
      <Footer />
    </div>
  );
};

export default MainLayout;
