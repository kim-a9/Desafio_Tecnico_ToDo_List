import {model, Schema} from 'mongoose';
import { TaskStatus, TaskPriority } from '../../../../domain/entities/task';

export const taskSchema: Schema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, required: true},
    priority: {type: String, required: true},
    due_date: {type: Date, required: true},
    created_at: {type: Date},
    updated_at: {type: Date}
});

export interface ITask extends Document {
    id?: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    due_date: Date;
    created_at: Date;
    updated_at: Date;
}
export const TaskModel = model<ITask>('Task', taskSchema);