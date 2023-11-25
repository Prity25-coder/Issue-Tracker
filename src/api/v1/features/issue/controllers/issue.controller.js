import asyncHandler from "express-async-handler";
class IssueController {
  getAllIssue = asyncHandler(async (req, res) => {});

  getIssueById = asyncHandler(async (req, res) => {});

  postNewIssue = asyncHandler(async (req, res) => {});

  patchIssueById = asyncHandler(async (req, res) => {});

  deleteIssueById = asyncHandler(async (req, res) => {});
}
const issueController = new IssueController();
export default issueController;
