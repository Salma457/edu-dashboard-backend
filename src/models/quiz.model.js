import mongoose from "mongoose";

const quizSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    subject: { type: String, required: true },
    semester: {
  type: String,
  enum: ["First", "Second", "Summer"],
  required: true
},

    duration: { type: Number, required: true }, 
    totalMarks: { type: Number, required: true },
    questions: {
      type: [Object], // array of question objects
      default: [],
    },
    authorName: { type: String, required: true },
    authorAvatar: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.model("Quiz", quizSchema);
