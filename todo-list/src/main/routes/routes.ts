import { Router } from 'express';
import { makeGetTaskByIdController, makeGetTasksController } from '../factories/get.task.factory';
import { makeCreateTaskController } from '../factories/create.task.factory';
import { makeUpdateTaskController } from '../factories/update.task.factory';
import { makeDeleteTaskController } from '../factories/delete.task.factory';

const router = Router();

router.post("/tasks", (req, res) => makeCreateTaskController().handle(req, res));
router.get("/tasks/:id", (req, res) => makeGetTaskByIdController().handle(req, res));
router.get("/tasks", (req, res) => makeGetTasksController().handle(req, res));
router.put("/tasks/:id", (req, res) => makeUpdateTaskController().handle(req, res));
router.delete("/tasks/:id", (req, res) => makeDeleteTaskController().handle(req, res));

export default router;