import { GetTaskByIdUsecase, GetTasksUseCase } from "../../application/usecases/get.task";
import { TaskRepository } from "../../infrastructure/database/mongodb/repository/task.repository";
import { GetTaskByIdController, GetTasksController } from "../../infrastructure/http/controllers/get.task.controller";


export const makeGetTaskByIdController = (): GetTaskByIdController => {
    const repository = new TaskRepository();
    const usecase = new GetTaskByIdUsecase(repository);
    return new GetTaskByIdController(usecase);
}

export const makeGetTasksController = (): GetTasksController => {
    const repository = new TaskRepository();
    const usecase = new GetTasksUseCase(repository);
    return new GetTasksController(usecase);
}