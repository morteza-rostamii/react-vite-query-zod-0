import {z} from 'zod'

export const AddTodoSchema = z.object({
  task: 
  z
  .string()
  .min(1, {message: 'task is required'})
  .max(100, {message: 'task must be less than 100 chars'})
  ,
});

export type TAddTodoInputs = z.infer<typeof AddTodoSchema>;

// todo schema

export const TodoSchema = z.object({
  id: z.string(),
  task:
  z
  .string()
  .min(1, {message: 'task is required'}),
  complete: z.boolean(),
});

export type TTodo = z.infer<typeof TodoSchema>;