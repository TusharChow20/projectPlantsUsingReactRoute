import { useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import PlantCart from "../Components/plantCart";

const Home = () => {
  const [plants, setPlants] = useState([]);

  return (
    <div>
      {plants.map((plant) => {
        return <PlantCart key={plant.id} plant={plant}></PlantCart>;
      })}
    </div>
  );
};
export default Home;
