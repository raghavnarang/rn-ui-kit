import type { FC } from "react";
import { OrderCTAs, OrderCTAsProps } from "../OrderCtas";

type FooterProps = {
  left?: string;
  right?: OrderCTAsProps;
};

const Footer: FC<FooterProps> = ({ left, right }) => (
  <div className="w-full bg-white flex justify-center">
    <div className="container h-16 flex items-center justify-between">
      <span className="text-base font-normal text-black">{left}</span>
      <OrderCTAs {...right} />
    </div>
  </div>
);

export { Footer };
export type { FooterProps };
