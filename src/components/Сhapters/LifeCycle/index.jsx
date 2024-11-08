import { useState, useEffect } from "react";
import { Typography, Image, Button } from "antd";
import styles from "../index.module.css";

const { Title } = Typography;

const LifeCycle = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1)
  }

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  useEffect(() => {
    console.log("componentDidUpdate");
  }, [count]);

  useEffect(() => {
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);

  return (
    <>
      <Image
        className={styles.iconTop}
        src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f9ec.svg"
      />
      <Title>LifeCycle (useEffect)</Title>
      <Title level={3}>В консоли срабатывают: componentDidMount, componentDidUpdate и componentWillUnmount</Title>
      <Button onClick={increment} type="primary" shape="round">
        Обновление
      </Button>
    </>
  );
};

export default LifeCycle;
