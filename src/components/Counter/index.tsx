import type { FC } from "react";
import { useState } from "react";
import { MinusCircleIcon } from "../Icon";
import { PlusCircleIcon } from "../Icon";
import cx from "classnames";

type CounterProps = {
  value?: number;
  max?: number;
  min?: number;
  difference?: number;
  onChange?: (value: number) => void;
};

const Counter: FC<CounterProps> = ({
  value = 1,
  max,
  min = 1,
  difference = 1,
  onChange,
}) => {
  const isDecreasable = value - difference >= min;
  const isIncreasable = !max || value + difference <= max;

  const decrease = () => {
    if (isDecreasable) {
      onChange?.(value - difference);
    }
  };

  const increase = () => {
    if (isIncreasable) {
      onChange?.(value + difference);
    }
  };

  return (
    <div className="flex items-center">
      <span
        className={cx({
          "cursor-pointer": isDecreasable,
          "opacity-50": !isDecreasable,
        })}
        onClick={decrease}
      >
        <MinusCircleIcon className="w-6 h-6 text-black" />
      </span>
      <span className="min-w-[32px] px-1 text-base font-medium text-gray-600 text-center select-none">
        {value}
      </span>
      <span
        className={cx({
          "cursor-pointer": isIncreasable,
          "opacity-50": !isIncreasable,
        })}
        onClick={increase}
      >
        <PlusCircleIcon className="w-6 h-6 text-black" />
      </span>
    </div>
  );
};

export { Counter };
export type { CounterProps };
