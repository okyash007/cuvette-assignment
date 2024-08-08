import Group from "../model/groupModel.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const getGroups = asyncHandler(async (req, res) => {
  const allGroups = await Group.find();
  return res.json(new apiResponse(200, allGroups));
});

export const createGroup = asyncHandler(async (req, res) => {
  const newGroup = new Group(req.body);
  await newGroup.save();
  return res.json(new apiResponse(200, newGroup));
});
