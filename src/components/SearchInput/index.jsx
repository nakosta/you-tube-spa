import React from "react";

const SearchInput = ({ inputValue, updateInputValue }) => {
  console.log("SearchInput");
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => updateInputValue(e.target.value)}
      />
    </>
  );
};

export default SearchInput;
