import React, { useState, useEffect } from 'react';

function TodoAppExample() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
 
  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    }
  }, []);
 
  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
 
  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInput('');
    }
  };
 
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
 
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
 
  return (
    <div>
      <h2>Todo App with LocalStorage</h2>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo..."
        />
        <button type="submit">Add</button>
      </form>
      
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
      <p>Total: {todos.length} | Completed: {todos.filter(t => t.completed).length}</p>
    </div>
  );
}
 
// Export all examples
export { TodoAppExample};