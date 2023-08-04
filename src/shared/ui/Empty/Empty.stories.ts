import type { Meta, StoryObj } from '@storybook/react';

import { Empty } from './Empty';

const meta: Meta<typeof Empty> = {
  title: 'Empty',
  component: Empty,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  args: {},
};
