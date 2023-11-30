import asyncHandler from "express-async-handler";
import issueService from "../services/issue.service.js";
import STATUS_CODE from "../../../../../constants/statusCode.js";
import { CustomError } from "../../../../common/index.js";
class IssueController {
  getAllIssue = asyncHandler(async (req, res) => {
    const { userId } = req.user;
    const issues = await issueService.allIssue(userId);
    return res.status(STATUS_CODE.OK).render("viewAllIssues", { issues });
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
    return res.status(STATUS_CODE.OK).redirect("/api/v1/issues/");
  });
  
  getCreateIssuePage = asyncHandler(async (req, res) => {
    return res.status(STATUS_CODE.OK).render("createIssue");
  });

  patchIssueById = asyncHandler(async (req, res) => {
    const { issueId } = req.params;
    const { title, labels, description, author } = req.body;

    const updateObj = { title, labels, description, author };

    Object.keys(updateObj).forEach((key) => {
      if (updateObj[key] === undefined) delete updateObj[key];
    });

    if (Object.keys(updateObj).length === 0) {
      throw new CustomError(
        "Please provide some info to update",
        STATUS_CODE.BAD_REQUEST
      );
    }

    const issue = await issueService.updateIssue(issueId, updateObj);
    return res.status(STATUS_CODE.CREATED).json(issue);
  });

  deleteIssueById = asyncHandler(async (req, res) => {
    const { issueId } = req.params;
    const issue = await issueService.deleteIssue(issueId);
    return res.status(STATUS_CODE.OK).json(issue);
  });
}
const issueController = new IssueController();
export default issueController;
