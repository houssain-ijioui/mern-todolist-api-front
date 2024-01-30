import express from "express";
const router = express.Router();
import tasksControllers from "../controllers/tasks.controllers";


// POST Tasks
router.post('/', tasksControllers.createTask);

// GET @/api/tasks/id get task by id
router.get('/:id', tasksControllers.getTaskById);

// GET @/api/tasks get all tasks
router.get('/', tasksControllers.getAllTasks);

// POST @/api/tasks create a task
router.post('/', tasksControllers.createTask)

// GET @/api/tasks/id get task by id
router.get('/:id', tasksControllers.getTaskById);

// PUT @/api/tasks update the task
router.put('/:id', tasksControllers.updateTask);

// DELETE @/api/tasks/id delete the task
router.delete('/:id', tasksControllers.deleteTask);

export default router;


