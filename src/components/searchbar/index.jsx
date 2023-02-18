import React, { useState } from "react";
import { Search, Close } from "@material-ui/icons";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
  };

  return (
    <div className="search-bar">
      <div className="search-bar-icon">
        <Search />
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {inputValue && (
        <div className="search-bar-clear" onClick={handleClearInput}>
          <Close />
        </div>
      )}
    </div>
  );
};

export default SearchBar;