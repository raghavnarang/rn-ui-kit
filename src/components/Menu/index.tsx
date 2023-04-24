import type { FC } from "react";
import { ReactNode } from "react";
import cx from "classnames";
import { ChevronDownIcon } from "../Icon";

export type MenuProps = {
  items: MenuItemProps[];
};

export type MenuItemProps = {
  text: string;
  onClick?: () => void;
  subMenu?: MenuProps;
  subSection?: ReactNode;
};

const Menu: FC<MenuProps> = ({ items }) => (
  <ul className="flex flex-row text-black hover:text-gray-500">
    {items.map((item, i) => (
      <li
        className="group/item hover:text-black active:text-black transition"
        key={i}
      >
        <div
          className={cx(
            "h-16 px-5 flex items-center cursor-pointer border-gray-100 border-r border-solid",
            { "border-l": i === 0 }
          )}
        >
          <span className="mr-1 text-base font-semibold" onClick={item.onClick}>
            {item.text}
          </span>
          {(item.subMenu || item.subSection) && <ChevronDownIcon />}
        </div>
        {/* TODO: Add UI support for submenu */}
        <div className="absolute left-0 w-full invisible group-hover/item:visible">
          {item.subSection}
        </div>
      </li>
    ))}
  </ul>
);

export { Menu };
