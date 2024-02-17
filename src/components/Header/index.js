import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchInput from "./HeadersDetails/SearchInput";
import { ReactComponent as Cart } from "../../img/cart_blue.svg";
import { ReactComponent as CartWhite } from "../../img/cart.svg";
import ProductCategories from "./HeadersDetails/CategoryProducts";
import ModalWindow from "./HeadersDetails/Modal";
import Badge from "@mui/material/Badge";

const Header = ({ onSearch }) => {
  const [isSearchActive, setSearchActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const productInCart = useSelector((state) => state.cart);

  const productArray = productInCart.cart;
  const handleSearchActiveChange = (newValue) => {
    setSearchActive(newValue);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        height: "20px",
        padding: "18px 0px 18px 0px",
        width: "100%",
        backgroundColor: "#EFEEF4",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        gap: "8px",
      }}
    >
      <SearchInput
        onSearch={onSearch}
        onSearchActiveChange={handleSearchActiveChange}
      />
      {!isSearchActive && <ProductCategories />}
      <div
        style={{
          width: "71px",
          height: "24px",
          backgroundColor: productArray.length > 0 ? "blue" : "white",
          color: productArray.length > 0 ? "white" : "blue",
          display: "flex",
          flexDirection: "row",
          position: "relative",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          borderRadius: "4px",
          padding: "2px 4px 2px 4px",
          marginRight: "14px",
        }}
        onClick={handleOpenModal}
      >
        {productArray.length > 0 ? (
          <CartWhite
            style={{ width: "20px", height: "20px", color: "white" }}
          />
        ) : (
          <Cart style={{ width: "20px", height: "20px", color: "blue" }} />
        )}
        <Badge
          badgeContent={productArray.length}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "white",
              color: "blue",
            },
          }}
        >
          Cart
        </Badge>
      </div>
      <ModalWindow open={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
};

export default Header;
