// redux/reducers/todos.js
const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "UPDATE_TODO":
      const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            text: action.payload.text,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    case "TOGGLE_TODO":
      const toggledTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed, // Toggle the 'completed' property
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: toggledTodos,
      };

    default:
      return state;
  }
};

export default todosReducer;
