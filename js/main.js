import { AddTodo } from './addTodo.js';

// Todo作成のモーダル　表示非表示
const btnOpen = document.querySelector('.btn__add');
const btnClose = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
btnOpen.addEventListener('click', AddTodo);
btnClose.addEventListener('click', AddTodo);
modal.addEventListener('click', AddTodo);

// 作成する クリックでTodoを追加
const createBtn = document.querySelector('.modal__create__btn');
createBtn.addEventListener('click', AddTodo);

// Todo編集のモーダル　表示非表示
const todoList = document.querySelector('.todo__list');
const modalEdit = document.querySelector('.modal-2');
todoList.addEventListener('click', AddTodo);
modalEdit.addEventListener('click', AddTodo);
