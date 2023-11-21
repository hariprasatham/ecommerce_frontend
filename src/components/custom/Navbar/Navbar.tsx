import React from "react";
import { Shirt } from "lucide-react";
import { Menu } from "./Menu";
import { ShoppingBag } from "lucide-react";
import { SideBar } from "./SideBar";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-3">
      <Shirt />
      <Menu />
      <div className="flex gap-3">
        <ShoppingBag />
        <SideBar/>
      </div>
    </div>
  );
};

export default Navbar;
