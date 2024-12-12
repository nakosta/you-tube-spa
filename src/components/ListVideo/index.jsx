import React from "react";
import { List } from "antd";
import { useSelector } from "react-redux";
import ItemVideo from "../ItemVideo";

const ListVideo = () => {
  const videos = useSelector((state) => state.videos.items);
  const viewMode = useSelector((state) => state.viewMode.value);

  return (
    <List
      grid={viewMode === "grid" ? { gutter: 16, column: 4 } : null}
      dataSource={videos}
      renderItem={(video) => <ItemVideo video={video} />}
    />
  );
};

export default ListVideo;
