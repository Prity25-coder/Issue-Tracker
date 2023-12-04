import mongoose from "mongoose";
import Label from "../models/label.model.js";

const { ObjectId } = mongoose.Types;
class LabelService {
  allIssue = async (userId) => {
    const allLabel = await Label.find({ createdBy: new ObjectId(userId) });
    return allLabel;
  };

  labelById = async () => {};

  createLabel = async () => {};

  updateLabel = async () => {};

  deleteLabel = async () => {};
}
const labelService = new LabelService();
export default labelService;
