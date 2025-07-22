// src/validations/announcement.update.validation.js
import Joi from 'joi';

export const updateAnnouncementSchema = Joi.object({
  title: Joi.string().min(3).max(100),

  content: Joi.string().min(10).max(1000),

  type: Joi.string().valid('General', 'Urgent', 'Info'),

  subject: Joi.string().min(2).max(50),

  authorName: Joi.string().min(3).max(50),

  authorAvatar: Joi.string().uri().allow(''),
});
