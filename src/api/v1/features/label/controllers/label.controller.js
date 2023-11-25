import asyncHandler from "express-async-handler";
class LabelController {
  getAllLabel = asyncHandler(async (req, res) => {});

  getLabelById = asyncHandler(async (req, res) => {});

  postNewLabel = asyncHandler(async (req, res) => {});

  patchLabelById = asyncHandler(async (req, res) => {});

  deleteLabelById = asyncHandler(async (req, res) => {});
}
const labelController = new LabelController();
export default labelController;
