import { collectionItemsProps } from "@/lib/types";
import {
  Card,
  CardTitle,
  CardContent,
  CardFooter,
  CardHeader,
} from "../ui/card";

import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addToCart } from "@/redux/cartSlice";
import { useNavigate } from "react-router-dom";

function ProductCard({ item }: { item: collectionItemsProps }) {
  const { title, image, price } = item;
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    const product = {
      ...item,
      quantity: 1,
    };
    dispatch(addToCart(product));
    alert(`${title} added to cart successfully`);
    navigate("/cart");
  };
  return (
    <Card className="w-[340px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={image}
          alt={title}
          width={250}
          height={250}
          className="max-w-[250px] max-h-[250px] object-contain object-center "
        />
        <h3 className="text-lg font-medium">Price: ${price}</h3>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleAddToCart}
          className="hover:bg-white hover:text-black hover:border-black border border-transparent"
        >
          Add To Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
