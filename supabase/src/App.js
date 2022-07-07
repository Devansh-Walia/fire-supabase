import "./App.css";
import React from "react";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

import supabase from './supabase';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [render, setRender] = React.useState(true);
  React.useEffect(() => {
    const getData = async () => {
      let { data: todos, error } = await supabase
        .from('todos')
        .select('*');
      if (!error)
        setTodos(todos);
    }
    getData();
  }, [render]);

  const Edit = async (todo, title) => {
    await supabase.from('todos').update({ 'item': title }).eq('id', todo.id);
  };
  const toggleComplete = async (todo) => {
    await supabase.from('todos').update({ 'completed': !todo.completed }).eq('id', todo.id);
    setRender(!render);
  };
  const Delete = async (id) => {
    await supabase.from('todos').delete().eq('id', id);
    setRender(!render);
  };
  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <div>
        <AddTodo
            render={render}
          setRender={setRender}
        />
      </div>
      <div className="todo_container">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            Delete={Delete}
            Edit={Edit}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
