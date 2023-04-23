import type { Meta, StoryObj } from "@storybook/react";

import { Price } from "./index";

const meta: Meta<typeof Price> = {
  title: "RN UI Kit/Price",
  component: Price,
};
export default meta;

type Story = StoryObj<typeof Price>;

export const Default: Story = {
  args: {
    children: 5
  },
};
