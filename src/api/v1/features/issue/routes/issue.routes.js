import { Router } from "express";
import issueController from "../controllers/issue.controller.js";
import jwtAuth from "../../../middlewares/jwtAuth.middleware.js";

const issueRouter = Router();
issueRouter.use(jwtAuth);

// /api/v1/issues
issueRouter.get("/", issueController.getAllIssue);

// create issue
issueRouter.get("/create", issueController.getCreateIssuePage);

// api/v1/issues/232323232 --> inside req.params issueId = 232323232
// api/v1/issues/create -->  inside req.params issueId = create
issueRouter.get("/:issueId", issueController.getIssueById);

issueRouter.post("/", issueController.postNewIssue);

issueRouter.patch("/:issueId", issueController.patchIssueById);

issueRouter.delete("/:issueId", issueController.deleteIssueById);


export default issueRouter;
