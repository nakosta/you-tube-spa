import React, { useEffect } from "react";
import { List } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { axiosTasks } from "../../redux/thunks/tasksThunks";
import styles from "./index.module.css";
import TaskItem from "../TaskItem";
import withLogger from "../withLogger";

const LoggedTaskItem = withLogger(TaskItem);

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(axiosTasks());
  }, [dispatch]);

  return (
    <List
      className={styles.list}
      bordered
      dataSource={tasks}
      renderItem={(item) => <LoggedTaskItem item={item} />}
    />
  );
};

export default TaskList;
