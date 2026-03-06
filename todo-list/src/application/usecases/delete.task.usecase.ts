import { ITaskRepository } from "../../infrastructure/database/mongodb/repository/itask.repository";
import { TaskRepository } from "../../infrastructure/database/mongodb/repository/task.repository";


export class DeleteTaskUsecase {
    constructor(private taskRepository: ITaskRepository) {}

    async execute(id: string): Promise<void> {
        const dltTask = await this.taskRepository.delete(id);

        if(!dltTask){
            throw new Error("Não foi possível encontrar task")
        }

    }
}