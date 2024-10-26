import React, { useMemo } from "react";

const ItemList = React.memo(({ inputValue, arr }) => {
  console.log("ItemList");
  const filteredArr = useMemo(() => {
    return arr.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [inputValue, arr]);

  const arrItems = filteredArr.map(({ id, name }) => <li key={id}>{name}</li>);

  return <ol>{arrItems}</ol>;
});

export default ItemList;
