import Link from "next/link";
import type { FC } from "react";

type LargePillProps = {
  title: string;
  subTitle?: string;
  url?: string;
};

const LargePill: FC<LargePillProps> = ({ title, subTitle, url }) => (
  <Link href={url || "#"}>
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
