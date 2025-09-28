import type { Meta, StoryObj } from '@storybook/nextjs';
import TodoItem from './TodoItem';

const meta: Meta<typeof TodoItem> = {
  title: 'Todo/TodoItem',
  component: TodoItem,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof TodoItem>;

export const Incomplete: Story = {
  args: {
    todo: { id: '1', text: '牛乳を買う', completed: false },
    onToggle: () => {},
    onDelete: () => {},
  },
};

export const Completed: Story = {
  args: {
    todo: { id: '2', text: '歩く', completed: true },
    onToggle: () => {},
    onDelete: () => {},
  },
};
