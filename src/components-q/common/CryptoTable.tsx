import { ICryptoData, ITitleTable } from "@/interfaces";
import Image from "next/image";
import React from "react";
import { CryptoLineChart } from "./CryptoLineChart";

const cryptoData: ICryptoData[] = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    price: 38755,
    change24h: "+3.36",
    change7d: "+3.39",
    marketCap: "390.6B",
    volume: "68.3T",
    supply: "19,087,425 BTC",
    chart: "/btc-chart.png",
    icon: "/assets/crypto/btc.png",
  },
  {
    id: 2,
    name: "Ethereum",
    symbol: "ETH",
    price: 1128.71,
    change24h: "-3.36",
    change7d: "-3.39",
    marketCap: "142.4B",
    volume: "2.51T",
    supply: "121,445,163 ETH",
    chart: "/eth-chart.png",
    icon: "/assets/crypto/eth.png",
  },
  {
    id: 3,
    name: "Tether",
    symbol: "USDT",
    price: 1.0,
    change24h: "+0.00",
    change7d: "-0.00",
    marketCap: "83.9B",
    volume: "2.51T",
    supply: "121,445,163 ETH",
    chart: "/eth-chart.png",
    icon: "/assets/crypto/usdt.png",
  },
  {
    id: 4,
    name: "Polygon",
    symbol: "MATIC",
    price: 1.0,
    change24h: "+0.00",
    change7d: "+0.00",
    marketCap: "83.9B",
    volume: "2.51T",
    supply: "121,445,163 ETH",
    chart: "/eth-chart.png",
    icon: "/assets/crypto/matic.png",
  },
  {
    id: 5,
    name: "Cardano",
    symbol: "ADA",
    price: 1.0,
    change24h: "+0.00",
    change7d: "+0.00",
    marketCap: "83.9B",
    volume: "2.51T",
    supply: "121,445,163 ETH",
    chart: "/eth-chart.png",
    icon: "/assets/crypto/ada.png",
  },
  {
    id: 6,
    name: "Binance",
    symbol: "BNB",
    price: 1.0,
    change24h: "+0.00",
    change7d: "+0.00",
    marketCap: "83.9B",
    volume: "2.51T",
    supply: "121,445,163 ETH",
    chart: "/eth-chart.png",
    icon: "/assets/crypto/bnb.png",
  },
  {
    id: 7,
    name: "Uniswap",
    symbol: "UNI",
    price: 1.0,
    change24h: "+0.00",
    change7d: "+0.00",
    marketCap: "83.9B",
    volume: "2.51T",
    supply: "121,445,163 ETH",
    chart: "/eth-chart.png",
    icon: "/assets/crypto/uni.png",
  },
  {
    id: 8,
    name: "Tron",
    symbol: "TRX",
    price: 1.0,
    change24h: "+0.00",
    change7d: "+0.00",
    marketCap: "83.9B",
    volume: "2.51T",
    supply: "121,445,163 ETH",
    chart: "/eth-chart.png",
    icon: "/assets/crypto/trx.png",
  },
  {
    id: 9,
    name: "Matic",
    symbol: "MATIC",
    price: 1.0,
    change24h: "+0.00",
    change7d: "+0.00",
    marketCap: "83.9B",
    volume: "2.51T",
    supply: "121,445,163 ETH",
    chart: "/eth-chart.png",
    icon: "/assets/crypto/matic.png",
  },
  // Add more crypto data as needed
];

const titleTable: ITitleTable[] = [
  {
    id: 1,
    name: "Coin",
  },
  {
    id: 2,
    name: "Price",
  },
  {
    id: 3,
    name: "24h %",
  },
  {
    id: 4,
    name: "7d %",
  },
  {
    id: 5,
    name: "Market Cap",
  },
  {
    id: 6,
    name: "Volume(24h)",
  },
  {
    id: 7,
    name: "Circulating Supply",
  },
  {
    id: 8,
    name: "Last 90 Days",
  },
  {
    id: 9,
    name: "Action",
  },
];

const CryptoTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="text-left text-sm border-b border-gray-700">
            {titleTable.map((item) => (
              <th key={item.id} className="py-3 px-4">
                <div className="flex items-center">
                  <span className="font-normal text-white">{item.name}</span>
                  <a href="#">
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto) => (
            <tr key={crypto.id} className="">
              <td className="px-4">
                <div className="flex items-center">
                  <span className="text-gray-400  font-normal text-sm mr-2">
                    {crypto.id}
                  </span>
                  <Image
                    src={`/assets/crypto/${crypto.symbol.toLowerCase()}.png`}
                    alt={crypto.name}
                    width={24}
                    height={24}
                    className="mr-2"
                  />
                  <div className="flex flex-col text-left items-start  ">
                    <span className="font-medium">{crypto.name}</span>
                    <span className="text-gray-400  font-normal text-sm">
                      {crypto.symbol}
                    </span>
                  </div>
                </div>
              </td>
              <td className=" px-4">${crypto.price.toLocaleString()}</td>
              <td className=" px-4 text-green-500">
                {Number(crypto.change24h) >= 0 ? (
                  <span className="inline-flex items-center rounded-md bg-third   px-2 py-1 text-base font-medium text-second ring-1 ring-second/20 ring-inset">
                    {crypto.change24h}%
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-md bg-third   px-2 py-1 text-base font-medium text-red-600 ring-1 ring-red-600/20 ring-inset">
                    {crypto.change24h}%
                  </span>
                )}
              </td>
              <td className=" px-4 text-green-500">
                {Number(crypto.change7d) >= 0 ? (
                  <span className="inline-flex items-center rounded-md bg-third   px-2 py-1 text-base font-medium text-second ring-1 ring-second/20 ring-inset">
                    {crypto.change24h}%
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-md bg-third   px-2 py-1 text-base font-medium text-red-600 ring-1 ring-red-600/20 ring-inset">
                    {crypto.change24h}%
                  </span>
                )}
              </td>
              <td className=" px-4">${crypto.marketCap}</td>
              <td className=" px-4">${crypto.volume}</td>
              <td className=" px-4">
                <div className="  gap-2  text-base w-full">
                  {crypto.supply}
                  <div className="w-full mt-2 bg-gray-200 rounded-full h-1 mb-4 dark:bg-third">
                    <div className="bg-gray-500 h-1 rounded-full dark:bg-gray-500 w-[45%]"></div>
                  </div>
                </div>
              </td>
              <td className=" px-4">
                <CryptoLineChart />
              </td>
              <td className=" px-4">
                <button className="bg-third ring ring-gray-700 cursor-pointer hover:bg-gray-800 transition-all duration-300 text-white px-4 py-2 rounded-lg">
                  Trade
                </button>
              </td>
              <td className=" px-4   ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
