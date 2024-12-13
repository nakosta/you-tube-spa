import React from "react";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import SearchInput from "../../components/SearchInput";
import SwitchList from "../../components/SwitchList";
import ListVideo from "../../components/ListVideo";
import SpinLoading from "../../components/SpinLoading";

const SearchVideo = () => {
  const isLoading = useSelector((state) => state.videos.isLoading);
  const error = useSelector((state) => state.videos.error);
  const search = useSelector((state) => state.search.value);

  return (
    <>
      <SearchInput />
      {isLoading && <SpinLoading />}
      {error && <Typography.Text type="danger">{error}</Typography.Text>}
      {search && <SwitchList />}
      {search && <ListVideo />}
    </>
  );
};

export default SearchVideo;
