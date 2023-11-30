import React from "react";
import ProductCard from "../../ProductCard/ProductCard";
import { collectionItemsProps } from "@/lib/types";

interface CollectionProps {
  collectionItems: collectionItemsProps[];
  collection_name: string;
}

function Collection({ collection_name, collectionItems }: CollectionProps) {
  // const collections = [
  //     {
  //         id: 1,
  //         title: 'T-Shirts',
  //         image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //         price: 100
  //     }
  // ]
  return (
    <div className="max-w-screen mx-[50px] mb-[50px]">
      <h3 className="text-2xl font-semibold text-center my-4">
        {collection_name}
      </h3>
      <div className="flex gap-6 justify-center flex-wrap">
        {collectionItems?.map((item, index) => {
          return <ProductCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Collection;
