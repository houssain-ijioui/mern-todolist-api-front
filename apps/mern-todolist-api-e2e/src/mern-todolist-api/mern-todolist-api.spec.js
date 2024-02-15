// tasksControllers.test.js
// Assuming this file is located in the same directory as the controllers and models
import tasksControllers from '../../../mern-todolist-api/src/controllers/tasks.controllers'; // Adjust the path accordingly
import TaskModel from '../../../mern-todolist-api/src/models/task.model'; // Adjust the path accordingly

// Mock TaskModel so that we don't interact with the actual database
jest.mock('../../../mern-todolist-api/src/models/task.model'); // Adjust the path accordingly

describe('tasksControllers', () => {
  afterEach(() => {
    // Clear all mocks after each test
    jest.clearAllMocks();
  });

  describe('getAllTasks', () => {
    it('should get all tasks when no status is provided', async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      TaskModel.find.mockResolvedValueOnce([{ /* mock task data */ }]);

      await tasksControllers.getAllTasks(req, res);

      expect(TaskModel.find).toHaveBeenCalledWith({ deleted: false });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith([{ /* mock task data */ }]);
    });

    it('should get tasks with a specific status when status is provided', async () => {
      const req = { query: { status: 'completed' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      TaskModel.find.mockResolvedValueOnce([{ /* mock task data */ }]);

      await tasksControllers.getAllTasks(req, res);

      expect(TaskModel.find).toHaveBeenCalledWith({ deleted: false, status: 'completed' });
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith([{ /* mock task data */ }]);
    });

    it('should handle errors and return 500 status', async () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      TaskModel.find.mockRejectedValueOnce(new Error('Database error'));

      await tasksControllers.getAllTasks(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.send).toHaveBeenCalledWith({
        message: 'Oops something went wrong',
      });
    });
  });

  // Repeat the same structure for other functions (createTask, getTaskById, deleteTask, updateTask)
  // ...
});
