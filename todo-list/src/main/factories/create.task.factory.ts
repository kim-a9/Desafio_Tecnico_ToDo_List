import { CreateTaskUsecase } from "../../application/usecases/create.task.usecase";
import { Task } from "../../domain/entities/task";
import { TaskRepository } from "../../infrastructure/database/mongodb/repository/task.repository";
import { CreateTaskController } from "../../infrastructure/http/controllers/create.task.controllers";


export const makeCreateTaskController = (): CreateTaskController => {
    const repository = new TaskRepository();
    const usecase = new CreateTaskUsecase(repository);
    return new CreateTaskController();
}
