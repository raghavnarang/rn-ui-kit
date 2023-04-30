import Image from "next/image";
import type { ImageProps } from "next/image";
import Link from "next/link";
import type { LinkProps } from "next/link";
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

type HeaderProps = {
  logo: ImageProps;
  appLinkProps?: LinkProps;
  menu?: MenuProps;
  cartProps?: MiniCartProps;
  orderCtaProps?: OrderCTAsProps;
};

const Header: FC<HeaderProps> = ({
  logo,
  appLinkProps,
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
        <Link {...appLinkProps} href={appLinkProps?.href || "#"}>
          <Image {...logo} />
        </Link>
        {menu && <Menu {...menu} />}
        <div className="flex">
          <Button
            left={UserCircleIcon}
            type={ButtonType.Secondry}
          >
            Login
          </Button>
          {cartProps && (
            <ButtonToggler
              button={{
                className: 'ml-4',
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
