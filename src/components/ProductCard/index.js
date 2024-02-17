import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import { ReactComponent as RatingStar } from "../../img/Star.svg";
import { ReactComponent as Cart } from "../../img/cart.svg";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "320px",
  height: "468px",
  padding: "16px",
  border: "1px solid white",
  backgroundColor: "#EFEEF4",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
}));

const Cheap = styled(CardContent)(({ theme }) => ({
  borderRadius: "4px",
  padding: "2px 4px 2px 4px",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "row",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  gap: "4px",
}));

const ProductCard = ({ product }) => {
  const [isDefaultCard, setIsDefaultCard] = useState(true);

  const handleShowDefault = () => {
    setIsDefaultCard(true);
  };

  const handleShowDescription = () => {
    setIsDefaultCard(false);
  };

  const calculateDiscountedPrice = (price, discountPercentage) => {
    const discountedPrice = price - (price * (discountPercentage /  100));
    return Math.floor(discountedPrice);
  };

  return (
    <StyledCard>
      {isDefaultCard && (
        <>
          <Cheap
            style={{
              width: "108px",
              height: "24px",
            }}
          >
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "-0.02em",
                textAlign: "left",
                color: "blue",
              }}
            >
              {product.discountPercentage}%
            </Typography>
            <Typography
              style={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "16px",
                letterSpacing: "-0.02em",
                textAlign: "left",
              }}
            >
              off sale
            </Typography>
          </Cheap>
          <CardMedia
            component="img"
            image={product.thumbnail}
            alt={product.title}
            style={{ width: "288px", height: "288px" }}
          />
        </>
      )}
      <Cheap
        style={{
          width: "62px",
          height: "24px",
        }}
      >
        <RatingStar style={{ width: "20px", height: "20px" }} />
        <Typography
          style={{
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "16px",
            letterSpacing: "-0.02em",
            textAlign: "left",
          }}
        >
          {product.rating}
        </Typography>
      </Cheap>
      <CardContent>
        <Typography
          style={{
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "16px",
            letterSpacing: "-0.02em",
            textAlign: "left",
          }}
        >
          {product.title}
        </Typography>
        {isDefaultCard ? (
          <>
            <Typography
              style={{
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "18px",
                letterSpacing: "-0.02em",
                textAlign: "left",
                display: "inline-block",
              }}
            >
              {product.description.slice(0, 80)}...
              <CardActions style={{ display: "inline-block" }}>
                <Button
                  style={{
                    width: "80px",
                    height: "18px",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "16px",
                    letterSpacing: "-0.02em",
                    textTransform: "none",
                    whiteSpace: "nowrap",
                  }}
                  onClick={handleShowDescription}
                >
                  Read more
                </Button>
              </CardActions>
            </Typography>
          </>
        ) : (
          <>
            <Typography
              style={{
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "18px",
                letterSpacing: "-0.02em",
                textAlign: "left",
                display: "inline-block",
              }}
            >
              {product.description}
              <CardActions style={{ display: "inline-block" }}>
                <Button
                  style={{
                    width: "80px",
                    height: "18px",
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "16px",
                    letterSpacing: "-0.02em",
                    textTransform: "none",
                    whiteSpace: "nowrap",
                  }}
                  onClick={handleShowDefault}
                >
                  Hide describtion
                </Button>
              </CardActions>
            </Typography>
          </>
        )}
      </CardContent>
      <CardContent
        component="div"
        style={{
          width: "288px",
          height: "24px",
          padding: 0,
          display: "flex",
          flexDirection: "row",
          position: "relative",
          alignItems: "center",
          gap: "8px",
         
        }}
      >
        <Typography
          component="div"
          style={{
            width: "71px",
            height: "24px",
            backgroundColor: "blue",
            color: "white",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            borderRadius: "4px",
            padding: "2px 4px 2px 4px",
          }}
        >
          <Cart style={{ width: "20px", height: "20px" }} />${calculateDiscountedPrice(product.price, product.discountPercentage)}
        </Typography>
        <Typography sx={{ textDecoration: "line-through" }}>
          ${product.price}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
