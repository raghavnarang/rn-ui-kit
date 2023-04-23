import Image from "next/image";
import { FC } from "react";
import { CurrencyPosition } from "../../types/currency";
import { defaultCurrencyValue } from "../../types/currency";
import { Counter } from "../Counter";
import { SidebarItemWrapper } from "../SidebarItemWrapper";
import { Product } from "../../types/product";

type SidebarProductItemProps = Product & {
  onChange?: (qty: number) => void;
};

const SidebarProductItem: FC<SidebarProductItemProps> = ({
  name,
  image,
  price,
  qty,
  currency = defaultCurrencyValue,
  onChange
}) => (
  <SidebarItemWrapper hasFixedHeight={false} className="justify-between">
    <div className="flex">
      {/* Product Image */}
      <div className="w-24 h-24 mr-4 relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <span className="text-base font-semibold text-black mb-1 block">
            {name}
          </span>
          <span className="text-base font-bold text-red-500 block">
            {currency.position === CurrencyPosition.Left && currency.label}
            {price}
            {currency.position === CurrencyPosition.Right && currency.label}
          </span>
        </div>
        <Counter value={qty} onChange={onChange} />
      </div>
    </div>
    <span className="text-base font-medium text-black">
      {currency.position === CurrencyPosition.Left && currency.label}
      {price * qty}
      {currency.position === CurrencyPosition.Right && currency.label}
    </span>
  </SidebarItemWrapper>
);

export { SidebarProductItem };
export type { SidebarProductItemProps };
