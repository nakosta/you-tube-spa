import React from "react";
import { useSelector } from "react-redux";
import { List } from "antd";
import ItemFavourites from "../ItemFavourites";
import { selectFavourites } from "../../redux/selectors/selectors.jsx";
import styles from "./index.module.css";

const ListFavourites = () => {
  const favourites = useSelector(selectFavourites);

  return (
    <List
      className={styles.list}
      bordered
      dataSource={favourites}
      renderItem={(item) => <ItemFavourites item={item} />}
    />
  );
};

export default ListFavourites;
