import type { FC } from "react";
import { LargePill } from "../LargePill";
import type { LargePillProps } from "../LargePill";

type PillMenuProps = {
  title?: string;
  items: LargePillProps[];
};

const PillMenu: FC<PillMenuProps> = ({ title, items }) => (
  <div className="border-b border-solid border-gray-100 flex justify-center w-full bg-white drop-shadow-md">
    <div className="container pt-6 pb-10">
      <span className="text-xl font-bold text-black mb-5 block">{title}</span>
      <div className="w-full grid grid-cols-4 gap-5">
        {items.map((item) => (
          <LargePill {...item} key={item.title} />
        ))}
      </div>
    </div>
  </div>
);

export { PillMenu };
export type { PillMenuProps };
