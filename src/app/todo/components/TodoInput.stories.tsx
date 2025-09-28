import type { Meta, StoryObj } from '@storybook/nextjs';
import TodoInput from './TodoInput';

const meta: Meta<typeof TodoInput> = {
  title: 'Todo/TodoInput',
  component: TodoInput,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof TodoInput>;

export const Default: Story = {
  args: {
    value: '',
    onChange: () => {},
    onSubmit: () => {},
  },
};

export const WithText: Story = {
  args: {
    value: '買い物に行く',
    onChange: () => {},
    onSubmit: () => {},
  },
};
