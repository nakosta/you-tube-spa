import React from "react";
import { Typography } from "antd";
import ListFavourites from "../ListFavourites";

const Favourites = () => {
  return (
    <>
      <Typography.Title level={2}>Избранное</Typography.Title>
      <ListFavourites />
    </>
  );
};

export default Favourites;
