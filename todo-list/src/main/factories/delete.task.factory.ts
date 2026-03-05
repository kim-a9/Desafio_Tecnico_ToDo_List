import { DeleteTaskUsecase } from "../../application/usecases/delete.task.usecase";
import { TaskRepository } from "../../infrastructure/database/mongodb/repository/task.repository";
import { DeleteTaskController } from "../../infrastructure/http/controllers/delete.task.controller";


export const makeDeleteTaskController = (): DeleteTaskController => {
    const repository = new TaskRepository();
    const useCase = new DeleteTaskUsecase(repository);
    return new DeleteTaskController(useCase);
}