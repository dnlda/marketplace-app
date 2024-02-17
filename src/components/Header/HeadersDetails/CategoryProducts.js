import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCategories, setActiveCategory } from "../../../store/actions/CategoriesAction";
import { Grid, Button, Typography } from "@mui/material";
import axios from "axios";

const ProductCategories = () => {
  const [localActiveCategory, setLocalActiveCategory] = useState(null);
  const categoryProduct = useSelector(state => state.categories);
  
  const dispatch = useDispatch();



  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/categories');
        dispatch(setCategories(response.data));
      } catch (error) {
        console.error('Error fetching categories', error);
      }
    };

    fetchCategories();
  }, [dispatch]);

  const handleCategoryClick = (categoryName) => {
    if (localActiveCategory === categoryName) {
      setLocalActiveCategory(null); 
      dispatch(setActiveCategory(null)); 
    } else {
      setLocalActiveCategory(categoryName);
      dispatch(setActiveCategory(categoryName));
    }
  };

  return (
    <Grid
      style={{
        width: "100%",
        height: "28px",
        backgroundColor: "none",
        overflowX: "auto",
        display: "flex",
        whiteSpace: "nowrap",
      }}
    >
      {categoryProduct.categories.map((category) => (
        <Button
          key={category}
          onClick={() => handleCategoryClick(category)}
          style={{
            marginRight: "1px",
            backgroundColor: localActiveCategory === category ? "blue" : "white",
            borderRadius: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Typography
            style={{
              fontSize: "15px",
              fontWeight: 600,
              lineHeight: "18px",
              letterSpacing: "-0.03em",
              textAlign: "left",
              color: localActiveCategory === category ? "white" : "#5C6970",
              textTransform: "lowercase",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {localActiveCategory === category && (
              <span
                style={{
                  display: "inline-block",
                  width: "6px",
                  height: "6px",
                  margin: "0px 6px 0px 6px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                }}
              />
            )}
            {category}
          </Typography>
        </Button>
      ))}
    </Grid>
  );
};

export default ProductCategories;
