import { useState } from "react";
import {
  MantineProvider,
  Container,
  Stack,
  Title,
  Button,
} from "@mantine/core";
import TaskList from "./components/TaskList";
import NewTaskModal from "./components/NewTaskModal";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [tasks, setTasks] = useState([]);

  function addTask(title, description, tags) {
    setTasks([
      { title: title, description: description, tags: tags },
      ...tasks,
    ]);
  }

  return (
    <MantineProvider>
      <Container size="sm" style={{ marginTop: "50px" }}>
        <Stack>
          <Title>My Tasks</Title>
          <TaskList tasks={tasks} setTasks={setTasks} />
          <Button onClick={() => setOpened(true)}>New Task</Button>
        </Stack>
      </Container>
      <NewTaskModal opened={opened} setOpened={setOpened} addTask={addTask} />
    </MantineProvider>
  );
}
