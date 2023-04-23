import type { FC } from "react";
import { Button, ButtonType, ButtonSize } from "../Button";
import { PhoneIcon, WhatsAppIcon } from "../Icon";

type OrderCTAsProps = {
  onWhatsAppClick?: () => void;
  onCallClick?: () => void;
};

const OrderCTAs: FC<OrderCTAsProps> = ({ onWhatsAppClick, onCallClick }) => (
  <div className="flex items-center">
    <span className="text-sm font-semibold mr-4">Order on</span>
    <Button
      type={ButtonType.Success}
      left={WhatsAppIcon}
      size={ButtonSize.sm}
      onClick={onWhatsAppClick}
      className="mr-4"
    >
      WhatsApp
    </Button>
    <Button
      type={ButtonType.Info}
      left={PhoneIcon}
      size={ButtonSize.sm}
      onClick={onCallClick}
    >
      Call
    </Button>
  </div>
);

export { OrderCTAs };
