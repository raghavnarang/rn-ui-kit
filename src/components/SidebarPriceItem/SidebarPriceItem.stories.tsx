import type { Meta, StoryObj } from "@storybook/react";

import { SidebarPriceItem } from "./index";

const meta: Meta<typeof SidebarPriceItem> = {
  title: "RN UI Kit/Sidebar Item/Price",
  component: SidebarPriceItem,
};
export default meta;

type Story = StoryObj<typeof SidebarPriceItem>;

export const Default: Story = {
  args: {
    title: "Discount",
    price: 500,
  },
};
