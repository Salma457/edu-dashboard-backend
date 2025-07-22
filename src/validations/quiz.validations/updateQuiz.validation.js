// src/validations/quiz.update.validation.js
import Joi from 'joi';

export const updateQuizSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(100)
    .messages({
      'string.min': 'Title must be at least 3 characters',
      'string.max': 'Title must be at most 100 characters',
    }),

  description: Joi.string()
    .max(500)
    .messages({
      'string.max': 'Description must be at most 500 characters',
    }),

  subject: Joi.string()
    .min(2)
    .max(50)
    .messages({
      'string.min': 'Subject must be at least 2 characters',
      'string.max': 'Subject must be at most 50 characters',
    }),

  semester: Joi.string()
    .valid('First', 'Second', 'Summer')
    .messages({
      'any.only': 'Semester must be one of First, Second, or Summer',
    }),

  duration: Joi.number()
    .min(1)
    .max(180)
    .messages({
      'number.min': 'Duration must be at least 1 minute',
      'number.max': 'Duration must be at most 180 minutes',
    }),

  totalMarks: Joi.number()
    .min(1)
    .max(1000)
    .messages({
      'number.min': 'Total Marks must be at least 1',
      'number.max': 'Total Marks must be at most 1000',
    }),

  questions: Joi.array()
    .messages({
      'array.base': 'Questions must be an array',
    }),

  authorName: Joi.string()
    .min(3)
    .max(50)
    .messages({
      'string.min': 'Author name must be at least 3 characters',
      'string.max': 'Author name must be at most 50 characters',
    }),

  authorAvatar: Joi.string()
    .uri()
    .messages({
      'string.uri': 'Author avatar must be a valid URL',
    }),
});
