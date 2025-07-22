import express from "express";
import {
  getAll,
  getById,
  create,
  update,
  remove,
} from "../controllers/announcement.controller.js";
import { validate } from "../middlewares/validate.js";
import { createAnnouncementSchema } from "../validations/announcement.validations/createAnnouncementSchema.js";
import { updateAnnouncementSchema } from "../validations/announcement.validations/updateAnnouncementSchema.js";

const router = express.Router();

/**
 * @swagger
 * /api/announcements:
 *   get:
 *     summary: Get all announcements
 *     tags: [Announcements]
 *     responses:
 *       200:
 *         description: List of announcements
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Announcement'
 */
router.get("/", getAll);
/**
 * @swagger
 * /api/announcements/{id}:
 *   get:
 *     summary: Get announcement by ID
 *     tags: [Announcements]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Announcement ID
 *     responses:
 *       200:
 *         description: Announcement data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Announcement'
 *       404:
 *         description: Announcement not found
 */
router.get("/:id", getById);
/**
 * @swagger
 * /api/announcements:
 *   post:
 *     summary: Create a new announcement
 *     tags: [Announcements]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnnouncementCreate'
 *     responses:
 *       201:
 *         description: Announcement created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Announcement'
 *       400:
 *         description: Invalid input
 */
router.post("/", validate(createAnnouncementSchema), create);
/**
 * @swagger
 * /api/announcements/{id}:
 *   put:
 *     summary: Update an announcement
 *     tags: [Announcements]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Announcement ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnnouncementCreate'
 *     responses:
 *       200:
 *         description: Announcement updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Announcement'
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Announcement not found
 */
router.put("/:id", validate(updateAnnouncementSchema), update);
/**
 * @swagger
 * /api/announcements/{id}:
 *   delete:
 *     summary: Delete an announcement
 *     tags: [Announcements]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Announcement ID
 *     responses:
 *       200:
 *         description: Announcement deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Announcement'
 *       404:
 *         description: Announcement not found
 */
router.delete("/:id", remove);

export default router;
