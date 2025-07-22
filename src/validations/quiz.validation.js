// validations/quiz.validation.js
import Joi from "joi";

export const createQuizSchema = Joi.object({
  title: Joi.string().trim().required(),
  subject: Joi.string().trim().required(),
  semester: Joi.string().valid("First", "Second", "Summer").required(),
  duration: Joi.number().integer().min(1).required(),
  totalMarks: Joi.number().integer().min(1).required(),

  questions: Joi.array().items(
    Joi.object({
      question: Joi.string().trim().required(),
      choices: Joi.array().items(Joi.string().required()).min(2).required(),
      correctAnswer: Joi.string().required(),
      mark: Joi.number().min(1).required(),
    })
  ).min(1).required(),

  authorName: Joi.string().trim().required(),
  authorAvatar: Joi.string().uri().optional()
});
