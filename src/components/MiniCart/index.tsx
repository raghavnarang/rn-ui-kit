import { FC, useMemo } from "react";
import type { Product } from "../../types/product";
import { SidebarProductItem } from "../SidebarProductItem";
import { SidebarTitleItem } from "../SidebarTitleItem";
import { SidebarPriceItem } from "../SidebarPriceItem";
import { SidebarItemWrapper } from "../SidebarItemWrapper";
import { Button, ButtonType } from "../Button";

type MiniCartProps = {
  products?: Product[];
  onChange?: (id: string, qty: number) => void;
  onViewCartClick?: () => void;
  onCheckoutClick?: () => void;
};

const MiniCart: FC<MiniCartProps> = ({
  products,
  onChange,
  onViewCartClick,
  onCheckoutClick,
}) => {
  const subtotal = useMemo(
    () =>
      products?.reduce<number>(
        (total, current) => total + current.qty * current.price,
        0
      ),
    [products]
  );

  return (
    <div className="w-full rounded-lg bg-white drop-shadow-md">
      <SidebarTitleItem title="Cart" />
      {products?.map((product) => (
        <SidebarProductItem
          {...product}
          onChange={(qty) => onChange?.(product.id, qty)}
        />
      ))}
      {!products?.length && (
        <SidebarItemWrapper className="bg-gray-100 justify-center">
          <span className="text-base text-black">No Products in cart</span>
        </SidebarItemWrapper>
      )}
      <SidebarPriceItem
        title="Subtotal"
        highlight={`(${products?.length || 0})`}
        price={subtotal || 0}
      />
      <SidebarItemWrapper className="justify-end">
        <Button
          className="mr-4"
          type={ButtonType.Secondry}
          onClick={onViewCartClick}
        >
          View Cart
        </Button>
        <Button onClick={onCheckoutClick}>Checkout</Button>
      </SidebarItemWrapper>
    </div>
  );
};

export { MiniCart };
export type { MiniCartProps };
