import { useQuery } from "@tanstack/react-query"
import { TTodo } from "../const&types/schemas";

export const TodosInfo = () => {
  const {data:todos}:{data: TTodo[] | any} = useQuery({queryKey: ['todos']});

  return (
    <div>
      you have {todos && todos?.length} task todo.
    </div>
  )
}
