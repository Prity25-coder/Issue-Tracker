import { Router } from "express";

const projectRouter = Router();

projectRouter.get("/api/v1/projects");
projectRouter.post("/api/v1/projects");


export default projectRouter;