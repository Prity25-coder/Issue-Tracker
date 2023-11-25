import { Router } from "express";

const issueRouter = Router();

// /api/v1/issues
issueRouter.get("/");

issueRouter.post("/");

issueRouter.patch("/:issueId");

issueRouter.delete("/:issueId");

export default issueRouter;
