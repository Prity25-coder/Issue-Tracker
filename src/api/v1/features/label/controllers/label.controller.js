import asyncHandler from "express-async-handler";
import labelService from "../services/label.service.js";
import STATUS_CODE from "../../../../../constants/statusCode.js";
import { CustomError } from "../../../../common/index.js";
class LabelController {
  getAllLabel = asyncHandler(async (req, res) => {
    const { userId } = req.user;
    const labels = await labelService.allLabels(userId);
    return res.status(STATUS_CODE.OK).render("viewAllLabel", { labels });
  });

  getLabelById = asyncHandler(async (req, res) => {});

  postNewLabel = asyncHandler(async (req, res) => {
    const { title, description } = req.body;
    const { userId } = req.user;
    if (!(title.trim() && description.trim())) {
      throw new CustomError(
        "Title and description is required",
        STATUS_CODE.BAD_REQUEST
      );
    }

    const label = await labelService.createLabel(title, description, userId);

    return res.status(STATUS_CODE.OK).redirect("/api/v1/projects");
  });

  patchLabelById = asyncHandler(async (req, res) => {});

  deleteLabelById = asyncHandler(async (req, res) => {});
}
const labelController = new LabelController();
export default labelController;
