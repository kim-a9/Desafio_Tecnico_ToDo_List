import { Task, TaskFilters, TaskProps } from "../../domain/entities/task";
import { ITaskRepository } from "../../infrastructure/database/mongodb/repository/itask.repository";
import { TaskRepository } from "../../infrastructure/database/mongodb/repository/task.repository";


export class DeleteTaskUsecase {
    constructor(private taskRepository: ITaskRepository) {}

    async execute(id: string): Promise<void> {
        const task = await this.taskRepository.findById(id);

        if(!task){
            throw new Error("Não foi possível encontrar task")
        }
        await this.taskRepository.delete(id);

    }
}