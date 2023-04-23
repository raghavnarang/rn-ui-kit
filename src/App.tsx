import Image from "next/image";
import { Button, ButtonSize, ButtonType } from "./components/Button";
import { PhoneIcon, WhatsAppIcon } from "./components/Icon";
import imageString from "./assets/react.svg";

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Button left={PhoneIcon} type={ButtonType.Info} size={ButtonSize.lg}>
        Call
      </Button>
      <Image src={'https://i.ytimg.com/vi/tVlcKp3bWH8/maxresdefault.jpg'} alt={"hello"} />
    </div>
  );
}

export default App;
