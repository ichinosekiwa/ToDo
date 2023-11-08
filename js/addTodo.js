// ToDoを追加する

export const AddTodo = 'main';

// 作成するボタンクリックでTodo追加
const createBtn = document.querySelector('.modal__create__btn');
createBtn.addEventListener('click', function () {
  const addTodoItem = document.querySelector('#content');

  if (addTodoItem.value) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo__list__item');
    todoItem.innerHTML = `
    <input id="checkbox" class="checkbox" type="checkbox">
    <label for="checkbox">${addTodoItem.value}</label>
    <div class="todo__list__item-btns">
    <button class="icon-edit"><img src="image/pen.png"></button>
    <button class="icon-trash"><img src="image/trash.png"></button>
    </div>
    `;

    // 親要素<ul>に入力したTodoを追加
    const todoList = document.querySelector('.todo__list');
    todoList.appendChild(todoItem);
  }
  // 最後に入力欄を空にする
  addTodoItem.value = '';
});
