import React from "react";
import Item from "./Item";

const Itemlist = ({ product }) => {
  return (
    <div className="flex flex-wrap justify-center max-w-full">
      {product.map((prod) => (
        <Item prod={prod} key={prod.id} />
      ))}
    </div>
  );
};

export default Itemlist;
