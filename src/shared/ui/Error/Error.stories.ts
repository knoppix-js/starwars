import type { Meta, StoryObj } from '@storybook/react';

import { Error } from './Error';

const meta: Meta<typeof Error> = {
  title: 'Error',
  component: Error,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Error>;

export const Default: Story = {
  args: {
    message: 'dsdsd sds sd sd sds ds d sd sds ds sds ds dsds',
  },
};
