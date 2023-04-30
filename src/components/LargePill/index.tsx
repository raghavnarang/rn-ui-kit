import Link from "next/link";
import type { LinkProps } from "next/link";
import type { FC } from "react";

type LargePillProps = {
  title: string;
  subTitle?: string;
  linkProps?: LinkProps;
};

const LargePill: FC<LargePillProps> = ({ title, subTitle, linkProps }) => (
  <Link {...linkProps} href={linkProps?.href || "#"}>
    <div className="w-full rounded-lg px-5 py-3 bg-red-700 text-white">
      <span className="text-xl font-medium mb-0.5 block">{title}</span>
      {subTitle && (
        <span className="text-sm font-normal block">{subTitle}</span>
      )}
    </div>
  </Link>
);

export { LargePill };
export type { LargePillProps };
