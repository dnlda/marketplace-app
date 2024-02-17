import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../../../store/actions/CartAction";
import { ReactComponent as Cart } from "../../../img/cart_blue.svg";
import { Modal, Box, Button, Typography } from "@mui/material";

const ModalWindow = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const productInCart = useSelector((state) => state.cart);

  const productArray = productInCart.cart;

  const totalPrice = productArray.reduce(
    (sum, product) => sum + product.price,
    0
  );

  const modalStyle = {
    position: "fixed",
    top: 0,
    right: 0,
    width: "320px",
    height: "100%",
    backgroundColor: "white",
    border: "none",
    zIndex: 2000,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <div
          style={{
            width: "71px",
            height: "24px",
            backgroundColor: "white",
            color: "blue",
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            top: "10px",
            left: "0",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            borderRadius: "4px",
            padding: "2px  4px  2px  4px",
            marginRight: "14px",
          }}
        >
          <Cart style={{ width: "20px", height: "20px", color: "blue" }} />
          Cart
        </div>
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "none",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          &times;
        </button>
        <div style={{ marginTop: "60px" }}>
          {productArray.length > 0 ? (
            productArray.map((product, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "280px",
                  height: "60px",
                  marginBottom: "10px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    width="60px"
                    height="60px"
                  />
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      style={{
                        marginLeft: "8px",
                        fontSize: "14px",
                        fontWeight: 500,
                        lineHeight: "16px",
                        letterSpacing: "-0.02em",
                        textAlign: "left",
                      }}
                    >
                      {product.title}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: "72px",
                        height: "24px",
                        borderRadius: "4px",
                        backgroundColor: "#EFEEF4",
                        justifyContent: "space-between",
                        margin: "3px 0px 0px 3px",
                      }}
                    >
                      <button
                        style={{
                          width: "16px",
                          height: "16px",
                          backgroundColor: "none",
                          border: "none",
                        }}
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        -
                      </button>
                      <span
                        style={{
                          width: "16px",
                          height: "16px",
                          backgroundColor: "none",
                          border: "none",
                        }}
                      >
                        1
                      </span>
                      <button
                        style={{
                          width: "16px",
                          height: "16px",
                          backgroundColor: "none",
                          border: "none",
                        }}
                        onClick={() => dispatch(addToCart(product))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <Typography
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "16px",
                    letterSpacing: "-0.02em",
                    textAlign: "right",
                  }}
                >
                  ${product.price}
                </Typography>
              </div>
            ))
          ) : (
            <p>cart is empty :&#40;</p>
          )}
        </div>
        {productArray.length > 0 ? (
          <div
            style={{
              width: "280px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                width: "280px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "16px",
                  letterSpacing: "-0.02em",
                  textAlign: "left",
                  marginTop: "60px",
                  marginBottom: "10px",
                }}
              >
                {productArray.length} position
              </Typography>
              <Typography
                style={{
                  fontSize: "24px",
                  fontWeight: 500,
                  lineHeight: "28px",
                  letterSpacing: "-0.02em",
                }}
              >
                ${totalPrice.toFixed(2)}
              </Typography>
            </div>
            <Button
              variant="contained"
              style={{
                backgroundColor: "blue",
                width: "280px",
                height: "40px",
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                textTransform: "lowercase",
              }}
            >
              place an order
            </Button>
          </div>
        ) : (
          <Button
            variant="contained"
            onClick={onClose}
            style={{
              backgroundColor: "blue",
              width: "280px",
              height: "40px",
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              textTransform: "lowercase",
            }}
          >
            back to products
          </Button>
        )}
      </Box>
    </Modal>
  );
};

export default ModalWindow;
