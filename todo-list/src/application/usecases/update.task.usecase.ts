import { Task, TaskFilters, TaskProps } from "../../domain/entities/task";
import { ITaskRepository } from "../../infrastructure/database/mongodb/repository/itask.repository";
import { TaskRepository } from "../../infrastructure/database/mongodb/repository/task.repository";


export class UpdateTaskUsecase {
    constructor (private taskRepository: TaskRepository ){}

    async execute(id: string, data: Partial<TaskProps>) {
        const task = await this.taskRepository.findById(id);

        if(!task){
            throw new Error("Não foi possível encontrar a tarefa");
        }

        if (task.status === 'completed') {
            throw new Error("Tarefas completadas não podem ser editadas.")
        }

        const updatedTask = new Task({
            ...task.toJSON(),
            ...data,
            updated_at: new Date()
        })
        await this.taskRepository.update(updatedTask);
        return updatedTask.toJSON();

    }
}