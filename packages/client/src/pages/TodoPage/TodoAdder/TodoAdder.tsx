import { useState } from "react";
import classes from "./TodoAdder.module.css";
import { trpc } from "../../../utils/trpc";

function TodoAdder() {
  const [newTodoContent, setNewTodoContent] = useState("");
  const addTodoMutation = trpc.todo.create.useMutation();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    addTodoMutation.mutate(
      { content: newTodoContent },
      {
        onSuccess: () => {
          console.log("A new todo has been added");
          setNewTodoContent("");
        },
      }
    );
  }

  return (
    <form className={classes["add-wrapper"]} onSubmit={handleSubmit}>
      <div className={classes["add-todo-field-group"]}>
        <label htmlFor="add">Todo's content:</label>
        <textarea
          value={newTodoContent}
          onChange={(e) => setNewTodoContent(e.target.value)}
          id="add"
        />
      </div>
      <button className={classes["submit-button"]}>ADD TODO</button>
    </form>
  );
}

export default TodoAdder;
