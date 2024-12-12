import React from "react";
import { List, Card, Image, Space, Typography } from "antd";
import { useSelector } from "react-redux";
import moment from "moment/min/moment-with-locales";
import styles from "./index.module.css";

const { Text, Paragraph } = Typography;

const ItemVideo = ({ video }) => {
  const viewMode = useSelector((state) => state.viewMode.value);

  const formatViews = (views) => {
    if (views >= 1_000_000) {
      return `${(views / 1_000_000).toFixed(1)}M просмотров`;
    } else if (views >= 1_000) {
      return `${(views / 1_000).toFixed(1)}K просмотров`;
    }
    return `${views} просмотров`;
  };

  const timeSince = (date) => moment(date).locale("ru").fromNow();

  return (
    <List.Item>
      {viewMode === "grid" ? (
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
      ) : (
        <Card className={styles.card}>
          <Space direction="horizontal" size="middle" align="start">
            <Image
              className={styles.image}
              alt={video.title}
              src={video.thumbnailMedium}
              preview={false}
            />
            <Space direction="vertical">
              <Paragraph
                strong
                ellipsis={{ rows: 2 }}
                className={styles.paragraph}
              >
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
      )}
    </List.Item>
  );
};

export default ItemVideo;
