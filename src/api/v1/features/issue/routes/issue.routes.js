import { Router } from "express";
import issueController from "../controllers/issue.controller.js";
import jwtAuth from "../../../middlewares/jwtAuth.middleware.js";

const issueRouter = Router();
issueRouter.use(jwtAuth);

// /api/v1/issues
issueRouter.get("/", issueController.getAllIssue);
issueRouter.get("/:issueId", issueController.getIssueById);

issueRouter.post("/", issueController.postNewIssue);

issueRouter.patch("/:issueId", issueController.patchIssueById);

issueRouter.delete("/:issueId", issueController.deleteIssueById);

// create issue
issueRouter.get("/create", issueController.getCreateIssuePage);

export default issueRouter;
