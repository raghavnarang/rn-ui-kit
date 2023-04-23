import type { Meta, StoryObj } from "@storybook/react";

import { SidebarItemWrapper } from "./index";

const meta: Meta<typeof SidebarItemWrapper> = {
  title: "RN UI Kit/Sidebar Item/Wrapper",
  component: SidebarItemWrapper,
};
export default meta;

type Story = StoryObj<typeof SidebarItemWrapper>;

export const Default: Story = {
  args: {
    children: "I'm wrapped in SidebarItemWrapper",
  },
};
