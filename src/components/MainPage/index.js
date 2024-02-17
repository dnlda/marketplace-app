import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/actions/CartAction";
import axios from "axios";
import ProductCard from "../ProductCard";
import Header from "../Header";
import { Box, Grid } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [productInCart, setProductInCart] = useState([]);
  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    setProductInCart([...productInCart, product]);
    dispatch(addToCart(product));
  };

  const categoryProduct = useSelector(
    (state) => state.categories.activeCategory
  );
  const cart = useSelector((state) => state.cart);

  const fetchProducts = async (searchTerm = "") => {
    if (categoryProduct == undefined) {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        setProducts(response.data.products);
        setTotal(response.data.total);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    } else {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${categoryProduct}`
        );
        setProducts(response.data.products);
        setTotal(response.data.total);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
  };

  useEffect(() => {
    fetchProducts("", page);
  }, [page, categoryProduct]);

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
          <ProductCard product={product} addToCart={addProductToCart} />
        ))}
      </Grid>
    </Box>
  );
};

export default MainPage;
