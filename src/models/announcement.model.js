import {model,Schema} from "mongoose";
const announcementSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["General", "Urgent", "Info"],
      default: "General",
    },
    subject: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
    authorAvatar: {
      type: String,
      default: "", // optional avatar
    },
  },
  { timestamps: true } // adds createdAt and updatedAt
);

const announcementModel = model("Announcement", announcementSchema);
export default announcementModel;
