import React from "react";
import { formatTimestamp } from "../../../utils/helper";

const Note = ({ note }) => {
  const timestamp = formatTimestamp(note.createdAt);
  return (
    <div className="bg-white rounded-md shadow-lg p-3">
      <p>{note.text}</p>
      <p className="text-end text-sm">
        {timestamp.date + " • " + timestamp.time}
      </p>
    </div>
  );
};

export default Note;
