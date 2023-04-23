enum CurrencyPosition {
  Left = "left",
  Right = "right",
}

interface Currency {
  label: string;
  position?: CurrencyPosition;
};

const defaultCurrencyValue: Currency = {
  label: "₹",
  position: CurrencyPosition.Left,
};

export { CurrencyPosition, defaultCurrencyValue };
export type { Currency };
