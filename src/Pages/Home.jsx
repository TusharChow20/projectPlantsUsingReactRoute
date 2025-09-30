import { useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import PlantCart from "../Components/plantCart";
import { useLoaderData } from "react-router";

const Home = () => {
  const [plants, setPlants] = useState([]);
  const plantData = useLoaderData();

  return (
    <div className="grid grid-cols-3">
      {plantData.plants.map((plant) => {
        return <PlantCart key={plant?.id} plant={plant}></PlantCart>;
      })}
    </div>
  );
};
export default Home;
