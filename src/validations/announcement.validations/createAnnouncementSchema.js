// src/validations/announcement.create.validation.js
import Joi from 'joi';

export const createAnnouncementSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
      'string.empty': 'Title is required',
      'string.min': 'Title must be at least 3 characters',
      'string.max': 'Title must be at most 100 characters',
    }),

  content: Joi.string()
    .min(10)
    .max(1000)
    .required()
    .messages({
      'string.empty': 'Content is required',
      'string.min': 'Content must be at least 10 characters',
      'string.max': 'Content must be at most 1000 characters',
    }),

  type: Joi.string()
    .valid('General', 'Urgent', 'Info')
    .default('General')
    .messages({
      'any.only': 'Type must be one of General, Urgent, or Info',
    }),

  subject: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      'string.empty': 'Subject is required',
      'string.min': 'Subject must be at least 2 characters',
      'string.max': 'Subject must be at most 50 characters',
    }),

  authorName: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      'string.empty': 'Author name is required',
      'string.min': 'Author name must be at least 3 characters',
      'string.max': 'Author name must be at most 50 characters',
    }),

  authorAvatar: Joi.string()
    .uri()
    .allow('')
    .messages({
      'string.uri': 'Author avatar must be a valid URL',
    }),
});
