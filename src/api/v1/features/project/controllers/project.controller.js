import asyncHandler from "express-async-handler";
import projectService from "../services/project.service.js";
import STATUS_CODE from "../../../../../constants/statusCode.js";
import { CustomError } from "../../../../common/index.js";
class ProjectController {
  getAllProject = asyncHandler(async (req, res) => {
    const { userId } = req.user;
    const projects = await projectService.allProject(userId);
    return res.status(STATUS_CODE.OK).render("landing", { projects });
  });

  getProjectById = asyncHandler(async (req, res) => {
    const { projectId } = req.params;
    const project = await projectService.projectById(projectId);
    return res.status(STATUS_CODE.OK).render("projectDetails", { project });
  });

  postNewProject = asyncHandler(async (req, res) => {
    const { userId } = req.user;
    const { projectName, description, author } = req.body;

    const postProject = await projectService.createProject(
      userId,
      projectName,
      description,
      author
    );
    return res.status(STATUS_CODE.OK).redirect("/");
  });

  patchProjectById = asyncHandler(async (req, res) => {
    const { projectId } = req.params;
    const { projectName, description, author } = req.body;

    const updateObj = { projectName, description, author };

    Object.keys(updateObj).forEach((key) => {
      if (updateObj[key] === undefined) delete updateObj[key];
    });

    if (Object.keys(updateObj).length === 0) {
      throw new CustomError(
        "Please provide some info to update",
        STATUS_CODE.BAD_REQUEST
      );
    }

    const project = await projectService.updateProject(projectId, updateObj);
    return res.status(STATUS_CODE.CREATED).json(project);
  });

  deleteProjectById = asyncHandler(async (req, res) => {
    const { projectId } = req.params;
    const project = await projectService.deleteProject(projectId);
    return res.status(STATUS_CODE.OK).json(project);
  });
}
const projectController = new ProjectController();
export default projectController;
