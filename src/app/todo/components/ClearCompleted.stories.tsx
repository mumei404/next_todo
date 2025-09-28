import type { Meta, StoryObj } from '@storybook/nextjs';
import ClearCompleted from './ClearCompleted';

const meta: Meta<typeof ClearCompleted> = {
  title: 'Todo/ClearCompleted',
  component: ClearCompleted,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof ClearCompleted>;

export const Hidden: Story = {
  args: { hasCompleted: false, onClear: () => {} },
};

export const Visible: Story = {
  args: { hasCompleted: true, onClear: () => {} },
};
