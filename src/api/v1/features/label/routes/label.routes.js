import { Router } from "express";

const labelRouter = Router();

// /api/v1/labels
labelRouter.get("/");

labelRouter.post("/");

labelRouter.patch("/:labelId");

labelRouter.delete("/:labelId");

export default labelRouter;
