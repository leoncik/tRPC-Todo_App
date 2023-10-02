import { trpc } from "../utils/trpc";

function TodoList() {
  const todoQuery = trpc.todo.getAll.useQuery();

  if (todoQuery.isError) return <h2>Error: could not retrieve todos.</h2>;
  if (todoQuery.isLoading) return <span>Loading...</span>;

  return <pre>{JSON.stringify(todoQuery.data, null, 2)}</pre>;
}

export default TodoList;
