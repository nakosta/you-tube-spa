import React from "react";
import { Card, Image, Space, Typography } from "antd";
import styles from "./index.module.css";
import { formatViews, timeSince } from "../../utils/utils.jsx";

const { Text, Paragraph } = Typography;

const ItemVideoGrid = ({ video }) => {
  return (
    <Card
      className={styles.card}
      cover={
        <Image
          className={styles.image}
          alt={video.title}
          src={video.thumbnailMedium}
          preview={false}
        />
      }
    >
      <Space direction="vertical">
        <Paragraph
          className={styles.paragraph}
          strong
          ellipsis={{
            rows: 2,
            tooltip: video.title,
          }}
        >
          {video.title}
        </Paragraph>
        <Paragraph
          className={styles.paragraph}
          type="secondary"
          ellipsis={{
            rows: 2,
            tooltip: video.channelTitle,
          }}
        >
          {video.channelTitle}
        </Paragraph>
        <Text type="secondary">
          {formatViews(video.viewCount)} • {timeSince(video.publishedAt)}
        </Text>
      </Space>
    </Card>
  );
};

export default ItemVideoGrid;
