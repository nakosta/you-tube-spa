import styles from "./index.module.css";
import TaskInput from "../TaskInput";
import TaskList from "../TaskList";
import TaskStats from "../TaskStats";
import LogoutButton from "../LogoutButton";
import withLogger from "../withLogger";

const LoggedTaskInput = withLogger(TaskInput);

const TodoList = () => (
  <>
    <div className={styles.container}>
      {/* Форма добавления задачи */}
      <LoggedTaskInput />
      {/* Список задач */}
      <TaskList />
    </div>
    {/* Кнопка выхода */}
    <LogoutButton />
    <TaskStats />
  </>
);

export default TodoList;
