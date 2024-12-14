import React from "react";
import { List } from "antd";
import { useSelector } from "react-redux";
import styles from "./index.module.css";
import ItemFavourites from "../ItemFavourites";
import { selectFavourites } from "../../redux/selectors/selectors.jsx";


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
