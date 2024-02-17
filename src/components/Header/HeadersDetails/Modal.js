import React from "react";
import { ReactComponent as Cart } from "../../../img/cart_blue.svg";
import { Modal, Box, Button } from "@mui/material";

const ModalWindow = ({ open, onClose }) => {
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
    justifyContent: "center",
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
        <p>cart is empty :&#40;</p>
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
          }}
        >
          Back to products
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalWindow;
