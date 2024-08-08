import React from "react";
import GroupNameCard from "../../components/GroupNameCard";
import Note from "./components/Note";

const index = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="bg-blue-400 p-2">
        <GroupNameCard />
      </div>
      <div className="flex-grow bg-[#DAE5F5] p-3 overflow-y-auto flex flex-col gap-3">
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
        <Note />
      </div>
      <div className="flex bg-blue-600 p-3 rounded-bl-xl">
        <textarea className="flex-grow rounded-xl p-3"></textarea>
      </div>
    </div>
  );
};

export default index;
