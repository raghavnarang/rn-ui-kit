import type { Meta, StoryObj } from "@storybook/react";

import { Menu } from "./index";

const meta: Meta<typeof Menu> = { title: "RN UI Kit/Menu", component: Menu };
export default meta;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: (args) => (
    <div className="flex justify-center w-full">
      <Menu {...args} />
    </div>
  ),
  args: {
    items: [
      {
        text: "Shop",
        subSection: <div className="w-full h-12 bg-slate-500" />,
      },
      { text: "About" },
      { text: "Contact" },
    ],
  },
};
