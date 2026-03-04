import { Task, TaskProps } from "../../domain/entities/task";
import { TaskRepository } from "../../infrastructure/database/mongodb/repository/task.repository";


export class CreateTaskUsecase {
    constructor(private taskRepository: TaskRepository) {}

    async execute(data: TaskProps) {
        const newTask = new Task(data);
        const taskData = await this.taskRepository.create(newTask);
    
    }
}