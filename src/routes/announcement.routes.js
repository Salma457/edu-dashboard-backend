import express from "express";
import {
  getAll,
  getById,
  create,
  update,
  remove,
} from "../controllers/announcement.controller.js";
import{ validate} from "../middlewares/validate.js";
import { createAnnouncementSchema } from "../validations/announcement.validations/createAnnouncementSchema.js";
import { updateAnnouncementSchema } from "../validations/announcement.validations/updateAnnouncementSchema.js";


const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/",validate(createAnnouncementSchema), create);
router.put("/:id", validate(updateAnnouncementSchema), update);
router.delete("/:id", remove);

export default router;
