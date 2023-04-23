import type { FC } from "react";
import cx from "classnames";
import { Icon } from "../Icon";

export enum ButtonSize {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export enum ButtonType {
  Primary = "primary",
  Secondry = "secondary",
  Success = "success",
  Info = "info",
}

export interface ButtonProps {
  children?: string;
  onClick?: () => void;
  className?: string;
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
  left?: Icon;
  right?: number;
  iconClassName?: string;
}

const filledStyles = {
  [ButtonType.Primary]: "text-white bg-red-700",
  [ButtonType.Secondry]: "text-black bg-gray-200",
  [ButtonType.Success]: "text-white bg-emerald-500",
  [ButtonType.Info]: "text-white bg-blue-500",
};

const sizeStyles = {
  [ButtonSize.lg]: "px-5 h-12 text-lg",
  [ButtonSize.md]: "px-4 h-10 text-base",
  [ButtonSize.sm]: "px-3 h-8 text-sm",
};

const rightElementFilledStyles = {
  [ButtonType.Primary]: "bg-white text-red-700",
  [ButtonType.Secondry]: "bg-black text-gray-200",
  [ButtonType.Success]: "bg-white text-emerald-500",
  [ButtonType.Info]: "bg-white text-blue-500",
};

const iconSizeStyles = {
  [ButtonSize.lg]: "w-7 h-7",
  [ButtonSize.md]: "w-6 h-6",
  [ButtonSize.sm]: "w-5 h-5",
};

const leftIconStyles = {
  [ButtonSize.lg]: "mr-3",
  [ButtonSize.md]: "mr-2",
  [ButtonSize.sm]: "mr-1",
};

const rightElementStyles = {
  [ButtonSize.lg]: "ml-3 text-base",
  [ButtonSize.md]: "ml-2 text-sm",
  [ButtonSize.sm]: "ml-1 text-xs",
};

export const Button: FC<ButtonProps> = ({
  children,
  className = "",
  size = ButtonSize.md,
  type = ButtonType.Primary,
  left: LeftIcon,
  right: rightCount,
  iconClassName,
  ...props
}) => (
  <button
    className={cx(
      className,
      "flex justify-center items-center rounded disabled:opacity-50 font-semibold",
      sizeStyles[size],
      filledStyles[type]
    )}
    {...props}
  >
    {LeftIcon && (
      <LeftIcon
        className={cx(
          iconClassName,
          iconSizeStyles[size],
          children && leftIconStyles[size]
        )}
      />
    )}
    <span>{children}</span>
    {(rightCount === 0 || rightCount) && (
      <span
        className={cx(
          "rounded-full flex items-center justify-center",
          iconSizeStyles[size],
          rightElementStyles[size],
          rightElementFilledStyles[type]
        )}
      >
        {rightCount}
      </span>
    )}
  </button>
);
