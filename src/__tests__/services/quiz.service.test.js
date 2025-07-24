import { describe, it, expect, vi, beforeEach } from 'vitest';
import { quizService } from '../../services/quiz.service.js';
import Quiz from '../../models/quiz.model.js';

// Mock model methods
vi.mock('../../models/quiz.model.js');

describe('Quiz Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('getAll should return sorted quizzes', async () => {
    const mockQuizzes = [{ title: 'Quiz 1' }, { title: 'Quiz 2' }];
    Quiz.find.mockReturnValue({
      sort: vi.fn().mockReturnValue(mockQuizzes),
    });

    const result = await quizService.getAll();
    expect(result).toEqual(mockQuizzes);
    expect(Quiz.find).toHaveBeenCalled();
  });

  it('getById should return a quiz by ID', async () => {
    const mockQuiz = { _id: '123', title: 'Sample Quiz' };
    Quiz.findById.mockResolvedValue(mockQuiz);

    const result = await quizService.getById('123');
    expect(result).toEqual(mockQuiz);
    expect(Quiz.findById).toHaveBeenCalledWith('123');
  });

  it('create should add a new quiz', async () => {
    const quizData = { title: 'New Quiz' };
    const mockQuiz = { _id: '123', ...quizData };
    Quiz.create.mockResolvedValue(mockQuiz);

    const result = await quizService.create(quizData);
    expect(result).toEqual(mockQuiz);
    expect(Quiz.create).toHaveBeenCalledWith(quizData);
  });

  it('update should update a quiz and return the updated quiz', async () => {
    const quizData = { title: 'Updated Title' };
    const updatedQuiz = { _id: '123', ...quizData };
    Quiz.findByIdAndUpdate.mockResolvedValue(updatedQuiz);

    const result = await quizService.update('123', quizData);
    expect(result).toEqual(updatedQuiz);
    expect(Quiz.findByIdAndUpdate).toHaveBeenCalledWith('123', quizData, { new: true });
  });

  it('delete should remove a quiz by ID', async () => {
    const deletedQuiz = { _id: '123', title: 'Deleted Quiz' };
    Quiz.findByIdAndDelete.mockResolvedValue(deletedQuiz);

    const result = await quizService.delete('123');
    expect(result).toEqual(deletedQuiz);
    expect(Quiz.findByIdAndDelete).toHaveBeenCalledWith('123');
  });
});
