import React from "react";
import { useSelector } from "react-redux";
import { List } from "antd";
import ItemVideoGrid from "../ItemVideoGrid";
import ItemVideoList from "../ItemVideoList";
import {
  selectVideos,
  selectViewMode,
} from "../../redux/selectors/selectors.jsx";

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
