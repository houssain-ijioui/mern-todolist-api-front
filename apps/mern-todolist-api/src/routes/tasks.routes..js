import express from "express";
const router = express.Router();
import tasksControllers from "../controllers/tasks.controllers";


//
router.post('/', tasksControllers.createTask)


// GET @/api/tasks/id get task by id
router.get('/:id', tasksControllers.getTaskById);


export default router;
