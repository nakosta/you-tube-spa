import React from "react";

const SearchInput = React.memo(({ inputValue, updateInputValue }) => {
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
});

export default SearchInput;
