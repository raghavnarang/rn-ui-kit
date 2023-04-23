import type { FC, ReactNode } from "react";
import cx from "classnames";

type SidebarItemWrapperProps = {
  children?: ReactNode;
  className?: string;
  hasFixedHeight?: boolean;
};

const SidebarItemWrapper: FC<SidebarItemWrapperProps> = ({
  children,
  className,
  hasFixedHeight = true,
}) => (
  <div
    className={cx(
      "w-full px-8 flex items-center border-b border-solid border-gray-100",
      { "h-16": hasFixedHeight },
      { "py-4": !hasFixedHeight },
      className
    )}
  >
    {children}
  </div>
);

export { SidebarItemWrapper };
export type { SidebarItemWrapperProps };
