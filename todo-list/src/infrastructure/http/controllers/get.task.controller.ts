import { Request, Response } from 'express';
import { GetTaskByIdUsecase, GetTasksUseCase } from "../../../application/usecases/get.task";
import { TaskPriority, TaskStatus } from "../../../domain/entities/task";


export class GetTaskByIdController{
    constructor(private getByIdUsecase: GetTaskByIdUsecase) {}

    async handle(req: Request, res: Response) {
        try {
            const {id} = req.params;
            
            const taskId = await this.getByIdUsecase.execute(id as string);
            return res.status(200).json(taskId);
        } catch (err: any) {
            return res.status(400).json({message: err.message})
        }
    }
}

export class GetTasksController {
    constructor(private getAllTasks: GetTasksUseCase) {}

    async handle(req: Request, res: Response) {
        try {
            const { status, priority } = req.query;

            const taskFilter = await this.getAllTasks.execute({
                status: status as TaskStatus,
                priority: priority as TaskPriority,
            })
            return res.status(200).json(taskFilter);
        
        } catch (err: any) {
            return res.status(400).json({message: err.message})
        }

    }

};