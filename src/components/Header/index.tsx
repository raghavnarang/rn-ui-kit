import Image from "next/image";
import { OrderCTAs } from "../OrderCtas";
import type { OrderCTAsProps } from "../OrderCtas";
import type { FC } from "react";
import { Menu } from "../Menu";
import type { MenuProps } from "../Menu";
import { Button, ButtonType } from "../Button";
import { ShoppingCartIcon, UserCircleIcon } from "../Icon";
import { ButtonToggler, TogglePosition } from "../ButtonToggler";
import { MiniCart } from "../MiniCart";
import type { MiniCartProps } from "../MiniCart";
import Link from "next/link";

type HeaderProps = {
  logo: {
    src: string;
    height: number;
    width: number;
  };
  appName: string;
  appUrl?: string;
  menu: MenuProps;
  cartProps?: MiniCartProps;
  orderCtaProps?: OrderCTAsProps;
};

const Header: FC<HeaderProps> = ({
  logo,
  appName,
  appUrl = "#",
  menu,
  cartProps,
  orderCtaProps,
}) => (
  <div className="w-full drop-shadow-md bg-white">
    {/* Top Header */}
    <div className="border-b border-solid border-gray-100 flex justify-center">
      <div className="container h-12 flex items-center">
        <OrderCTAs {...orderCtaProps} />
      </div>
    </div>
    {/* Main Header */}
    <div className="border-b border-solid border-gray-100 flex justify-center max-h-16">
      <div className="container flex items-center justify-between">
        <Link href={appUrl}>
          <Image alt={appName} {...logo} />
        </Link>
        <Menu {...menu} />
        <div className="flex">
          <Button
            left={UserCircleIcon}
            type={ButtonType.Secondry}
            className="mr-4"
          >
            Login
          </Button>
          {cartProps && (
            <ButtonToggler
              button={{
                children: "Cart",
                left: ShoppingCartIcon,
                right: cartProps.products?.length || 0,
              }}
              position={TogglePosition.Right}
            >
              <MiniCart {...cartProps} />
            </ButtonToggler>
          )}
        </div>
      </div>
    </div>
  </div>
);

export { Header };
