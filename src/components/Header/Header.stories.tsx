import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./index";
import { PillMenu } from "../PillMenu";
import logo from "../../assets/logo.png";
import image from "../../assets/product.jpg";

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
    },
    appName: "Nutflick",
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
    cartProps: {
      products: [
        { name: "Lucky Whole Kaju - 1Kg", price: 500, image, qty: 1, id: "1" },
        { name: "Lucky Whole Kaju - 1Kg", price: 500, image, qty: 1, id: "1" },
      ],
    },
  },
};
