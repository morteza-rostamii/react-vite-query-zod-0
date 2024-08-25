import todoService from "@/features/todos/services";
import { useQuery } from "@tanstack/react-query"
import { TTodo } from "@/features/todos/const&types/schemas";

export const TodoList = () => {
  //const [cool, setCool] = useState('cool');
  const {
    data: todos,
    isLoading,
  } = useQuery({
    queryFn: todoService.getTodos,
    queryKey: ['todos'],

    // if: your queryFn has a parameter like a search term or something also pass it into keys
    // queryKey: ['todos', {searchTerm}] 

    // react-query will refetch in the background despite the face it will show the cached data. this stop refetching
    //staleTime: Infinity, 

    // never cash the data: always fetch
    //cacheTime: 0,
  });

  if (isLoading) return <>Loading...</>;

  return (
    <div>
      <h2>todo list</h2>

      <div>
        {todos?.map((todo:TTodo) => (
          <div
          key={todo.id}
          >
            {todo.task}
          </div>
        ))}
      </div>
    </div>
  )
}
