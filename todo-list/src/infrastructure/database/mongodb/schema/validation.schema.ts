import { z } from 'zod';

export const validationSchema = z.object({
    title: z.string().min(3).max(50),
    description: z.string().min(3).max(50),
    status: z.enum(['pending', 'in_progress', 'completed', 'cancelled']),
    priority: z.enum(['low', 'medium', 'high']),
    due_date: z.string().pipe(z.coerce.date())
})