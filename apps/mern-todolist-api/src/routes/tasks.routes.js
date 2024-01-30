import express from "express";
const router = express.Router();
import tasksControllers from "../controllers/tasks.controllers";


// POST Tasks
router.post('/', tasksControllers.createTask);


// GET @/api/tasks/id get task by id
router.get('/:id', tasksControllers.getTaskById);

// delete task by id
router.delete('/:id', tasksControllers.deleteTask);

export default router;
