import React from "react";
import ProductCard from "../ProductCard/ProductCard";

function Collection({collection_name}:{collection_name:string}) {
    const collections = [
        {
            id: 1,
            title: 'T-Shirts',
            image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            price: 100
        }
    ]
  return (
    <div>
          <h3 className="text-lg font-semibold">{collection_name}</h3>
          <div className="card_container">
              {
                  collections?.map((item) => { 
                      return (
                          <ProductCard item={item} />
                      )
                  })
              }
          </div>
    </div>
  );
}

export default Collection;
