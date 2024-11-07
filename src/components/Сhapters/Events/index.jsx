import { Typography, Image } from "antd";
import styles from "../index.module.css";

const { Text, Title, Paragraph } = Typography;

const Events = () => {
  return (
    <>
      <Image
        className={styles.iconTop}
        src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f401.svg"
      />
      <Title>Events и как работать с ними</Title>
    </>
  );
};

export default Events;
