import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./index";
import { PillMenu } from "../PillMenu";
import logo from "../../assets/logo.png";
import { Default as MiniCartStory } from "../MiniCart/MiniCart.stories";
import type { MiniCartProps } from "../MiniCart";

const meta: Meta<typeof Header> = {
  title: "RN UI Kit/Header",
  component: Header,
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    logo: {
      src: logo,
      width: 175,
      height: 40,
      alt: "Nutflick",
    },
    menu: {
      items: [
        {
          text: "Shop",
          subSection: (
            <PillMenu
              title="Categories"
              items={[
                { title: "Cashews", subTitle: "10 Products" },
                { title: "Almonds", subTitle: "10 Products" },
                { title: "Pistachio", subTitle: "10 Products" },
                { title: "Raisins", subTitle: "10 Products" },
                { title: "Walnuts", subTitle: "10 Products" },
              ]}
            />
          ),
        },
        { text: "About" },
        { text: "Contact" },
      ],
    },
    cartProps: MiniCartStory.args as unknown as MiniCartProps,
  },
};
