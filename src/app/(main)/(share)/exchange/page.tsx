import React from "react";

import CryptoTable from "@/components/common/CryptoTable";

const Page = async () => {
  return (
    <>
      <div className="table w-full mt-6">
        <CryptoTable />
      </div>
    </>
  );
};

export default Page;
