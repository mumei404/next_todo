import type { Meta, StoryObj } from '@storybook/nextjs';
import TodoStats from './TodoStats';

const meta: Meta<typeof TodoStats> = {
  title: 'Todo/TodoStats',
  component: TodoStats,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof TodoStats>;

export const None: Story = { args: { completed: 0, total: 0 } };
export const Some: Story = { args: { completed: 1, total: 3 } };
export const All: Story = { args: { completed: 5, total: 5 } };
