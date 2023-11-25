import asyncHandler from "express-async-handler";
class ProjectController {
  getAllProject = asyncHandler(async (req, res) => {});

  getProjectById = asyncHandler(async (req, res) => {
    
  });

  postNewProject = asyncHandler(async (req, res) => {});

  patchProjectById = asyncHandler(async (req, res) => {});

  deleteProjectById = asyncHandler(async (req, res) => {});

}
const projectController = new ProjectController();
export default projectController;
