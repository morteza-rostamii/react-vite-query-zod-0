import { AddTodo } from "@/features/todos/components/AddTodo"
import { TodoList } from "@/features/todos/components/TodoList"
import { TodosInfo } from "@/features/todos/components/TodosInfo"

export const HomePage = () => {

  return (
    <div>
      <h1>todo application: </h1>
      <AddTodo/>
      <TodoList />
      <TodosInfo/>
    </div>
  )
}
