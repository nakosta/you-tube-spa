import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "antd";
import SearchInput from "../../components/SearchInput";
import SwitchList from "../../components/SwitchList";
import ListVideo from "../../components/ListVideo";
import SpinLoading from "../../components/SpinLoading";
import {
  selectSearch,
  selectIsLoading,
  selectError,
} from "../../redux/selectors/selectors.jsx";

const SearchVideo = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const search = useSelector(selectSearch);

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
