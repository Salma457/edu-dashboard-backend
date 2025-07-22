import Quiz from "../models/quiz.model.js";

export const getAll = async (req, res) => {
  const items = await Quiz.find().sort({ createdAt: -1 });
  res.json(items);
};

export const getById = async (req, res) => {
  const item = await Quiz.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Quiz not found" });
  res.json(item);
};

export const create = async (req, res) => {
  const created = await Quiz.create(req.body);
  res.status(201).json(created);
};

export const update = async (req, res) => {
  const updated = await Quiz.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: "Quiz not found" });
  res.json(updated);
};

export const remove = async (req, res) => {
  const deleted = await Quiz.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Quiz not found" });
  res.json({ message: "Deleted successfully" });
};
