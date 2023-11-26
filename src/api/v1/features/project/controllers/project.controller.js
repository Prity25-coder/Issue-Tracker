import asyncHandler from "express-async-handler";
import projectService from "../services/project.service.js";
import STATUS_CODE from "../../../../../constants/statusCode.js";
class ProjectController {
  getAllProject = asyncHandler(async (req, res) => {
    const { userId } = req.user;
    const projects = await projectService.allProject(userId);
    return res.status(STATUS_CODE.OK).render("projectDetails", { projects });
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
    return res.status(STATUS_CODE.OK).render("projectDetails", { postProject });
  });

  patchProjectById = asyncHandler(async (req, res) => {});

  deleteProjectById = asyncHandler(async (req, res) => {});
}
const projectController = new ProjectController();
export default projectController;
