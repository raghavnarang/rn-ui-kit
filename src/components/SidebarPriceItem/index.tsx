import type { FC } from "react";
import cx from "classnames";
import { PencilIcon, TrashIcon } from "../Icon";
import { SidebarItemWrapper } from "../SidebarItemWrapper";
import { Price } from "../Price";

enum SidebarPriceSize {
  md = "md",
  lg = "lg",
}

enum SidebarPriceColor {
  Default = "default",
  Success = "success",
}

const priceColorStyles = {
  [SidebarPriceColor.Default]: "text-black",
  [SidebarPriceColor.Success]: "text-green-600",
};

const priceSizeStyles = {
  [SidebarPriceSize.md]: "text-base",
  [SidebarPriceSize.lg]: "text-xl",
};

type SidebarPriceProps = {
  title: string;
  price: number;
  priceSize?: SidebarPriceSize;
  priceColor?: SidebarPriceColor;
  highlight?: string;
  onDeleteClick?: () => void;
  onEditClick?: () => void;
};

const SidebarPriceItem: FC<SidebarPriceProps> = ({
  title,
  price,
  priceSize = SidebarPriceSize.md,
  priceColor = SidebarPriceColor.Default,
  highlight,
  onDeleteClick,
  onEditClick,
}) => (
  <SidebarItemWrapper className="justify-between">
    <div className="flex items-center">
      <span className="text-base font-normal text-gray-600 mr-1">{title}</span>
      {highlight && (
        <span className="text-base font-bold text-gray-600">{highlight}</span>
      )}
      {onDeleteClick && (
        <span
          className="cursor-pointer text-red-500 ml-2"
          onClick={onDeleteClick}
        >
          <TrashIcon className="w-6 h-6" />
        </span>
      )}
      {onEditClick && (
        <span
          className="cursor-pointer text-blue-500 ml-2"
          onClick={onEditClick}
        >
          <PencilIcon className="w-6 h-6" />
        </span>
      )}
    </div>
    <Price
      className={cx(
        "font-medium",
        priceColorStyles[priceColor],
        priceSizeStyles[priceSize]
      )}
    >
      {price}
    </Price>
  </SidebarItemWrapper>
);

export { SidebarPriceItem, SidebarPriceSize, SidebarPriceColor };
export type { SidebarPriceProps };
