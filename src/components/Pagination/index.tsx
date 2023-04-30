import { FC } from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../Icon";
import { IconButton } from "../IconButton";
import cx from "classnames";

type PaginationProps = {
  onExtremeLeftClick?: () => void;
  onExtremeRightClick?: () => void;
  onLeftClick?: () => void;
  onRightClick?: () => void;
  className?: string;
  currentPage?: number;
  totalPages?: number;
  leftText?: string;
  centerText?: string;
  rightText?: string;
};

const Pagination: FC<PaginationProps> = ({
  onExtremeLeftClick,
  onExtremeRightClick,
  onLeftClick,
  onRightClick,
  className,
  currentPage = 1,
  totalPages = 1,
  leftText = "Showing",
  centerText = "of",
  rightText,
}) => (
  <div className={cx("flex items-center", className)}>
    <IconButton
      icon={ChevronDoubleLeftIcon}
      className="mr-4"
      onClick={onExtremeLeftClick}
      disabled={currentPage === 1}
    />
    <IconButton
      icon={ChevronLeftIcon}
      className="mr-4"
      onClick={onLeftClick}
      disabled={currentPage === 1}
    />
    <span className="text-black font-semibold text-base">
      {leftText} {currentPage} {centerText} {totalPages} {rightText}
    </span>
    <IconButton
      icon={ChevronRightIcon}
      className="ml-4"
      onClick={onRightClick}
      disabled={currentPage === totalPages}
    />
    <IconButton
      icon={ChevronDoubleRightIcon}
      className="ml-4"
      onClick={onExtremeRightClick}
      disabled={currentPage === totalPages}
    />
  </div>
);

export { Pagination };
export type { PaginationProps };
