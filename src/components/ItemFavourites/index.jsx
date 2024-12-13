import { useSelector, useDispatch } from "react-redux";
import { List, Typography } from "antd";
import { FormOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { fetchVideosThunk } from "../../redux/slices/videosSlice";
import { setSearch } from "../../redux/slices/searchSlice";
import {
  deleteRequest,
  setEditRequest,
} from "../../redux/slices/favouritesSlice";
import { setIsModalOpen } from "../../redux/slices/isModalOpenSlice";
import { setRequest } from "../../redux/slices/requestSlice";
import { setStaticRequest } from "../../redux/slices/staticRequestSlice";
import styles from "./index.module.css";
import SaveRequestModal from "../SaveRequestModal";

const { Text } = Typography;

const ItemFavourites = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favourites = useSelector((state) => state.favourites.items);

  const startEditRequest = (id) => {
    const objectRequest = favourites.find((item) => item.id === id);
    dispatch(setEditRequest(objectRequest));
    dispatch(setIsModalOpen(true));
  };

  const executeRequest = (id) => {
    const objectRequest = favourites.find((item) => item.id === id);
    
    console.log(objectRequest);
    
    dispatch(fetchVideosThunk(objectRequest));
    dispatch(setRequest(objectRequest.query));
    dispatch(setStaticRequest(objectRequest.query));
    dispatch(setSearch(true));
    navigate("/");
  };

  return (
    <>
      <List.Item
        key={item.id}
        className={styles.listItem}
        onClick={() => executeRequest(item.id)}
      >
        <Text>
          <strong>{item.title}</strong>
        </Text>
        <div className={styles.actions}>
          <FormOutlined
            className={styles.icon}
            onClick={(e) => {
              e.stopPropagation();
              startEditRequest(item.id);
            }}
          />
          <DeleteOutlined
            className={styles.icon}
            onClick={(e) => {
              e.stopPropagation();
              dispatch(deleteRequest(item.id));
            }}
          />
        </div>
      </List.Item>
      <SaveRequestModal />
    </>
  );
};

export default ItemFavourites;
