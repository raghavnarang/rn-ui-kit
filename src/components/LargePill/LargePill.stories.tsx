import type { Meta, StoryObj } from "@storybook/react";

import { LargePill } from "./index";

const meta: Meta<typeof LargePill> = {
  title: "RN UI Kit/Pills/Large Pill",
  component: LargePill,
};
export default meta;

type Story = StoryObj<typeof LargePill>;

export const Default: Story = {
  args: { title: "Cashews", subTitle: "10 Products" },
};
