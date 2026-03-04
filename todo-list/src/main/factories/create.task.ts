import { CreateTaskUsecase } from "../../application/usecases/create.task";
import { TaskRepository } from "../../infrastructure/database/mongodb/repository/task.repository";
import { CreateTaskController } from "../../infrastructure/http/controllers/task.controllers";


export const makeCreateTaskController = (): CreateTaskController => {
    const repository = new TaskRepository();
    const usecase = new CreateTaskUsecase(repository);
    return new CreateTaskController();
}