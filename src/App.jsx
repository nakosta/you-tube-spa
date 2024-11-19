import React from "react";
import TodoList from "./components/TodoList";
import withLogger from "./components/withLogger";
import styles from "./index.module.css";
import { Typography } from "antd";

const { Title } = Typography;

const LoggedTodoList = withLogger(TodoList)

function App() {
  return (
    <>
      <Title className={styles.title}>Get things done!</Title>
      <LoggedTodoList />
    </>
  );
}

export default App;
