import { helper } from "@/utils/helpers"
import { TodoSchema, TTodo } from "./const&types/schemas";
import { z } from "zod";

const todoService = {

  // fetch todos
  async getTodos(): Promise<TTodo[]> {

    try {
      
      // simulate a network request
      await new Promise((resolve:any) => setTimeout(resolve, 2000));
  
      const todosStr: string | null = localStorage.getItem('todos');
      if (!todosStr) return [];
      
      const data: TTodo[] = JSON.parse(todosStr);

      // validate todos with zod
      const todos = TodoSchema.array().parse(data);

      return todos;
    }
    catch (err:any) {
      if (err instanceof z.ZodError) {
        // handle zod validation error
        console.error('fetch todos zod error: ', err.errors);
      }
      else {
        // other errors
        console.error('fetch todos error: ', err);
      }
      return [];
    }
  },

  // add todos
  async addTodo(task: string): Promise<boolean> {

    try {
      // simulate a network request
      await new Promise((resolve:any) => setTimeout(resolve, 2000));
  
      const newTodo = {
        id: helper.generateId(),
        task: task,
        complete: false,
      }
  
      const jsonStr:string | null = localStorage.getItem('todos');
      
      if (jsonStr) {
        const todos:TTodo[] = JSON.parse(jsonStr); 
        // add new todo
        todos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
      } else {
        // if: already there is no todos
        const newTodos = [newTodo];
        localStorage.setItem('todos', JSON.stringify(newTodos));
      }
  
      return true;
    }
    catch(err:any) {
      console.log(err);
      return false;
    }
  },
}

export default todoService;