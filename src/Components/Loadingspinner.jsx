import React from "react";
import { ScaleLoader } from "react-spinners";

const Loadingspinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-280px)]">
      <ScaleLoader color="#f6eded" height={100} radius={10} width={15} />
    </div>
  );
};

export default Loadingspinner;
