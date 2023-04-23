import type { Meta, StoryObj } from "@storybook/react";

import { SidebarTitleItem } from "./index";

const meta: Meta<typeof SidebarTitleItem> = {
  title: "RN UI Kit/Sidebar Item/Title",
  component: SidebarTitleItem,
};
export default meta;

type Story = StoryObj<typeof SidebarTitleItem>;

export const Default: Story = {
  args: {
    title: "Cart Summary",
  },
};
