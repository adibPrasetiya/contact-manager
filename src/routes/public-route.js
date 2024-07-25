import { Router } from "express";
import contactController from "../controllers/contact-controller.js";

export const publicRouter = Router();

publicRouter.get("/", contactController.get);
publicRouter.post("/contacts", contactController.post);
publicRouter.post("/contacts/:contactId/edit", contactController.update);
publicRouter.post("/contacts/:contactId/delete", contactController.remove);
