import { Router } from "express";
import labelController from "../controllers/label.controller.js";
import jwtAuth from "../../../middlewares/jwtAuth.middleware.js";

const labelRouter = Router();
labelRouter.use(jwtAuth);


// /api/v1/labels
labelRouter.get("/");

labelRouter.post("/", labelController.postNewLabel);

labelRouter.patch("/:labelId");

labelRouter.delete("/:labelId");

export default labelRouter;
