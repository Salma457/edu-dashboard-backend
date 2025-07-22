import { quizService } from "../services/quiz.service.js";

export const getAll = async (req, res) => {
  const items = await quizService.getAll();
  res.json(items);
};

export const getById = async (req, res) => {
  const item = await quizService.getById(req.params.id);
  if (!item) return res.status(404).json({ message: "Quiz not found" });
  res.json(item);
};

export const create = async (req, res) => {
  const created = await quizService.create(req.body);
  res.status(201).json(created);
};

export const update = async (req, res) => {
  const updated = await quizService.update(req.params.id, req.body);
  if (!updated) return res.status(404).json({ message: "Quiz not found" });
  res.json(updated);
};

export const remove = async (req, res) => {
  const deleted = await quizService.delete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Quiz not found" });
  res.json({ message: "Deleted successfully" });
};
