import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./index";
import { PhoneIcon } from "../Icon";

const meta: Meta<typeof IconButton> = {
  title: "RN UI Kit/Icon Button",
  component: IconButton,
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: { icon: PhoneIcon },
};
