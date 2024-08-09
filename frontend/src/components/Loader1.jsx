import React from "react";
import { ring2 } from "ldrs";

// Default values shown

const Loader1 = ({ size, stroke, color }) => {
  ring2.register();
  return (
    <>
      <l-ring-2
        size={size}
        stroke={stroke}
        stroke-length="0.25"
        bg-opacity="0.1"
        speed="0.8"
        color={color}
      ></l-ring-2>
    </>
  );
};

export default Loader1;
