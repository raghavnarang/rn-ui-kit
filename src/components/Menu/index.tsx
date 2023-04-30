import type { FC } from "react";
import { ReactNode } from "react";
import cx from "classnames";
import Link from "next/link";
import type { LinkProps } from "next/link";
import { ChevronDownIcon } from "../Icon";

export type MenuProps = {
  items: MenuItemProps[];
};

export type MenuItemProps = {
  text: string;
  linkProps?: LinkProps;
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
        <Link
          {...item.linkProps}
          href={item.linkProps?.href || "#"}
          className={cx(
            "h-16 px-5 flex items-center cursor-pointer border-gray-100 border-r border-solid",
            { "border-l": i === 0 }
          )}
        >
          <span className="mr-1 text-base font-semibold">
            {item.text}
          </span>
          {(item.subMenu || item.subSection) && <ChevronDownIcon />}
        </Link>
        {/* TODO: Add UI support for submenu */}
        <div className="absolute left-0 w-full invisible group-hover/item:visible">
          {item.subSection}
        </div>
      </li>
    ))}
  </ul>
);

export { Menu };
