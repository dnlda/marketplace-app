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
import { useSelector } from "react-redux";
import { ReactComponent as RatingStar } from "../../img/Star.svg";
import { ReactComponent as Cart } from "../../img/cart.svg";
import { ReactComponent as CartBlue } from "../../img/cart_blue.svg";

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
  justifyContent: "space-between",
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

const ProductCard = ({ product, addToCart }) => {
  const [isDefaultCard, setIsDefaultCard] = useState(true);
  const [activeDot, setActiveDot] = useState(0);
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [isHovered, setIsHovered] = useState(false);

  const productInCart = useSelector((state) => state.cart);

  const productArray = productInCart.cart;

  const isProductInCart = () => {
    return productArray.some(
      (productArray) => productArray.title === product.title
    );
  };

  const isInCart = isProductInCart();
  console.log(isInCart);

  const handleShowDefault = () => {
    setIsDefaultCard(true);
  };

  const handleShowDescription = () => {
    setIsDefaultCard(false);
  };

  const handleDotClick = (index) => {
    setActiveDot(index);
    setActiveImage(product.images[index]);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const discountedPrice = Math.trunc(
    product.price * (1 - product.discountPercentage / 100)
  );

  const renderDots = () => {
    if (!isHovered || product.images.length <= 1) return null;

    const totalDots = product.images.length;
    return (
      <div
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          marginBottom: "10px",
        }}
      >
        {Array.from({ length: totalDots }, (_, i) => (
          <div
            key={i}
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: activeDot === i ? "#5C6970" : "white",
              border: "1px solid #5C6970",
              borderRadius: "50%",
              margin: "0  4px",
              cursor: "pointer",
            }}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    );
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
            component="div"
            image={activeImage}
            alt={product.title}
            style={{ width: "288px", height: "288px", position: "relative" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {renderDots()}
          </CardMedia>
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
        <Button
          component="div"
          style={{
            width: isInCart ? "fit-content" : "71px",
            height: "24px",
            backgroundColor: isInCart ? "white" : "blue",
            color: isInCart ? "blue" : "white",
            display: "flex",
            flexDirection: "row",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            textTransform: "lowercase",
            borderRadius: "4px",
            padding: "2px 4px 2px 4px",
          }}
          onClick={() => {
            // handleAddToCart();
            addToCart(product);
          }}
        >
          {isInCart ? (
            <CartBlue style={{ width: "20px", height: "20px" }} />
          ) : (
            <Cart style={{ width: "20px", height: "20px" }} />
          )}
          {isInCart ? "added to cart" : `$${discountedPrice}`}
        </Button>
        <Typography sx={{ textDecoration: "line-through" }}>
          ${product.price}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ProductCard;
