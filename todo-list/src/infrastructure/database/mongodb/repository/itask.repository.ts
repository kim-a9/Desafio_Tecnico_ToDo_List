import { Task } from "../../../../domain/entities/task";


export interface ITaskRepository {
    create(task: Task): Promise<void>;
    findById(id: string): Promise<Task | null>;
}