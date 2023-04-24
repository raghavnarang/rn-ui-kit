import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "./index";

const meta: Meta<typeof Footer> = {
  title: "RN UI Kit/Footer",
  component: Footer,
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: { left: "Copyright © 2023 Nutflick. All rights reserved." },
};
