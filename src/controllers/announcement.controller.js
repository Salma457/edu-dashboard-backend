import { announcementService } from '../services/announcement.service.js';

// Get all announcements
export const getAll = async (req, res) => {
  try {
    const items = await announcementService.getAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get announcement by ID
export const getById = async (req, res) => {
  try {
    const item = await announcementService.getById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Announcement not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Create new announcement
export const create = async (req, res) => {
  try {
    const created = await announcementService.create(req.body);
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ message: 'Invalid data', error: err.message });
  }
};

// Update announcement
export const update = async (req, res) => {
  try {
    const updated = await announcementService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: 'Announcement not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Delete announcement
export const remove = async (req, res) => {
  try {
    const deleted = await announcementService.delete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Announcement not found' });
    res.json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
