import classes from "./TodoElement.module.css";
import deleteIcon from "../../../assets/trash-2.svg";
import { trpc } from "../../../utils/trpc";

interface TodoElementProps {
  id: string;
  content: string;
  isDone: boolean;
}

function TodoElement({ content, isDone, id }: TodoElementProps) {
  const deleteTodoMutation = trpc.todo.deleteById.useMutation();
  const trpcUtils = trpc.useContext();

  function handleDelete() {
    deleteTodoMutation.mutate(
      { id: id },
      {
        onSuccess: () => {
          console.log("Todo deleted!");
          // Invalidate the data to update the UI by refetch
          trpcUtils.todo.invalidate();
        },
      }
    );
  }
  return (
    <li className={classes.todo}>
      <p>{content}</p>{" "}
      <span
        className={`${classes.status} ${
          isDone ? classes.done : classes["not-done"]
        }`}
      >
        {isDone ? "DONE" : "TODO"}{" "}
      </span>
      <button className={classes["delete-button"]} onClick={handleDelete}>
        <img src={deleteIcon} alt="Delete todo" />
      </button>
    </li>
  );
}

export default TodoElement;
