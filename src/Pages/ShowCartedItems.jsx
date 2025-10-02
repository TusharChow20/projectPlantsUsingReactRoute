import { Trash } from "lucide-react";
import React from "react";

const ShowCartedItems = ({ plant }) => {
  return (
    <div className="shadow-xl w-full">
      <div className="text-center flex justify-between   gap-20 text-3xl p-10 ">
        <h1>{plant.name}</h1>
        <p>Price:- {plant.price}</p>
        <a href="">
          <Trash />
        </a>
      </div>
    </div>
  );
};

export default ShowCartedItems;
