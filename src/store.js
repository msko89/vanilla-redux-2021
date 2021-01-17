import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = (text) => {
  return { type: ADD, text, id: Date.now() };
};

const deleteToDo = (id) => {
  return { type: DELETE, id };
};

const reducer = (state = [], action) => {
  const { type, text, id } = action;

  switch (type) {
    case ADD:
      return [{ text, id }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
