import type { FC } from "react";
import cx from "classnames";
import type { Icon } from "../Icon";
import { Button, ButtonProps, ButtonSize } from "../Button";

export interface IconButtonProps
  extends Omit<ButtonProps, "children" | "left" | "right"> {
  icon?: Icon;
}

const iconSizeStyles = {
  [ButtonSize.lg]: "!w-6 !h-6",
  [ButtonSize.md]: "!w-5 !h-5",
  [ButtonSize.sm]: "!w-4 !h-4",
};

const buttonSizeStyles = {
  [ButtonSize.lg]: "!w-12",
  [ButtonSize.md]: "!w-10",
  [ButtonSize.sm]: "!w-8",
};

export const IconButton: FC<IconButtonProps> = ({
  icon,
  size = ButtonSize.lg,
  ...buttonProps
}) => (
  <Button
    {...buttonProps}
    left={icon}
    size={size}
    iconClassName={iconSizeStyles[size]}
    className={cx(buttonSizeStyles[size], "!p-0", buttonProps.className)}
  />
);
