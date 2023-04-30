import type { FC } from "react";
import type { ProductType } from "../../types/product";
import Image from "next/image";
import { Price } from "../Price";
import { IconButton } from "../IconButton";
import { ShoppingCartIcon, TrashIcon } from "../Icon";
import { ButtonType } from "../Button";
import type { LinkProps } from "next/link";
import Link from "next/link";

type ProductProps = Omit<ProductType, "qty"> & {
  addedToCart?: boolean;
  onCartClick?: () => void;
  linkProps?: LinkProps;
};

const Product: FC<ProductProps> = ({
  image,
  name,
  category,
  price,
  addedToCart = false,
  onCartClick,
  linkProps,
}) => (
  <div className="max-w-md w-full rounded-lg bg-white drop-shadow-md flex flex-col">
    <div className="h-48 w-full relative cursor-pointer">
      <Link {...linkProps} href={linkProps?.href || "#"}>
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-t-lg"
        />
      </Link>
    </div>
    <div className="p-5 flex-1 flex justify-between flex-col">
      <div className="flex flex-col">
        <Link
          {...linkProps}
          href={linkProps?.href || "#"}
          className="text-base font-bold text-gray-600 cursor-pointer"
        >
          {name}
        </Link>
        {category && (
          <span className="text-base font-normal text-gray-500 mt-0.5">
            {category.name}
          </span>
        )}
      </div>
      <div className="flex items-end justify-between">
        <Price className="text-2xl font-bold text-red-500">{price}</Price>
        <IconButton
          onClick={onCartClick}
          icon={addedToCart ? TrashIcon : ShoppingCartIcon}
          type={addedToCart ? ButtonType.Secondry : ButtonType.Primary}
        />
      </div>
    </div>
  </div>
);

export { Product };
export type { ProductProps };
