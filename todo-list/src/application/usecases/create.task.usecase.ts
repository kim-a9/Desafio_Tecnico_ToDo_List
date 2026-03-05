import { Task, TaskProps } from "../../domain/entities/task";
import { ITaskRepository } from "../../infrastructure/database/mongodb/repository/itask.repository";


export class CreateTaskUsecase {
    constructor(private taskRepository: ITaskRepository) {}

    async execute(data: TaskProps) {
        const newTask = new Task(data);

        await this.taskRepository.create(newTask);

        return newTask.toJSON();
    
    }
}

