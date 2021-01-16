import { createStore } from 'redux';

const btnPlus = document.getElementById('btnPlus');
const btnMinus = document.getElementById('btnMinus');
const number = document.querySelector('span');

number.innerText = 0;

const PLUS = 'PLUS';
const MINUS = 'MINUS';

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

btnPlus.addEventListener('click', () => {
  countStore.dispatch({ type: PLUS });
});
btnMinus.addEventListener('click', () => {
  countStore.dispatch({ type: MINUS });
});
