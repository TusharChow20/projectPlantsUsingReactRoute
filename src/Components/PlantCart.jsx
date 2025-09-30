import React from "react";
import { Link } from "react-router";

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

          <Link
            to={`/plant-details/${plant.id}`}
            className="card-actions justify-end"
          >
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantCart;
