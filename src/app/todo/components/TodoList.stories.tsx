import type { Meta, StoryObj } from '@storybook/react';
import TodoList from './TodoList';

const meta: Meta<typeof TodoList> = {
  title: 'Todo/TodoList',
  component: TodoList,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof TodoList>;

export const Empty: Story = {
  args: { todos: [], onToggle: () => {}, onDelete: () => {} },
};

export const WithItems: Story = {
  args: {
    todos: [
      { id: '1', text: '牛乳を買う', completed: false },
      { id: '2', text: '歩く', completed: true },
    ],
    onToggle: () => {},
    onDelete: () => {},
  },
};
