import { DeleteTaskUsecase } from "../../../application/usecases/delete.task.usecase";
import { Request, Response } from "express";


export class DeleteTaskController{
    constructor(private deleteTaskUsecase: DeleteTaskUsecase){}

    async handle(req: Request<{id: string}>, res: Response) {
        try {
            const { id } = req.params;

            await this.deleteTaskUsecase.execute(id);
            return res.status(204).send();
        } catch (err: any) {
            return res.status(400).json({message: err.message})
        }


    }


}