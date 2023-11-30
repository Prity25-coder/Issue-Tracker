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

  updateProject = async (projectId, updateObj) => {
    const project = await Project.findOne({ _id: projectId });

    if (!project) {
      throw new CustomError("No project found", STATUS_CODE.NOT_FOUND);
    }
    const updatedProject = await Project.findOneAndUpdate(
      { _id: projectId },
      { ...updateObj },
      {
        new: true,
      }
    );
    return updatedProject;
  };

  deleteProject = async (projectId) => {
    const project = await Project.findOne({ _id: projectId });

    if (!project) {
      throw new CustomError("No project found", STATUS_CODE.NOT_FOUND);
    }

    const deletedProject = await Project.findOneAndDelete({ _id: projectId });

    return deletedProject;
  };
}
const projectService = new ProjectService();
export default projectService;
