import mongoose from "mongoose";
import Issue from "../models/issue.model.js";

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

  updateIssue = async () => {};

  deleteIssue = async () => {};
}
const issueService = new IssueService();
export default issueService;
