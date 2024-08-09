import React from "react";
import { formatString } from "../utils/helper";

const GroupNameCard = ({ name, color, dark }) => {
  return (
    <div className="flex gap-2 items-center">
      <div
        style={{ backgroundColor: color }}
        className="bg-blue-600 w-10 h-10 text-white flex justify-center items-center rounded-full"
      >
        {formatString(name)}
      </div>
      <div>
        {dark ? (
          <h1 className="w-max text-white">{name}</h1>
        ) : (
          <h1 className="w-max">{name}</h1>
        )}
      </div>
    </div>
  );
};

export default GroupNameCard;
