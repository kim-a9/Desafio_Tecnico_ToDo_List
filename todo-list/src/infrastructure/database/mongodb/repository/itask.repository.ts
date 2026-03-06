import { Task, TaskFilters } from "../../../../domain/entities/task";


export interface ITaskRepository {
    create(task: Task): Promise<void>;
    findById(id: string): Promise<Task | null>;
    findAll(filters?: TaskFilters): Promise<Task[]>;
    update(task: Task): Promise<void>;
    delete(id: string): Promise<Task | null>;
}