import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../ProductCard";
import Header from "../Header";
import { Box, Grid } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const fetchProducts = async (searchTerm = "") => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchTerm}`
      );
      setProducts(response.data.products);
      setTotal(response.data.total);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchProducts("", page);
  }, [page]);

  const handleSearch = (searchTerm) => {
    setPage(1);
    fetchProducts(searchTerm, page);
  };

  return (
    <Box
      style={{
        
        width: "100%",
        backgroundColor: "#EFEEF4",
        minHeight: "100vh",
      }}
    >
      <Header onSearch={handleSearch} />
      {total === 0 && (
        <Box>
          <SentimentVeryDissatisfiedIcon />
          <p>Ничего не найдено, попробуйте изменить запрос.</p>
        </Box>
      )}
      <Grid
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </Grid>
    </Box>
  );
};

export default MainPage;
