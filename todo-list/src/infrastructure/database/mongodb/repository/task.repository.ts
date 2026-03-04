import { Task } from "../../../../domain/entities/task";
import { TaskModel } from "../model/task.model";
import { ITaskRepository } from "./itask.repository";

export class TaskRepository implements ITaskRepository {

    async create(task: Task): Promise<void> {
        const data = task.toJSON();
        await TaskModel.create({ ...data });
        
    }

    async findById(id: string): Promise<Task | null> {
        const data = await TaskModel.findById(id);
        if (!data) return null;
        return new Task(data as any);
    }

    async findAll(filter: Partial<Task>): Promise<Task[] | null>{
        const data = await TaskModel.find(filter); 
        return data;
    }

     async findByStatus(filter: Partial<Task>): Promise<Task[] | null>{
        const data = await TaskModel.find(filter); 
        return data;
    }

     async findByPriority(filter: Partial<Task>): Promise<Task[] | null>{
        const data = await TaskModel.find(filter); 
        return data;
    }
}