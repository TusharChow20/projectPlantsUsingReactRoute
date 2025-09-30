import React from "react";

const PlantCart = ({ plant }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="h-80">
          <img src={plant.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{plant.name}</h2>
          <p>{plant.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantCart;
