import type { Meta, StoryObj } from "@storybook/react";

import { SidebarProductItem } from "./index";
import image from "../../assets/product.jpg";

const meta: Meta<typeof SidebarProductItem> = {
  title: "RN UI Kit/Sidebar Item/Product",
  component: SidebarProductItem,
};
export default meta;

type Story = StoryObj<typeof SidebarProductItem>;

export const Default: Story = {
  args: {
    name: "Lucky Whole Kaju - 1Kg",
    price: 500,
    image,
    qty: 1,
  },
};
