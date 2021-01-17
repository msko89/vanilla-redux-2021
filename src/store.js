import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.unshift({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
