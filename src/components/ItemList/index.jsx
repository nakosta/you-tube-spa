import React, { useMemo } from "react";

const ItemList = ({ inputValue, arr }) => {
  const filteredArr = useMemo(() => {
    return arr.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [inputValue, arr]); // зависимости: изменится, если изменится inputValue или arr

  const arrItems = filteredArr.map(({ id, name }) => <li key={id}>{name}</li>);

  return <ol>{arrItems}</ol>;
};

export default ItemList;
