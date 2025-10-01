import { useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import PlantCart from "../Components/plantCart";
import { useLoaderData } from "react-router";

const Home = () => {
  // const [plants, setPlants] = useState([]);
  const plantData = useLoaderData();

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center  md:p-5">
      {plantData.plants.map((plant) => (
        <PlantCart key={plant?.id} plant={plant}></PlantCart>
      ))}
    </div>
  );
};
export default Home;
