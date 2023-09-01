// components/TodoForm.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions/todoActions";
import "../../src/App.css"; // Import the CSS file

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      {" "}
      {/* Apply the 'todo-form' class */}
      <input
        className="input-field"
        type="text"
        placeholder="Add task   ↵ Enter"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleAddTodo} className="add-button">
        {" "}
        {/* Apply the 'add-button' class */}
        Add
      </button>
    </div>
  );
};

export default connect(null, { addTodo })(TodoForm);
