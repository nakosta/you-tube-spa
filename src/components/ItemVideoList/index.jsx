import React from "react";
import { Card, Image, Space, Typography } from "antd";
import { formatViews, timeSince } from "../../utils/utils.jsx";
import styles from "./index.module.css";

const { Text, Paragraph } = Typography;

const ItemVideoList = ({ video }) => {
  return (
    <Card className={styles.card}>
      <Space direction="horizontal" size="middle" align="start">
        <Image
          className={styles.image}
          alt={video.title}
          src={video.thumbnailMedium}
          preview={false}
        />
        <Space direction="vertical">
          <Paragraph strong ellipsis={{ rows: 2 }} className={styles.paragraph}>
            {video.title}
          </Paragraph>
          <Text type="secondary">
            {formatViews(video.viewCount)} • {timeSince(video.publishedAt)}
          </Text>
          <Paragraph type="secondary" ellipsis={{ rows: 2 }}>
            {video.channelTitle}
          </Paragraph>
        </Space>
      </Space>
    </Card>
  );
};

export default ItemVideoList;
