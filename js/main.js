import { AddTodo } from './addTodo.js';
import { EditTodo } from './editTodo.js';

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
let editBtnOpen;
document.addEventListener('DOMContentLoaded', function () {
  // DOMが読み込まれた後にボタンを取得
  editBtnOpen = document.querySelector('.icon-edit');
  editBtnOpen.addEventListener('click', EditTodo);
});
