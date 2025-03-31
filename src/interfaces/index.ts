export interface MenuItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

export interface MenuItemProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

export interface SelectTheme {
  label: string;
  value: string;
  icon: React.ReactNode;
}

export interface TotalItem {
  id: number;
  value: string;
}

export interface ICryptoData {
  id: number;
  name: string;
  symbol: string;
  price: number;
  change24h: string;
  change7d: string;
  marketCap: string;
  volume: string;
  supply: string;
  chart: string;
  icon: string;
}

export interface ITitleTable {
  id: number;
  name: string;
}
