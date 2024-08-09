import mongoose from "mongoose";
import Group from "../model/groupModel.js";
import Note from "../model/noteModel.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const createNote = asyncHandler(async (req, res) => {
  if (!req.body.group) {
    return next(new apiError(200, "id not found"));
  }

  const isValidId = mongoose.Types.ObjectId.isValid(req.body.group);

  if (!isValidId) {
    return next(new apiError(400, "not a valid group id"));
  }

  const group = await Group.findById(req.body.group);

  if (!group) {
    return next(new apiError(200, "id not found"));
  }

  const newNote = new Note(req.body);
  await newNote.save();
  return res.json(new apiResponse(200, newNote));
});

export const getNotes = asyncHandler(async (req, res, next) => {
  const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);

  if (!isValidId) {
    return next(new apiError(400, "not a valid id"));
  }

  const group = await Group.findById(req.params.id);

  if (!group) {
    return next(new apiError(400, "group not found"));
  }

  const allNotes = await Note.find({ group: req.params.id });
  return res.json(new apiResponse(200, { notes: allNotes, group: group }));
});
