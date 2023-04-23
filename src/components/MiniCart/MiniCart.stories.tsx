import type { Meta, StoryObj } from "@storybook/react";

import { MiniCart } from "./index";
import image from "../../assets/product.jpg";

const meta: Meta<typeof MiniCart> = {
  title: "RN UI Kit/MiniCart",
  component: MiniCart,
};
export default meta;

type Story = StoryObj<typeof MiniCart>;

export const Default: Story = {
  args: {
    products: [
      { name: "Lucky Whole Kaju - 1Kg", price: 500, image, qty: 1, id: "1" },
      { name: "Lucky Whole Kaju - 1Kg", price: 500, image, qty: 1, id: "1" },
    ],
  },
};
