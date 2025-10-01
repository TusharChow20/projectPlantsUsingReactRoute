import { useLoaderData } from "react-router";

const PlantDetilas = () => {
  const { data } = useLoaderData();
  console.log(data.plants);

  return (
    <div>
      <div className="p-10 mx-auto shadow-sm md:flex  gap-3">
        <div>
          <img
            className="h-100 w-100 flex justify-center items-center text-2xl text-center  rounded-2xl"
            src={data.plants.image}
          />
        </div>

        <div className="card-body w-full">
          <h2 className="card-title text-6xl">{data.plants.name}</h2>
          <p className="mt-10 text-2xl">{data.plants.description}</p>
          <div className="flex justify-between">
            <p className="text-3xl">Price: {data.plants.price} TK</p>
            <button className="btn text-2xl p-6">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetilas;
<h1>Plant details</h1>;
