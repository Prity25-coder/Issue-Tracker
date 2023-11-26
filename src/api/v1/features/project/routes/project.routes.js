import { Router } from "express";
import projectController from "../controllers/project.controller.js";
import jwtAuth from "../../../middlewares/jwtAuth.middleware.js";

const projectRouter = Router();
projectRouter.use(jwtAuth);

// /api/v1/projects
projectRouter.get("/", projectController.getAllProject);
projectRouter.post("/", projectController.postNewProject);
projectRouter.patch("/:projectId", projectController.patchProjectById);
projectRouter.delete("/:projectId", projectController.deleteProjectById);

export default projectRouter;
