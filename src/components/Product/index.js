import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard";

const ProductsComponent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        if (Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          console.error("Data is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsComponent;
