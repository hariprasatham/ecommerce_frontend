import { Trash2 } from "lucide-react";
import { cartItemsProps } from "@/lib/types";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "@/redux/cartSlice";
function CartItem({ title, quantity, price, image, id }: cartItemsProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleIncrement = () => {
    dispatch(incrementQuantity(id));
  };
  const handleDecrement = () => {
    dispatch(decrementQuantity(id));
  };
  return (
    <div className="flex flex-col ">
      <div className="flex flex-wrap  justify-center ">
        <img
          src={image}
          alt={title}
          className="block w-[200px] h-[200px] object-contain "
        />
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p>{price}</p>
          <div className="flex gap-2 items-center">
            <Button
              size="icon"
              disabled={quantity === 1}
              onClick={handleDecrement}
              className="hover:bg-white hover:text-black hover:border-black border border-transparent"
            >
              -
            </Button>
            <span>{quantity}</span>
            <Button
              size="icon"
              onClick={handleIncrement}
              className="hover:bg-white hover:text-black hover:border-black border border-transparent"
            >
              +
            </Button>
            <Button
              size="icon"
              variant={"destructive"}
              onClick={() => dispatch(removeFromCart(id))}
              aria-label="delete from cart"
              className="hover:bg-white hover:text-black hover:border-black border border-transparent"
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
