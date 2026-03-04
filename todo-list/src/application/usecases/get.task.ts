import { Task, TaskProps } from "../../domain/entities/task";
import { TaskRepository } from "../../infrastructure/database/mongodb/repository/task.repository";


export class GetTaskByIdUsecase {
    constructor(private taskRepository: TaskRepository) {}

    async execute(id: string): Promise<Task | null> {
        const getTask = await this.taskRepository.findById(id);
        return getTask;
    }
}

export class GetAllTasksUseCase {
    constructor(private taskRepository: TaskRepository){}
    
}

export class GetByStatusUseCase {
    constructor(private taskRepository: TaskRepository){}
    
}

export class GetByPriorityUseCase {
    constructor(private taskRepository: TaskRepository){}
    
}
