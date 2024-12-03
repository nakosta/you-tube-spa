import { Typography } from 'antd';
import { useSelector } from "react-redux";
import { selectTaskCount, selectCompletedTasks, selectIncompleteTasks } from "../../redux/selectors/tasksSelectors";

const { Title } = Typography;

const TaskStats = () => {
  const taskCount = useSelector(selectTaskCount);
  const completedTasks = useSelector(selectCompletedTasks);
  const incompleteTasks = useSelector(selectIncompleteTasks);

  return (
    <>
    <Title level={5}>Общее количество задач: {taskCount}</Title>
    <Title level={5}>Количество выполненых задач: {completedTasks}</Title>
    <Title level={5}>Количество невыполненых задач: {incompleteTasks}</Title>
  </>
  );
};

export default TaskStats
