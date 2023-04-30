import type { Meta, StoryObj } from "@storybook/react";

import { ButtonToggler } from "./index";
import { ShoppingCartIcon } from "../Icon";

import { Default as MiniCartStory } from "../MiniCart/MiniCart.stories";
import { MiniCart } from "../MiniCart";

import type { MiniCartProps } from "../MiniCart";

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
      <MiniCart {...(MiniCartStory.args as unknown as MiniCartProps)} />
    ),
  },
};
