import { Request, Response } from 'express';
import { UpdateTaskUsecase } from '../../../application/usecases/update.task.usecase';
import { validationSchema } from '../../database/mongodb/schema/validation.schema';


export class UpdateTaskController {
    constructor(private updateTask: UpdateTaskUsecase) {}

    async handle(req: Request<{id: string}>, res: Response) {
        try {
            const { id } = req.params;

            const validatedTask = validationSchema.parse(req.body)

            const updatedTask = await this.updateTask.execute(id, validatedTask);

            return res.status(200).json(updatedTask);
        } catch (err: any) {
            return res.status(400).json({message: err.message})
        }
    }
}