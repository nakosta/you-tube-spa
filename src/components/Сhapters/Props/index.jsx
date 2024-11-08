import { Typography, Image } from "antd";
import styles from "../index.module.css";

const { Title } = Typography;

const Props = () => {
  return (
    <>
      <Image
        className={styles.iconTop}
        src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f960.svg"
      />
      <Title>Props</Title>
      <Props2 name={"Kostya"} age={27} city={"Mozyr"} />
    </>
  );
};

const Props2 = ({ name, age, city }) => {
  return (
    <>
      <Title level={5}>
        Данные ниже были получены из другого компонента как пропсы:
      </Title>
      Имя - {name}
      <br />
      Возраст - {age}
      <br />
      Город - {city}
    </>
  );
};

export default Props;
