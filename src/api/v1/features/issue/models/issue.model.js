import mongoose, { model } from "mongoose";
import Label from "../../label/models/label.model.js";

const issueSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    // labels: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Label",
    //     required: true,
    //   },
    // ],
    label: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      trim: true,
      required: true,
    },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Issue = mongoose.model("Issue", issueSchema);
export default Issue;
