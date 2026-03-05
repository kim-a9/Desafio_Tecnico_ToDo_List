import { Task, TaskFilters } from "../../../../domain/entities/task";
import { TaskModel } from "../model/task.model";
import { ITaskRepository } from "./itask.repository";

export class TaskRepository implements ITaskRepository {

    async create(task: Task): Promise<void> {
        const data = task.toJSON();
        await TaskModel.create({ ...data });
        
    }

    async findById(id: string): Promise<Task | null> {
        const data = await TaskModel.findById(id);
        
        if (!data) {
            return null;   
        }
        return new Task(data.toJSON() as any);
    }

    async findAll(filters: TaskFilters): Promise<Task[]>{
        const query: any = {};
        
        if (filters.status) query.status = filters.status;
        if (filters.priority) query.priority = filters.priority;

        const tasks = await TaskModel.find(query); 
        
        
        return tasks.map(data => new Task({
            id: data._id.toString(),
            title: data.title,
            description: data.description,
            status: data.status,
            priority: data.priority,
            due_date: data.due_date,
            created_at: data.created_at,
            updated_at: data.updated_at
        }))
    }

    async update(task: Task): Promise<void>{
       const data = task.toJSON();

       await TaskModel.findByIdAndUpdate(data.id, {
        $set: {
            title: data.title,
            description: data.description,
            status: data.status,
            priority: data.priority,
            due_date: data.due_date,
            updated_at: data.updated_at,
        }
       });
       
       
    }

}