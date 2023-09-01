// redux/actions/todoActions.js
export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: {
    id: new Date().getTime(),
    text,
    completed: false, // Include the 'completed' property with a default value
  },
});

export const removeTodo = (id) => ({
  type: "REMOVE_TODO",
  payload: id,
});

export const updateTodo = (id, text) => ({
  type: "UPDATE_TODO",
  payload: {
    id,
    text,
  },
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: id,
});
