import { useState } from 'react';
import { Typography, Image, Button } from "antd";
import styles from "../index.module.css";

const { Title } = Typography;

const State = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1)
  }

  const decrement = () => {
    count > 0 && setCount((count) => count - 1)
  }

  return (
    <>
      <Image
        className={styles.iconTop}
        src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f313.svg"
      />
      <Title>State (useState)</Title>
      <Title level={2}>Значение счётчика: {count}</Title>
      <Button onClick={increment} type="primary" shape="round">
        Увеличить
      </Button>
      <Button onClick={decrement} type="primary" shape="round">
        Уменьшить
      </Button>
    </>
  );
};

export default State;
