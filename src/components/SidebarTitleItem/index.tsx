import type { FC } from "react";
import { SidebarItemWrapper } from "../SidebarItemWrapper";

type SidebarTitleItemProps = {
  title: string;
};

const SidebarTitleItem: FC<SidebarTitleItemProps> = ({ title }) => (
  <SidebarItemWrapper className="!border-gray-200">
    <span className="text-xl font-semibold text-black">{title}</span>
  </SidebarItemWrapper>
);

export { SidebarTitleItem };
export type { SidebarTitleItemProps };
