import express from "express";
const router = express.Router();
import tasksControllers from "../controllers/tasks.controllers";


/**
 * @openapi
 * paths:
 *   '/api/users/signup':
 *     post:
 *       tags:
 *         - User Controller
 *       summary: Create a task
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               required:
 *                 - title
 *                 - deadline
 *                 - completed
 *                 - priority
 *                 - description
 *               properties:
 *                 title:
 *                   type: string
 *                 deadline:
 *                   type: date
 *                 priority:
 *                   type: string
 *                 completed:
 *                   type: boolean
 *       responses:
 *         201:
 *           description: Created
 *         409:
 *           description: Validation Failed
 *         404:
 *           description: Not Found
 *         500:
 *           description: Server Error
 */
router.post('/', tasksControllers.createTask);

// GET @/api/tasks/id get task by id
router.get('/:id', tasksControllers.getTaskById);

// GET @/api/tasks get all tasks
router.get('/', tasksControllers.getAllTasks);

// PUT @/api/tasks update the task
router.put('/:id', tasksControllers.updateTask);

// DELETE @/api/tasks/id delete the task
router.delete('/:id', tasksControllers.deleteTask);

export default router;


