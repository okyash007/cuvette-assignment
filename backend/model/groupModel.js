import mongoose from "mongoose";

const groupSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    color: { type: String, require: true },
  },
  { timestamps: true }
);

const Group = mongoose.model("Group", groupSchema);

export default Group;
