import { useContext } from "react";
import { CartCountContext } from "../Components/LayOuts/MainLayout";
import ShowCartedItems from "./ShowCartedItems";
const Cart = () => {
  const { cart, setCart } = useContext(CartCountContext);
  let totalPrice = 0;
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center text-center mx-auto w-full">
        {cart.map((plant) => (
          <ShowCartedItems key={plant.id} plant={plant}></ShowCartedItems>
        ))}
      </div>
      <div className="hidden">
        {cart.map((plant) => (totalPrice += plant.price))}
      </div>
      <div className="flex justify-between mt-10">
        <h1 className="text-3xl font-semibold">
          Total Price:- {totalPrice} Taka
        </h1>
        <button className="btn p-6 text-2xl">Pay Now</button>
      </div>
    </div>
  );
};

export default Cart;
