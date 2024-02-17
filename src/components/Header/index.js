import React from "react";
import SearchInput from "./HeadersComponent/SearchInput"; // Импортируем SearchInput

const Header = ({ onSearch }) => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "28px",
        padding: "18px 0px 18px 0px",
        width: "100%",
        backgroundColor: "#EFEEF4",
        position: "sticky", // Добавляем sticky position
        top:  0, // Указываем, что элемент должен прилипнуть к верху
        zIndex:  1000,
      }}
    >
      <SearchInput onSearch={onSearch} />
    </header>
  );
};

export default Header;
