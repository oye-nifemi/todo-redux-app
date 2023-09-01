// components/TodoList.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { removeTodo, updateTodo } from "../redux/actions/todoActions"; // Import the updateTodo action
import "../../src/App.css";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
  const [editText, setEditText] = useState(""); // State to track edited text
  const [editingId, setEditingId] = useState(null); // State to track the todo being edited

  const handleEditClick = (id, text) => {
    setEditText(text); // Set the edited text to the current todo text
    setEditingId(id); // Set the editingId to the current todo id
  };

  const handleUpdateClick = (id) => {
    if (editText.trim() !== "") {
      updateTodo(id, editText); // Dispatch the updateTodo action
      setEditingId(null); // Reset editing state
      setEditText(""); // Clear the edited text
    }
  };

  const handleKeyPress = (e, id) => {
    if (e.key === "Enter") {
      handleUpdateClick(id); // Trigger update on Enter key press
    }
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className="todo-item">
          <div>
            {editingId === todo.id ? (
              // If editing, show input field and update button
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input" // Add this class
                  onKeyPress={(e) => handleKeyPress(e, todo.id)} // Handle Enter key press
                />

                <button
                  onClick={() => handleUpdateClick(todo.id)}
                  className="add-button"
                >
                  Update
                </button>
              </>
            ) : (
              // If not editing, show todo text
              <span>{todo.text}</span>
            )}
          </div>
          <div>
            <button
              onClick={() => handleEditClick(todo.id, todo.text)}
              className="update-button"
            >
              Edit
            </button>
            <button
              onClick={() => removeTodo(todo.id)}
              className="delete-button"
            >
              Remove
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

export default connect(mapStateToProps, { removeTodo, updateTodo })(TodoList);
