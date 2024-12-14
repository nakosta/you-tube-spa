import React from "react";
import { Input, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setRequest } from "../../redux/slices/requestSlice";
import { setSearch } from "../../redux/slices/searchSlice";
import { fetchVideosThunk } from "../../redux/slices/videosSlice";
import { setIsModalOpen } from "../../redux/slices/isModalOpenSlice";
import { setStaticRequest } from "../../redux/slices/staticRequestSlice";
import { HeartOutlined } from "@ant-design/icons";
import SaveRequestModal from "../SaveRequestModal";
import styles from "./index.module.css";
import { selectRequest } from "../../redux/selectors/selectors.jsx";
import { selectSearch } from "../../redux/selectors/selectors.jsx";

const { Search } = Input;
const { Title } = Typography;

const SearchInput = () => {
  const request = useSelector(selectRequest);
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  const onSearch = (value) => {
    if (value.trim()) {
      dispatch(fetchVideosThunk({ query: value }));
      dispatch(setSearch(true));
      dispatch(setStaticRequest(value));
    }
  };

  return (
    <>
      <div className={search ? "" : styles.container}>
        <Title level={2}>Поиск видео</Title>
        <Search
          className={search ? "" : styles.inputSearch}
          placeholder="Введите запрос"
          enterButton="Найти"
          size="large"
          value={request}
          onChange={(e) => dispatch(setRequest(e.target.value))}
          onSearch={onSearch}
          suffix={
            <HeartOutlined
              className={`${styles.heartOutlined} ${
                search ? styles.visible : styles.hidden
              }`}
              onClick={() => {
                if (request.trim()) {
                  dispatch(setIsModalOpen(true));
                }
              }}
            />
          }
        />
      </div>
      <SaveRequestModal />
    </>
  );
};

export default SearchInput;
