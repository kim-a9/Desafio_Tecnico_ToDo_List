import { Request, Response } from "express";
import { CreateTaskUsecase } from "../../../application/usecases/create.task.usecase";
import { TaskProps } from "../../../domain/entities/task";
import { TaskRepository } from "../../database/mongodb/repository/task.repository";

export class CreateTaskController{
    async handle(req: Request<{},{},TaskProps>, res: Response): Promise<Response> {
        const data = req.body;

        const taskRepo = new TaskRepository();
        const createTask = new CreateTaskUsecase(taskRepo);

        try {
            await createTask.execute(data);
            return res.status(201).json(data);
        } catch (e: any) {
            return res.status(400).json({ error: e.message })
        }

    }
};

