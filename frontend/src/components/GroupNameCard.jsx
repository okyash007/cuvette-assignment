import React from "react";

const GroupNameCard = ({ name, color }) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="bg-blue-600 text-white p-2 rounded-full">MN</div>
      <div>
        <h1 className="w-max">my notes</h1>
      </div>
    </div>
  );
};

export default GroupNameCard;
