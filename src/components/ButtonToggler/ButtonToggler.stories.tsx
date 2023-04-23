import type { Meta, StoryObj } from "@storybook/react";

import { ButtonToggler } from "./index";
import image from "../../assets/product.jpg";
import { ShoppingCartIcon } from "../Icon";
import { MiniCart } from "../MiniCart";

const meta: Meta<typeof ButtonToggler> = {
  title: "RN UI Kit/ButtonToggler",
  component: ButtonToggler,
};
export default meta;

type Story = StoryObj<typeof ButtonToggler>;

export const Default: Story = {
  args: {
    button: {
      children: "Cart",
      left: ShoppingCartIcon,
      right: 2,
    },
    children: (
      <MiniCart
        products={[
          {
            name: "Lucky Whole Kaju - 1Kg",
            price: 500,
            image,
            qty: 1,
            id: "1",
          },
          {
            name: "Lucky Whole Kaju - 1Kg",
            price: 500,
            image,
            qty: 1,
            id: "1",
          },
        ]}
      />
    ),
  },
};
