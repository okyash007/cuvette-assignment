import { Router } from "express";
import { createNote, getNotes } from "../controllers/noteController.js";

export const noteRouter = Router();

noteRouter.route("/:id").get(getNotes);
noteRouter.route("/").post(createNote);
