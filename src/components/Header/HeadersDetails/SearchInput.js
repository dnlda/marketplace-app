import React, { useState } from "react";
import { TextField, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import debounce from "lodash.debounce";

const SearchInput = ({ onSearch, onSearchActiveChange }) => {
  const [search, setSearch] = useState("");
  const [isSearchActive, setSearchActive] = useState(false);

  const handleSearch = debounce((value) => {
    if (value.length >= 3) {
      onSearch(value);
    }
  }, 500);

  const clearSearch = () => {
    setSearch("");
    onSearch("");
    const newSearchActiveValue = !isSearchActive;
    setSearchActive(newSearchActiveValue);
    if (onSearchActiveChange) {
      onSearchActiveChange(newSearchActiveValue);
    }
  };

  const toggleSearch = () => {
    const newSearchActiveValue = !isSearchActive;
    setSearchActive(newSearchActiveValue);
    if (onSearchActiveChange) {
      onSearchActiveChange(newSearchActiveValue);
    }
  };

  return (
    <
    >
      {isSearchActive ? (
        <TextField
          value={search}
          style={{
            padding: 0,
            height: "28px",
            width: "100%",
            backgroundColor: "white",
            marginLeft: "14px",

          }}
          onChange={(e) => setSearch(e.target.value)}
          onBlur={() => handleSearch(search)}
          placeholder="Search"
          InputProps={{
            style: {
              padding: 0,
              height: "28px",
            },
            endAdornment: (
              <IconButton
                onClick={clearSearch}
                sx={{
                  padding: 0,
                }}
              >
                <CloseIcon />
              </IconButton>
            ),
          }}
        />
      ) : ( 
        <Box
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: 28,
            height: 28,
            borderRadius: 4,
            backgroundColor: "white",
            marginLeft: "14px",
          }}
        >
          <IconButton onClick={toggleSearch}>
            <SearchIcon />
          </IconButton>
        </Box>
      )} 
    </>
  );
};

export default SearchInput;
