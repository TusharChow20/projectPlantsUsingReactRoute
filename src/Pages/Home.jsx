import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const Home = () => {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/plants")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <p>Plant Carts</p>
      {plants.map((plant) => {
        <p>{plant}</p>;
      })}
    </div>
  );
};
export default Home;
