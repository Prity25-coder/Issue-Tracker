import mongoose from "mongoose";
import Label from "../models/label.model.js";
import { CustomError } from "../../../../common/index.js";
import STATUS_CODE from "../../../../../constants/statusCode.js";

const { ObjectId } = mongoose.Types;
class LabelService {
  allLabels = async (userId) => {
    const allLabel = await Label.find(
      { createdBy: new ObjectId(userId) },
      { title: 1 }
    );
    return allLabel;
  };

  labelById = async () => {};

  createLabel = async (title, description, userId) => {
    // search label by title
    const prevLabel = await Label.findOne({ title });

    // if found throw error
    if (prevLabel) {
      throw new CustomError(
        "Label already exist with this title",
        STATUS_CODE.BAD_REQUEST
      );
    }

    const label = new Label({
      title,
      description,
      createdBy: new ObjectId(userId),
    });

    await label.save();
    return label;
  };

  updateLabel = async () => {};

  deleteLabel = async () => {};
}
const labelService = new LabelService();
export default labelService;
