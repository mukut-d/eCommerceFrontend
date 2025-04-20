import React from "react";
import { homeProducts } from "../../constants/data";
import Card from "./Card";

const Products = () => {
  return (
    <div className="flex flex-1  flex-wrap justify-center">
      {homeProducts?.map((item, index) => {
        return (
          <Card
            key={index}
            name={item?.name}
            icon={item?.icon}
            price={item?.price}
          />
        );
      })}
    </div>
  );
};

export default Products;
