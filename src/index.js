import { createStore } from 'redux';

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addToDo = (text) => {
  const id = Date.now();
  return { type: ADD_TODO, text, id };
};

const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  const { type, text, id } = action;

  switch (type) {
    case ADD_TODO:
      return [{ text, id }, ...state];
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

const paintToDos = () => {
  ul.innerHTML = '';

  const toDos = store.getState();
  toDos.forEach((toDo) => {
    const li = document.createElement('li');
    li.id = toDo.id;
    li.innerText = toDo.text;

    const btn = document.createElement('button');
    btn.innerText = 'DEL';
    btn.addEventListener('click', dispatchDeleteToDo);

    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e) => {
  e.preventDefault();

  const toDo = input.value;
  input.value = '';

  if (toDo) dispatchAddToDo(toDo);
};

form.addEventListener('submit', onSubmit);
