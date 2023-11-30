import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

function Bill() {
  const cartItems = useSelector((state: RootState) => state.cartItems);
  const cartItemLength = cartItems.length;
  const totalPrice = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.quantity * cartItem.price;
  }, 0);
  const navigate = useNavigate();
  const handleCheckout = () => {
    alert("Items purchase completed");
    navigate("/");
  };

  return (
    <div className="border border-black w-[300px] h-[300px] flex flex-col gap-3 p-3 sticky top-10 mb-5 ">
      <h3 className="text-3xl font-bold">Price Details</h3>
      <div className="flex justify-between">
        <span>Price {`${cartItemLength} items`}:</span>
        <span>$ {totalPrice}</span>
      </div>
      <div className="flex justify-between">
        <span>Delivery Charges</span>
        <span>$ {1.44}</span>
      </div>
      <div className="flex justify-between">
        <span>Secure Package Fees</span>
        <span>$ {1.78}</span>
      </div>
      <div>Total : $ {(totalPrice + 1.44 + 1.78).toFixed(2)}</div>
      <Button
        onClick={handleCheckout}
        className="hover:bg-white hover:text-black hover:border-black border border-transparent"
      >
        Checkout
      </Button>
    </div>
  );
}

export default Bill;
