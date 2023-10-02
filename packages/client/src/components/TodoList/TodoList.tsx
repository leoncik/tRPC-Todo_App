import { trpc } from "../../utils/trpc";
import TodoElement from "../TodoElement/TodoElement";
import classes from "./TodoList.module.css";

function TodoList() {
  const todoQuery = trpc.todo.getAll.useQuery();

  if (todoQuery.isError) return <h2>Error: could not retrieve todos.</h2>;
  if (todoQuery.isLoading) return <span>Loading...</span>;

  return (
    <ul className={classes["todo-list"]}>
      {todoQuery.data.map((todo) => (
        <TodoElement content={todo.content} isDone={todo.isDone} />
      ))}
    </ul>
  );
}

export default TodoList;
