import { UpdateTaskUsecase } from "../../application/usecases/update.task.usecase";
import { TaskRepository } from "../../infrastructure/database/mongodb/repository/task.repository";
import { UpdateTaskController } from "../../infrastructure/http/controllers/update.task.controller";


export const makeUpdateTaskController = ():  UpdateTaskController => {
    const repository = new TaskRepository();
    const useCase = new UpdateTaskUsecase(repository);
    return new UpdateTaskController(useCase);
}