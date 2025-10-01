import { useLoaderData } from "react-router";

const PlantDetilas = () => {
  const { data } = useLoaderData();
  console.log(data.plants);

  return (
    <div>
      <div className=" p-2 md:p-10 mx-auto shadow-sm md:flex  gap-3">
        <div>
          <img
            className=" md:h-100 md:w-100 flex justify-center items-center rounded-2xl object-cover"
            src={data.plants.image}
          />
        </div>

        <div className="card-body w-full">
          <h2 className="card-title text-4xl md:text-6xl">
            {data.plants.name}
          </h2>
          <p className="mt-5 md:mt-10 text-xl md:text-2xl">
            {data.plants.description}
          </p>
          <div className="flex flex-col justify-center items-center mt-4 md:flex-row md:justify-between">
            <p className="text-3xl">Price: {data.plants.price} TK</p>
            <button className="btn text-2xl p-6 mt-4 sm:w-full md:w-auto">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetilas;
<h1>Plant details</h1>;
