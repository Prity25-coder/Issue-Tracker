import asyncHandler from "express-async-handler";
import labelService from "../services/label.service.js";
import STATUS_CODE from "../../../../../constants/statusCode.js";
class LabelController {
  getAllLabel = asyncHandler(async (req, res) => {
    const { userId } = req.user;
    const labels = await labelService.allIssue(userId);
    return res.status(STATUS_CODE.OK).render("viewAllLabel", { labels });
  });

  getLabelById = asyncHandler(async (req, res) => {});

  postNewLabel = asyncHandler(async (req, res) => {});

  patchLabelById = asyncHandler(async (req, res) => {});

  deleteLabelById = asyncHandler(async (req, res) => {});
}
const labelController = new LabelController();
export default labelController;


