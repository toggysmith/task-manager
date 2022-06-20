import { Stack, Text } from "@mantine/core";
import TaskItem from "./TaskItem";

export default function TaskList(props) {
  function deleteTask(id) {
    props.setTasks(props.tasks.filter((task, index) => index !== id));
  }

  function getTasks() {
    return props.tasks.map((task, index) => (
      <TaskItem
        title={task.title}
        description={task.description}
        tags={task.tags}
        deleteTask={deleteTask}
        key={index}
        id={index}
      />
    ));
  }

  return (
    <Stack>
      {props.tasks.length === 0 ? (
        <Text size="lg" color="dimmed" weight={400}>
          You have no tasks...
        </Text>
      ) : (
        getTasks()
      )}
    </Stack>
  );
}
