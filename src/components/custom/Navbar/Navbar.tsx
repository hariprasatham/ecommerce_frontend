import { Shirt } from "lucide-react";
import { Menu } from "./Menu";
import { ShoppingBag } from "lucide-react";
import { SideBar } from "./SideBar";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between px-8 py-3 shadow-md ">
      <Link to="/" className="flex gap-2">
        <Shirt />
        <span className="font-semibold">ACME </span>
      </Link>
      <Menu />
      <div className="flex gap-3">
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={() => navigate("/cart")}
        >
          <ShoppingBag />
        </Button>
        <SideBar />
      </div>
    </div>
  );
};

export default Navbar;
