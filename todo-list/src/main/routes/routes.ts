import { Router } from 'express';
import { makeCreateTaskController } from '../factories/create.task';


const router = Router();

router.post("/tasks", (req, res) => makeCreateTaskController().handle(req, res));

export default router;