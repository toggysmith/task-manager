import {
  Modal,
  Textarea,
  Group,
  TextInput,
  Button,
  Chips,
  Chip,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function NewTaskModal(props) {
  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      tags: [],
    },
  });

  function createNewTask(title, description, tags) {
    props.addTask(title, description, tags);
    props.setOpened(false);
    form.reset();
  }

  return (
    <Modal
      opened={props.opened}
      onClose={() => props.setOpened(false)}
      size="lg"
      title="Create a task..."
    >
      <form
        onSubmit={form.onSubmit((values) =>
          createNewTask(values.title, values.description, values.tags)
        )}
      >
        <TextInput
          label="Title"
          type="text"
          variant="filled"
          placeholder="Title"
          {...form.getInputProps("title")}
          required
        ></TextInput>
        <Textarea
          label="Description"
          type="text"
          variant="filled"
          placeholder="Description"
          {...form.getInputProps("description")}
        ></Textarea>
        <Chips
          style={{ float: "left" }}
          variant="filled"
          mt="md"
          defaultValue={[]}
          multiple
          {...form.getInputProps("tags")}
        >
          <Chip value="important">Important</Chip>
        </Chips>
        <Group position="right" mt="md">
          <Button type="submit">Create</Button>
        </Group>
      </form>
    </Modal>
  );
}
