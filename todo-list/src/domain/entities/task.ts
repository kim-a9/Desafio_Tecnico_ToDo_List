import mongoose from 'mongoose';
export type TaskStatus = 'pending' | 'completed' | 'in_progress' | 'cancelled';
export type TaskPriority = 'low'| 'medium' | 'high';


export interface TaskProps {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: TaskPriority;
    due_date: Date;
    created_at: Date;
    updated_at?: Date;
}

export interface TaskFilters{
    status?: TaskStatus;
    priority?: TaskPriority;
}

export class Task {
    private props: TaskProps;

    constructor(props: TaskProps) {
        this.validate(props);
        this.props = {
            ...props,
            id: props.id ?? new mongoose.Types.ObjectId().toString(),
            created_at: props.created_at ?? new Date(),
            updated_at: props.updated_at ?? new Date(),
        };
    }

    private validate(props: TaskProps) {
        if(props.title.length < 3 || props.title.length > 50) {
            throw new Error(' O campo Title deve conter entre 3 a 50 caracteres.');
        }
        if (props.description.length < 5) {
            throw new Error('O campo Description deve estar devidamente preenchido');
        }
        
        const today = new Date();
        today.setHours(0,0,0,0); 
        const due_date = new Date(props.due_date);
        due_date.setHours(0,0,0,0);

        if (due_date < today){
            throw new Error("A data de vencimento da task não pode ser anterior a atual.")
        }

    }
        get id() { return this.props.id; }
        get title() { return this.props.title; }
        get status() { return this.props.status; }
        public toJSON() { return this.props; }

    






    
}


