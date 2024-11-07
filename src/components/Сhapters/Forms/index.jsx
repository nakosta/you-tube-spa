import { Typography, Image } from "antd";
import styles from "../index.module.css";

const { Text, Title, Paragraph } = Typography;

const Forms = () => {
  return (
    <>
      <Image
        className={styles.iconTop}
        src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4c4.svg"
      />
      <Title>
        Формы и их обработка в React.
        <br />
        react-hook-form VS formik
      </Title>
    </>
  );
};

export default Forms;
