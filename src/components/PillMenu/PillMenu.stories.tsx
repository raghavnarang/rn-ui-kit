import type { Meta, StoryObj } from "@storybook/react";

import { PillMenu } from "./index";

const meta: Meta<typeof PillMenu> = {
  title: "RN UI Kit/Pills/Pill Menu",
  component: PillMenu,
};
export default meta;

type Story = StoryObj<typeof PillMenu>;

export const Default: Story = {
  args: {
    title: "Categories",
    items: [
      { title: "Cashews", subTitle: "10 Products" },
      { title: "Almonds", subTitle: "10 Products" },
      { title: "Pistachio", subTitle: "10 Products" },
      { title: "Raisins", subTitle: "10 Products" },
      { title: "Walnuts", subTitle: "10 Products" },
    ],
  },
};
