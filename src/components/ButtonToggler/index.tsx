import type { FC, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import type { ButtonProps } from "../Button";
import cx from "classnames";

enum TogglePosition {
  Left = "left",
  Right = "right",
}

type ButtonTogglerProps = {
  button: ButtonProps;
  children: ReactNode;
  position?: TogglePosition;
};

const ButtonToggler: FC<ButtonTogglerProps> = ({
  button,
  children,
  position = TogglePosition.Left,
}) => {
  const [isOpen, setOpen] = useState(false);

  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outsideClickHandler = (event: MouseEvent) => {
      if (!content.current?.contains(event.target as unknown as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", outsideClickHandler);

    return () => {
      document.removeEventListener("click", outsideClickHandler);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={content}>
      <Button {...button} onClick={() => setOpen(!isOpen)} />
      {isOpen && (
        <div
          className={cx("absolute w-[512px] pt-9", {
            "left-0": position === TogglePosition.Left,
            "right-0": position === TogglePosition.Right,
          })}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export { ButtonToggler, TogglePosition };
export type { ButtonTogglerProps };
