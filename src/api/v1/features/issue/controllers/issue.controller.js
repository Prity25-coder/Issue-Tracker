import asyncHandler from "express-async-handler";
import issueService from "../services/issue.service.js";
import STATUS_CODE from "../../../../../constants/statusCode.js";
class IssueController {
  getAllIssue = asyncHandler(async (req, res) => {
    const { userId } = req.user;
    const issues = await issueService.allIssue(userId);
    return res.status(STATUS_CODE.OK).render("viewIssue", { issues });
  });

  getIssueById = asyncHandler(async (req, res) => {
    const { issueId } = req.params;
    const issue = await issueService.issueById(issueId);
    return res.status(STATUS_CODE.OK).render("viewIssue", { issue });
  });

  postNewIssue = asyncHandler(async (req, res) => {
    const { userId } = req.user;
    const { title, labels, description, author } = req.body;

    const postIssue = await issueService.createIssue(
      userId,
      title,
      labels,
      description,
      author
    );
    return res.status(STATUS_CODE.OK).render("createIssue", { postIssue });
  });

  patchIssueById = asyncHandler(async (req, res) => {});

  deleteIssueById = asyncHandler(async (req, res) => {});
}
const issueController = new IssueController();
export default issueController;
