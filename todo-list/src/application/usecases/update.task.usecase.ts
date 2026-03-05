import { Task, TaskFilters, TaskProps } from "../../domain/entities/task";
import { logger } from '../../infrastructure/database/mongodb/logger/pino.logger';
import { TaskRepository } from "../../infrastructure/database/mongodb/repository/task.repository";


export class UpdateTaskUsecase {
    constructor (private taskRepository: TaskRepository ){}

    async execute(id: string, data: Partial<TaskProps>) {
        const task = await this.taskRepository.findById(id);
        
        if(!task){
            logger.error({message: "Task não encontreada", id})
            throw new Error("Não foi possível encontrar a tarefa");
        }
        logger.info({message: 'Task encontrada', id});  


        if (task.status === 'completed') {
            throw new Error("Tarefas completadas não podem ser editadas.")
        }

        if (data.due_date) {
            const today = new Date();
            today.setHours(0,0,0,0);
            
            if(data.due_date < today) {
                throw new Error("A nova data de vencimento não pode ser anterior a de hoje.")
            }
        }
        const updatedTask = new Task({
            ...task.toJSON(),
            ...data,
            updated_at: new Date()
        });
        logger.info({message: 'Task atualizada', updatedTask});

        await this.taskRepository.update(updatedTask);
        return updatedTask.toJSON();

    }
}