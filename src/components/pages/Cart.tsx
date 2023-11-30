import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import CartItem from "../cartItem/CartItem";
import Bill from "../Bill/Bill";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state: RootState) => state.cartItems);
  const navigate = useNavigate();
  if (cartItems.length === 0) {
    return (
      <main className="flex flex-col justify-center items-center h-screen w-full space-y-8 ">
        <img
          src="/src/assets/svg/undraw_empty.svg"
          alt="empty cart image"
          className="block"
        />
        <h2 className="text-3xl text-center font-semibold">
          Your Cart is Empty
        </h2>
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </main>
    );
  }
  return (
    <main className="flex flex-col">
      <h1 className="text-3xl font-bold text-center mt-3">Cart Items</h1>
      <div className="flex flex-wrap justify-between mx-8 mt-12 w-[70vw] min-h-[80vh]">
        <section className="flex flex-col space-y-5 my-5">
          {cartItems.map((cartItem) => {
            return <CartItem key={cartItem.id} {...cartItem} />;
          })}
        </section>
        <Bill />
      </div>
    </main>
  );
}

export default Cart;
