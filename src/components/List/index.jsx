import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const List = ({ arr }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = arr.map((item) => ({
      id: uuidv4(),
      value: item,
    }));
    setItems(newItems);
  }, [arr]);

  const handleClick = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, value: `!!!${item.value}` } : item
      )
    );
  };

  const arrItems = items.map(({ id, value }) => (
    <li key={id}>
      {value} <button onClick={() => handleClick(id)}>Кликни</button>
    </li>
  ));

  return <ul>{arrItems}</ul>;
};

export default List;
