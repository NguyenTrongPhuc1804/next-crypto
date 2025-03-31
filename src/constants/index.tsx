import { MenuItem, SelectTheme, TotalItem } from "@/interfaces";
import Image from "next/image";

export const MENU_ITEMS: MenuItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: (
      <Image
        src="/assets/icons/Vector.png"
        width={24}
        height={24}
        alt="icons"
      />
    ),
  },
  {
    label: "Exchange",
    href: "/exchange",
    icon: (
      <Image
        src="/assets/icons/Exchange-Icon.png"
        width={24}
        height={24}
        alt="icons"
      />
    ),
  },
  {
    label: "Live prices",
    href: "/price",
    icon: (
      <Image
        src="/assets/icons/Price-Icon.png"
        width={24}
        height={24}
        alt="icons"
      />
    ),
  },
  {
    label: "Wallet",
    href: "/wallet",
    icon: (
      <Image
        src="/assets/icons/Wallet-Icon.png"
        width={24}
        height={24}
        alt="icons"
      />
    ),
  },
  {
    label: "NFT Market",
    href: "/market",
    icon: (
      <Image
        src="/assets/icons/Market-Icon.png"
        width={24}
        height={24}
        alt="icons"
      />
    ),
  },
  {
    label: "Transaction",
    href: "/transaction",
    icon: (
      <Image
        src="/assets/icons/Transaction-Icon.png"
        width={24}
        height={24}
        alt="icons"
      />
    ),
  },
  {
    label: "Settings",
    href: "/settings",
    icon: (
      <Image
        src="/assets/icons/Settings-Icon.png"
        width={24}
        height={24}
        alt="icons"
      />
    ),
  },
];

export const SELECT_THEME: SelectTheme[] = [
  {
    label: "English",
    value: "english",
    icon: <Image src="/assets/Frame.png" width={24} height={24} alt="icons" />,
  },
  {
    label: "Vietnamese",
    value: "vietnamese",
    icon: <Image src="/assets/Frame.png" width={24} height={24} alt="icons" />,
  },
  {
    label: "Chinese",
    value: "chinese",
    icon: <Image src="/assets/Frame.png" width={24} height={24} alt="icons" />,
  },
];

export const TOTAL_ITEMS: TotalItem[] = [
  {
    id: 1,
    value: "1",
  },
  {
    id: 2,
    value: "2",
  },
  {
    id: 3,
    value: "3",
  },
];
