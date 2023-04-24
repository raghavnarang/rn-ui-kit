import type { FC } from "react";
import type { Product as ProductType } from "../../types/product";
import Image from "next/image";
import { Price } from "../Price";
import { IconButton } from "../IconButton";
import { ShoppingCartIcon, TrashIcon } from "../Icon";
import { ButtonType } from "../Button";

type ProductProps = Omit<ProductType, "qty"> & {
  addedToCart?: boolean;
  onCartClick?: () => void;
  onClick?: () => void;
};

const Product: FC<ProductProps> = ({
  image,
  name,
  category,
  price,
  addedToCart = false,
  onCartClick,
  onClick,
}) => (
  <div className="max-w-xs w-full rounded-lg bg-white drop-shadow-md">
    <div className="h-48 w-full relative cursor-pointer" onClick={onClick}>
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover rounded-t-lg"
      />
    </div>
    <div className="p-5">
      <div className="flex flex-col">
        <span
          className="text-base font-bold text-gray-600 cursor-pointer"
          onClick={onClick}
        >
          {name}
        </span>
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
