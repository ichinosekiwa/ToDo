// Add Todo
import { AddTodo } from './addTodo.js';

// 作成する クリックでTodoを追加
const createBtn = document.querySelector('.modal__create__btn');
createBtn.addEventListener('click', function () {
  AddTodo();
});
