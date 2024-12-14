import React from "react";
import { List } from "antd";
import { useSelector } from "react-redux";
import {
  selectVideos,
  selectViewMode,
} from "../../redux/selectors/selectors.jsx";
import ItemVideoGrid from "../ItemVideoGrid";
import ItemVideoList from "../ItemVideoList";

const ListVideo = () => {
  const videos = useSelector(selectVideos);
  const viewMode = useSelector(selectViewMode);

  return (
    <List
      grid={viewMode === "grid" ? { gutter: 16, column: 4 } : null}
      dataSource={videos}
      renderItem={(video) => (
        <List.Item>
          {viewMode === "grid" ? (
            <ItemVideoGrid video={video} />
          ) : (
            <ItemVideoList video={video} />
          )}
        </List.Item>
      )}
    />
  );
};

export default ListVideo;
