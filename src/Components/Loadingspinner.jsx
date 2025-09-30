import React from "react";
import { PacmanLoader } from "react-spinners";

const Loadingspinner = () => {
  return (
    <div className="flex justify-center items-center text-7xl">
      <PacmanLoader />
    </div>
  );
};

export default Loadingspinner;
