import asyncHandler from "express-async-handler";
import issueService from "../services/issue.service.js";
import STATUS_CODE from "../../../../../constants/statusCode.js";
import { CustomError } from "../../../../common/index.js";
import { labelService } from "../../label/index.js";
class IssueController {
  getAllIssue = asyncHandler(async (req, res) => {
    const { userId } = req.user;
    const { projectId } = req.params;
    const issues = await issueService.allIssue(userId, projectId);
    console.log("All Issues", issues); //! remove
    return res
      .status(STATUS_CODE.OK)
      .render("viewAllIssues", { issues, projectId });
  });

  getIssueById = asyncHandler(async (req, res) => {
    const { issueId } = req.params;
    const issue = await issueService.issueById(issueId);
    return res.status(STATUS_CODE.OK).render("viewIssue", { issue });
  });

  getCreateIssuePage = asyncHandler(async (req, res) => {
    // get all labels
    const { userId } = req.user;
    const { projectId } = req.params;
    const labels = await labelService.allLabels(userId);
    console.log(labels);
    return res
      .status(STATUS_CODE.OK)
      .render("createIssue", { labels, projectId });
  });

  postNewIssue = asyncHandler(async (req, res) => {
    const { userId } = req.user;
    const { projectId } = req.params;
    const { title, label, description, author } = req.body;

    const postIssue = await issueService.createIssue(
      userId,
      projectId,
      title,
      label,
      description,
      author
    );

    // console.log(postIssue);
    return res.status(STATUS_CODE.OK).redirect(`/api/v1/issues/${projectId}`);
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
