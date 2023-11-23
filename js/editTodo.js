import { AddTodo } from './addTodo.js';
const createBtn = document.querySelector('.modal__create__btn');
createBtn.addEventListener('click', AddTodo);

export function EditTodo() {
  const editBtnOpen = document.querySelector('.icon-edit');
  const modalEdit = document.querySelector('.modal-2');
  //   const editBtnClose = document.querySelector('.modal__close');

  editBtnOpen.addEventListener('click', () => {
    modalEdit.style.display = 'block';
  });
  //   editBtnClose.addEventListener('click', () => {
  //     modalEdit.style.display = 'none';
  //   });
}
