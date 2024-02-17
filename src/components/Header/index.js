import React, { useState } from "react";
import SearchInput from "./HeadersDetails/SearchInput"; // Импортируем SearchInput
import { ReactComponent as Cart } from "../../img/cart_blue.svg";

const Header = ({ onSearch }) => {
  const [isSearchActive, setSearchActive] = useState(false);

  console.log(isSearchActive);

  const handleSearchActiveChange = (newValue) => {
    setSearchActive(newValue);
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
      {!isSearchActive && (
        <div
          style={{ width: "100%", height: "28px", backgroundColor: "white" }}
        >
          {" "}
          All PHONES TITITIT PARFUME
        </div>
      )}
      <div
        style={{
          width: "71px",
          height: "24px",
          backgroundColor: "white",
          color: "blue",
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
      >
        <Cart style={{ width: "20px", height: "20px", color: "blue" }} />
        Cart
      </div>
    </header>
  );
};

export default Header;
