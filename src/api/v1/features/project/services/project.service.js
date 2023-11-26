import mongoose from "mongoose";
import Project from "../models/project.model.js";

const { ObjectId } = mongoose.Types;

class ProjectService {
  allProject = async (userId) => {
    const allProject = await Project.find({ createdBy: new ObjectId(userId) });
    return allProject;
  };

  projectById = async (projectId) => {
    const project = await Project.findOne({ _id: projectId });
    return project;
  };

  createProject = async (userId, projectName, description, author) => {
    const project = new Project({
      projectName,
      description,
      author,
      createdBy: new ObjectId(userId),
    });
    await project.save();

    return project;
  };

  updateProject = async () => {};

  deleteProject = async () => {};
}
const projectService = new ProjectService();
export default projectService;
