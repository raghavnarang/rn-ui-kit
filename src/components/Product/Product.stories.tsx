import type { Meta, StoryObj } from "@storybook/react";

import { Product } from "./index";
import image from "../../assets/product.jpg";

const meta: Meta<typeof Product> = {
  title: "RN UI Kit/Product",
  component: Product,
};
export default meta;

type Story = StoryObj<typeof Product>;

export const Default: Story = {
  args: {
    name: "Kaju (Cashew) Whole",
    id: "1",
    price: 500,
    image,
    category: { name: "Cashews", id: "1" }
  },
};
