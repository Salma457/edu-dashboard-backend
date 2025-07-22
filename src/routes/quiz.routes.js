import express from "express";
import {
  getAll,
  getById,
  create,
  update,
  remove,
} from "../controllers/quiz.controller.js";
import { validate } from "../middlewares/validate.js";
import { createQuizSchema } from "../validations/quiz.validations/quiz.create.validation.js";
import { updateQuizSchema } from "../validations/quiz.validations/updateQuiz.validation.js";
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/",validate(createQuizSchema), create);
router.put("/:id", validate(updateQuizSchema),update);
router.delete("/:id", remove);

export default router;
