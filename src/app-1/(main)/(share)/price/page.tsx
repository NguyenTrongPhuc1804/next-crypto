import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="grid grid-cols-7 grid-rows-10 gap-4 my-5">
      <div className="col-span-3 row-span-10">
        <span className="">Store Of Value</span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="mt-5 w-full h-[635px] bg-[#ff3e46] rounded-lg flex flex-col items-center justify-center">
                <Image
                  src="/assets/image-btc.png"
                  alt="price"
                  width={88}
                  height={88}
                />
                <span className="text-white text-[72px] font-normal">BTC</span>
                <span className="text-white text-[52px] font-medium">
                  $100,000
                </span>
                <span className="text-white text-[52px] font-normal">
                  -10,98%
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent
              className="bg-primary text-white shadow-2xl backdrop-blur-sm p-5"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              sideOffset={-300}
              side="right"
            >
              <div className="text-2xl flex items-center gap-2">
                <Image
                  src="/assets/crypto/btc.png"
                  alt="price"
                  width={32}
                  height={32}
                />
                <p>Bitcoin</p>
                <p>BTC</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 bg-[#FB774A] border-3 border-gray-700 rounded-full"></div>
                <p className="text-white text-base">Price: </p>
                <p className="text-white text-base font-bold">$100,000</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 bg-second border-3 border-gray-700 rounded-full"></div>
                <p className="text-white text-base">Market Cap: </p>
                <p className="text-white text-base font-bold">$100,000</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 bg-second border-3 border-gray-700 rounded-full"></div>
                <p className="text-white text-base">Volume (24h): </p>
                <p className="text-white text-base font-bold">$100,000</p>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      {/* ------------ */}
      <div className="col-span-4 row-span-8 col-start-4">
        <span>Smart contract</span>
        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="w-full h-[480px] col-span-1 bg-second rounded-lg flex flex-col items-center justify-center">
            <Image
              src="/assets/ETH-Icon.png"
              alt="price"
              width={54}
              height={54}
            />
            <span className="text-white text-[40px] font-normal">ETH</span>
            <span className="text-white text-[30px] font-medium">$100,000</span>
            <span className="text-white text-[30px] font-normal">-10,98%</span>
          </div>
          <div className="w-full h-[480px] col-span-1 grid grid-rows-2 gap-4 rounded-lg">
            <div className="w-full h-full bg-[#ff3e46] row-span-1 flex flex-col items-center justify-center rounded-lg">
              <Image
                src="/assets/crypto/bnb.png"
                alt="price"
                width={25}
                height={25}
              />
              <span className="text-white text-[20px] font-normal">BNB</span>
              <span className="text-white text-[14px] font-medium">
                $100,000
              </span>
              <span className="text-white text-[14px] font-normal">
                -10,98%
              </span>
            </div>
            <div className="row-span-1 grid grid-cols-4 grid-rows-2 gap-2">
              <div className="col-span-3 row-span-2 bg-[#ff3e46] rounded-lg flex flex-col items-center justify-center">
                <Image
                  src="/assets/crypto/ada.png"
                  alt="price"
                  width={25}
                  height={25}
                />
                <span className="text-white text-[19px] font-normal">ADA</span>
                <span className="text-white text-[14px] font-medium">
                  $100,000
                </span>
                <span className="text-white text-[14px] font-normal">
                  -10,98%
                </span>
              </div>
              <div className="col-span-1 row-span-2  flex flex-col items-center justify-center bg-[#ff3e46] rounded-lg">
                <Image
                  src="/assets/crypto/trx.png"
                  alt="price"
                  width={14}
                  height={14}
                />
                <span className="text-white text-[8px] font-normal">BTC</span>
                <span className="text-white text-[7px] font-medium">
                  $100,000
                </span>
                <span className="text-white text-[7px] font-normal">
                  -10,98%
                </span>
              </div>
              <div className="col-span-2 row-span-1 bg-second rounded-lg flex flex-col items-center justify-center">
                <span className="text-white text-[8px] font-normal">ADA</span>
                <span className="text-white text-[7px] font-medium">
                  $100,000
                </span>
                <span className="text-white text-[7px] font-normal">
                  -10,98%
                </span>
              </div>
              <div className="col-span-1 row-span-1 bg-[#ff3e46] w-full h-[55px] rounded-lg flex flex-col items-center justify-center">
                <span className="text-white text-[8px] font-normal">BTC</span>
                <span className="text-white text-[7px] font-medium">
                  $100,000
                </span>
                <span className="text-white text-[7px] font-normal">
                  -10,98%
                </span>
              </div>
              <div className="col-span-1 row-span-1 bg-[#ff3e46] w-full h-[55px] rounded-lg flex flex-col items-center justify-center">
                <span className="text-white text-[8px] font-normal">BTC</span>
                <span className="text-white text-[7px] font-medium">
                  $100,000
                </span>
                <span className="text-white text-[7px] font-normal">
                  -10,98%
                </span>
              </div>

              <div className="col-span-2 row-span-1 bg-second rounded-lg flex flex-col items-center justify-center">
                <span className="text-white text-[8px] font-normal">BTC</span>
                <span className="text-white text-[7px] font-medium">
                  $100,000
                </span>
                <span className="text-white text-[7px] font-normal">
                  -10,98%
                </span>
              </div>
              <div className="col-span-1 row-span-1 bg-[#ff3e46] w-full h-[55px] rounded-lg flex flex-col items-center justify-center">
                <span className="text-white text-[8px] font-normal">BTC</span>
                <span className="text-white text-[7px] font-medium">
                  $100,000
                </span>
                <span className="text-white text-[7px] font-normal">
                  -10,98%
                </span>
              </div>
              <div className="col-span-1 row-span-1 bg-[#ff3e46] w-full h-[55px] rounded-lg flex flex-col items-center justify-center">
                <span className="text-white text-[8px] font-normal">BTC</span>
                <span className="text-white text-[7px] font-medium">
                  $100,000
                </span>
                <span className="text-white text-[7px] font-normal">
                  -10,98%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------ */}
      <div className="col-span-4 row-span-2 col-start-4 row-start-9 grid grid-cols-3 gap-3">
        <div className="col-span-1 row-span-1 w-full h-full">
          <p className="mt-[-24px]">Trend</p>
          <div className=" w-full h-full grid grid-cols-2 grid-rows-2 gap-1">
            <div className="col-span-1 row-span-1 bg-second rounded-lg flex flex-col items-center justify-center    ">
              <span className="text-white text-[8px] font-normal">BTC</span>
              <span className="text-white text-[7px] font-medium">
                $100,000
              </span>
              <span className="text-white text-[7px] font-normal">-10,98%</span>
            </div>
            <div className="col-span-1 row-span-1 bg-[#ff3e46] rounded-lg flex flex-col items-center justify-center">
              <span className="text-white text-[8px] font-normal">BTC</span>
              <span className="text-white text-[7px] font-medium">
                $100,000
              </span>
              <span className="text-white text-[7px] font-normal">-10,98%</span>
            </div>
            <div className="col-span-1 row-span-1 bg-[#ff3e46] rounded-lg flex flex-col items-center justify-center">
              <span className="text-white text-[8px] font-normal">BTC</span>
              <span className="text-white text-[7px] font-medium">
                $100,000
              </span>
              <span className="text-white text-[7px] font-normal">-10,98%</span>
            </div>
            <div className="col-span-1 row-span-1 bg-[#ff3e46] rounded-lg flex flex-col items-center justify-center">
              <span className="text-white text-[8px] font-normal">BTC</span>
              <span className="text-white text-[7px] font-medium">
                $100,000
              </span>
              <span className="text-white text-[7px] font-normal">-10,98%</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 ">
          <p className="mt-[-24px]">Exchange</p>
          <div className="  w-full h-full grid grid-cols-2 grid-rows-2 gap-1">
            <div className="col-span-1 row-span-1 bg-second rounded-lg flex flex-col items-center justify-center    ">
              <span className="text-white text-[8px] font-normal">BTC</span>
              <span className="text-white text-[7px] font-medium">
                $100,000
              </span>
              <span className="text-white text-[7px] font-normal">-10,98%</span>
            </div>
            <div className="col-span-1 row-span-1 bg-[#ff3e46] rounded-lg flex flex-col items-center justify-center">
              <span className="text-white text-[8px] font-normal">BTC</span>
              <span className="text-white text-[7px] font-medium">
                $100,000
              </span>
              <span className="text-white text-[7px] font-normal">-10,98%</span>
            </div>
            <div className="col-span-1 row-span-1 bg-[#ff3e46] rounded-lg flex flex-col items-center justify-center">
              <span className="text-white text-[8px] font-normal">BTC</span>
              <span className="text-white text-[7px] font-medium">
                $100,000
              </span>
              <span className="text-white text-[7px] font-normal">-10,98%</span>
            </div>
            <div className="col-span-1 row-span-1 bg-[#ff3e46] rounded-lg flex flex-col items-center justify-center">
              <span className="text-white text-[8px] font-normal">BTC</span>
              <span className="text-white text-[7px] font-medium">
                $100,000
              </span>
              <span className="text-white text-[7px] font-normal">-10,98%</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 ">
          <p className="mt-[-24px]">Meme</p>
          <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-1">
            <div className="col-span-1 row-span-1 bg-second rounded-lg flex flex-col items-center justify-center    ">
              <span className="text-white text-[8px] font-normal">BTC</span>
              <span className="text-white text-[7px] font-medium">
                $100,000
              </span>
              <span className="text-white text-[7px] font-normal">-10,98%</span>
            </div>
            <div className="col-span-1 row-span-1 bg-[#ff3e46] rounded-lg flex flex-col items-center justify-center">
              <span className="text-white text-[8px] font-normal">BTC</span>
              <span className="text-white text-[7px] font-medium">
                $100,000
              </span>
              <span className="text-white text-[7px] font-normal">-10,98%</span>
            </div>
            <div className="col-span-1 row-span-1 bg-[#ff3e46] rounded-lg flex flex-col items-center justify-center">
              <span className="text-white text-[8px] font-normal">BTC</span>
              <span className="text-white text-[7px] font-medium">
                $100,000
              </span>
              <span className="text-white text-[7px] font-normal">-10,98%</span>
            </div>
            <div className="col-span-1 row-span-1 bg-[#ff3e46] rounded-lg flex flex-col items-center justify-center">
              <span className="text-white text-[8px] font-normal">BTC</span>
              <span className="text-white text-[7px] font-medium">
                $100,000
              </span>
              <span className="text-white text-[7px] font-normal">-10,98%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
