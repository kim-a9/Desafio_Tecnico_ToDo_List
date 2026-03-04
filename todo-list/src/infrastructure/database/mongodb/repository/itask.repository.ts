import { Task } from "../../../../domain/entities/task";


export interface ITaskRepository {
    create(task: Task): Promise<void>;
    findById(id: string): Promise<Task | null>;
    findAll(filters?: any): Promise<Task[] | null>;
    findByStatus(filters?: any): Promise<Task[] | null>;
    findByPriority(filters?: any): Promise<Task[] | null>;

}