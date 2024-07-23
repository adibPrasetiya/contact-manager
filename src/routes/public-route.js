import { Router } from "express";
import contactController from "../controllers/contact-controller.js";

export const publicRouter = Router();

publicRouter.get("/", contactController.get);
publicRouter.post("/contacts", contactController.post);
publicRouter.delete("/contacts/:contactId", contactController.remove);
