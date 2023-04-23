import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonType } from "./index";

const meta: Meta<typeof Button> = {
  title: "RN UI Kit/Button",
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Hello World", type: ButtonType.Primary },
};
