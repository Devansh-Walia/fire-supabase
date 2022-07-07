import React from "react";
import supabase from '../supabase';
export default function AddTodo({render, setRender }) {
  const [title, setTitle] = React.useState("");

  const Submit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await supabase
        .from('todos')
        .insert([
          { item: title},
        ])
      setRender(!render);
        setTitle("");
      }
    };
    return (
      <form onSubmit={Submit}>
        <div className="input_container">
          <input
            type="text"
            placeholder="Enter todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="btn_container">
          <button>Add</button>
        </div>
      </form>
    );
  }
