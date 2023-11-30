import mongoose from "mongoose";
import Issue from "../models/issue.model.js";
import { CustomError } from "../../../../common/index.js";

const { ObjectId } = mongoose.Types;

class IssueService {
  allIssue = async (userId) => {
    const allIssue = await Issue.find({ createdBy: new ObjectId(userId) });
    return allIssue;
  };

  issueById = async (issueId) => {
    const issue = await Issue.findOne({ _id: issueId });
    return issue;
  };

  createIssue = async (userId, title, labels, description, author) => {
    const issue = new Issue({
      title,
      labels,
      description,
      author,
      createdBy: new ObjectId(userId),
    });
    await issue.save();

    return issue;
  };

  updateIssue = async (issueId, updateObj) => {
    const issue = await Issue.findOne({ _id: issueId });

    if (!issue) {
      throw new CustomError("No project found", STATUS_CODE.NOT_FOUND);
    }
    const updatedIssue = await Issue.findOneAndUpdate(
      { _id: issueId },
      { ...updateObj },
      {
        new: true,
      }
    );
    return updatedIssue;
  };

  deleteIssue = async (issueId) => {
    const issue = await Issue.findOne({ _id: issueId });

    if (!issue) {
      throw new CustomError("No Issue found", STATUS_CODE.NOT_FOUND);
    }

    const deletedIssue = await Issue.findOneAndDelete({ _id: issueId });

    return deletedIssue;
  };
}
const issueService = new IssueService();
export default issueService;
