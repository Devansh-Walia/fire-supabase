import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Todo({ todo, toggleComplete, Delete, Edit,}) {
  const [newitem, setNewitem] = React.useState(todo.item);

  const Change = (e) => {
    e.preventDefault();
    if (todo.complete === true) {
      setNewitem(todo.item);
    } else {
      todo.item = "";
      setNewitem(e.target.value);
    }
  };
  return (
    <div className="todo">
      <input
        style={{ textDecoration: todo.completed && "line-through" }}
        type="text"
        value={todo.item === "" ? newitem : todo.item}
        className="list"
        onChange={Change}
      />
      <div>
        <button
          className="button-complete"
          onClick={() => toggleComplete(todo)}
        >
          <CheckCircleIcon id="i" />
        </button>
        <button
          className="button-edit"
          onClick={() => Edit(todo, newitem)}
        >
          <EditIcon id="i" />
        </button>
        <button className="button-delete" onClick={() => Delete(todo.id)}>
          <DeleteIcon id="i" />
        </button>
      </div>
    </div>
  );
}
