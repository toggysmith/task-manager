import { Group, Paper, Text, Title, ActionIcon, Badge } from "@mantine/core";

import { FaTrash } from "react-icons/fa";

export default function TaskItem(props) {
  function renderTags() {
    return props.tags.map((tag) => (
      <Badge color="red" key={tag}>
        {tag}
      </Badge>
    ));
  }

  return (
    <Paper shadow="sm" p="lg" withBorder>
      <Group style={{ float: "left" }} noWrap>
        <div>
          <Group>
            <Title order={5}>{props.title}</Title>
            {renderTags()}
          </Group>
          <pre>
            <Text size="sm" color="dimmed" weight={400}>
              {props.description}
            </Text>
          </pre>
        </div>
      </Group>
      <Group style={{ float: "right" }}>
        <ActionIcon
          color="red"
          size="lg"
          variant="light"
          onClick={() => props.deleteTask(props.id)}
        >
          <FaTrash />
        </ActionIcon>
      </Group>
    </Paper>
  );
}
