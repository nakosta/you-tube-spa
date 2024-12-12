import React from "react";
import { Button, Space, Typography } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppstoreOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { setViewMode } from "../../redux/slices/viewModeSlice";
import styles from "./index.module.css";

const { Title, Text } = Typography;

const SwitchList = () => {
  const viewMode = useSelector((state) => state.viewMode.value);
  const totalResults = useSelector((state) => state.videos.totalResults);
  const staticRequest = useSelector((state) => state.staticRequest.value);
  const dispatch = useDispatch();

  return (
    <Space className={styles.container}>
      <Space>
        <Title level={5} className={styles.title}>
          Видео по запросу «{staticRequest}»
        </Title>
        <Text type="secondary" className={styles.text}>
          {totalResults}
        </Text>
      </Space>
      <Space>
        <Button
          type={viewMode === "list" ? "primary" : "default"}
          icon={<UnorderedListOutlined />}
          onClick={() => dispatch(setViewMode("list"))}
        />
        <Button
          type={viewMode === "grid" ? "primary" : "default"}
          icon={<AppstoreOutlined />}
          onClick={() => dispatch(setViewMode("grid"))}
        />
      </Space>
    </Space>
  );
};

export default SwitchList;
