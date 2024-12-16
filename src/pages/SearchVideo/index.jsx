import React from "react";
import { Typography } from "antd";
import { useSelector } from "react-redux";
import SearchInput from "../../components/SearchInput";
import SwitchList from "../../components/SwitchList";
import ListVideo from "../../components/ListVideo";
import SpinLoading from "../../components/SpinLoading";
import {
  selectIsLoading,
  selectError,
} from "../../redux/selectors/selectors.jsx";
import { selectSearch } from "../../redux/selectors/selectors.jsx";

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
