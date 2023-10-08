import TodoAdder from "./TodoAdder/TodoAdder";
import TodoList from "./TodoList/TodoList";
import classes from "./TodoPage.module.css";

function TodoPage() {
  return (
    <div>
      <h1 className={classes.title}>tRPC - Todo app</h1>
      <div className={classes.wrapper}>
        <div className={classes["todo-list"]}>
          <h2>My todos:</h2>
          <TodoList />
        </div>
        <div className={classes["add-todo"]}>
          <h2>Add a new todo:</h2>
          <TodoAdder />
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
