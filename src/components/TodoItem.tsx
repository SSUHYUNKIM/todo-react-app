import React from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoItemProps {
    todo: Todo;
    toggleComplete: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, removeTodo }) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
                type="checkbox"ㄹ
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none', flexGrow: 1 }}>
        {todo.text}
      </span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
        </div>
    );
};

export default TodoItem;