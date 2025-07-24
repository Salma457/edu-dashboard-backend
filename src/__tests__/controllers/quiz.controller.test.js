import { describe, it, expect, vi, beforeEach } from "vitest";
import * as quizController from "../../controllers/quiz.controller.js";
import { quizService } from "../../services/quiz.service.js";

describe("Quiz Controller", () => {
  let req, res;

  beforeEach(() => {
    req = { params: {}, body: {} };
    res = {
      json: vi.fn(),
      status: vi.fn(() => res),
    };
  });

  it("getAll should return list of quizzes", async () => {
    const mockData = [{ title: "Quiz 1" }];
    vi.spyOn(quizService, "getAll").mockResolvedValue(mockData);

    await quizController.getAll(req, res);

    expect(res.json).toHaveBeenCalledWith(mockData);
  });

  it("getById should return a quiz if found", async () => {
    const quiz = { id: "1", title: "Quiz" };
    req.params.id = "1";
    vi.spyOn(quizService, "getById").mockResolvedValue(quiz);

    await quizController.getById(req, res);

    expect(res.json).toHaveBeenCalledWith(quiz);
  });

  it("getById should return 404 if not found", async () => {
    req.params.id = "1";
    vi.spyOn(quizService, "getById").mockResolvedValue(null);

    await quizController.getById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Quiz not found" });
  });

  it("create should return created quiz", async () => {
    const quiz = { title: "New Quiz" };
    req.body = quiz;
    vi.spyOn(quizService, "create").mockResolvedValue(quiz);

    await quizController.create(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(quiz);
  });

  it("update should return updated quiz if found", async () => {
    const updated = { title: "Updated Quiz" };
    req.params.id = "1";
    req.body = updated;
    vi.spyOn(quizService, "update").mockResolvedValue(updated);

    await quizController.update(req, res);

    expect(res.json).toHaveBeenCalledWith(updated);
  });

  it("update should return 404 if not found", async () => {
    req.params.id = "1";
    req.body = {};
    vi.spyOn(quizService, "update").mockResolvedValue(null);

    await quizController.update(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Quiz not found" });
  });

  it("remove should return success message if deleted", async () => {
    req.params.id = "1";
    vi.spyOn(quizService, "delete").mockResolvedValue({});

    await quizController.remove(req, res);

    expect(res.json).toHaveBeenCalledWith({ message: "Deleted successfully" });
  });

  it("remove should return 404 if not found", async () => {
    req.params.id = "1";
    vi.spyOn(quizService, "delete").mockResolvedValue(null);

    await quizController.remove(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Quiz not found" });
  });
});
