import { Router } from "express";
import { createGroup, getGroups } from "../controllers/groupController.js";

export const groupRouter = Router();

groupRouter.route("/").get(getGroups);
groupRouter.route("/").post(createGroup);
