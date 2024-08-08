import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
    text: { type: String, required: true },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
