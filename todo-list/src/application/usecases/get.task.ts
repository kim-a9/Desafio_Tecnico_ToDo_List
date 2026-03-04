import { Task, TaskFilters } from "../../domain/entities/task";
import { ITaskRepository } from "../../infrastructure/database/mongodb/repository/itask.repository";
import { TaskRepository } from "../../infrastructure/database/mongodb/repository/task.repository";


export class GetTaskByIdUsecase {
    constructor(private taskRepository: ITaskRepository) {}

    async execute(id: string) {
        const getTask = await this.taskRepository.findById(id);
        if (!getTask) {
            throw new Error("Não foi possível encontrar a Task.")
        }
        return getTask.toJSON();
    }
}

export class GetTasksUseCase {
    constructor(private taskRepository: ITaskRepository) {}

    async execute(filters: TaskFilters) {
        const getTask = await this.taskRepository.findAll(filters);
        return getTask.map(task => task.toJSON());
    }
    
}
