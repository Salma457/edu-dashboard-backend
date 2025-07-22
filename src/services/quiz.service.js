import Quiz from "../models/quiz.model.js";

class QuizService {
  async getAll() {
    return await Quiz.find().sort({ createdAt: -1 });
  }

  async getById(id) {
    return await Quiz.findById(id);
  }

  async create(data) {
    return await Quiz.create(data);
  }

  async update(id, data) {
    return await Quiz.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await Quiz.findByIdAndDelete(id);
  }
}

export const quizService = new QuizService();
