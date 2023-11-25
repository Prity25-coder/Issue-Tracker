import mongoose, { model } from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      trim: true,
      unique: true,
      lowercase: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: String,
      trim: true,
      required: true,
    },
    createdBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
