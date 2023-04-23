import type { FC } from "react";
import type { Currency } from "../../types/currency";
import { defaultCurrencyValue, CurrencyPosition } from "../../types/currency";

type PriceProps = {
  className?: string;
  currency?: Currency;
  children?: number;
};

const Price: FC<PriceProps> = ({
  currency = defaultCurrencyValue,
  className,
  children,
}) => (
  <span className={className}>
    {currency.position === CurrencyPosition.Left && currency.label}
    {children}
    {currency.position === CurrencyPosition.Right && currency.label}
  </span>
);

export { Price };
export type { PriceProps };
