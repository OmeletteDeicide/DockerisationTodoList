import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = () => {
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newTodo }),
    })
      .then(response => response.json())
      .then(todo => setTodos([...todos, todo]));

    setNewTodo('');
  };

  return (
    <div>
      <h1>TODO List</h1>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New TODO"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
