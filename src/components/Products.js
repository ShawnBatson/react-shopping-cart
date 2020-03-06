import React, { useContext } from "react";
import ProductContext from "../contexts/ProductContext";

import Product from "./Product";

const Products = props => {
  useContext(productContext);
  return (
    <div className="products-container">
      {props.products.map(product => (
        <Product key={product.id} product={product} addItem={props.addItem} />
      ))}
    </div>
  );
};

export default Products;
