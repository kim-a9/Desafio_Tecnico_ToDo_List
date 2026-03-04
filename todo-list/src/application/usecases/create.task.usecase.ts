import { Task, TaskProps } from "../../domain/entities/task";
import { ITaskRepository } from "../../infrastructure/database/mongodb/repository/itask.repository";


export class CreateTaskUsecase {
    constructor(private taskRepository: ITaskRepository) {}

    async execute(data: TaskProps) {
        const newTask = new Task(data);
        const taskData = await this.taskRepository.create(newTask);
    
    }
}

