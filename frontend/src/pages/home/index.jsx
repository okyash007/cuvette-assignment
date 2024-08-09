import React from "react";
import homeimg from "../../assets/home.png";

const index = () => {
  return (
    <div className="flex justify-center max-sm:hidden items-center h-full flex-col bg-[#DAE5F5]">
      <img src={homeimg} className="w-2/3" alt="" />
      <h1 className="text-3xl font-bold">Pocket Notes</h1>
      <p className="text-center w-1/2">
        Send and receive messages without keeping your phone online. Use Pocket
        Notes on up to 4 linked devices and 1 mobile phone
      </p>
    </div>
  );
};

export default index;
