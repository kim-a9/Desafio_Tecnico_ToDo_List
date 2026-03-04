import { Router } from 'express';
import { makeGetTaskByIdController, makeGetTasksController } from '../factories/get.task.factory';
import { makeCreateTaskController } from '../factories/create.task.factory';

const router = Router();

router.post("/tasks", (req, res) => makeCreateTaskController().handle(req, res));
router.get("/tasks/:id", (req, res) => makeGetTaskByIdController().handle(req, res));
router.get("/tasks", (req, res) => makeGetTasksController().handle(req, res));

export default router;