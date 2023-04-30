import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from "./index";

const meta: Meta<typeof Pagination> = {
  title: "RN UI Kit/Pagination",
  component: Pagination,
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 10,
    totalPages: 10
  },
};
