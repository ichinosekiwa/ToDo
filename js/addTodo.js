// addTodo.js

export function AddTodo() {
  // エラーを表示
  const createError = (item, errorMessage) => {
    removeError(item);
    const errorText = document.createElement('span');
    errorText.classList.add('error');
    errorText.textContent = errorMessage;
    item.parentNode.appendChild(errorText);
  };
  // 既存のエラーを削除
  const removeError = (item) => {
    const removeErrorSpan = item.parentNode.querySelector('.error');
    if (removeErrorSpan) {
      removeErrorSpan.remove();
    }
  };

  const createBtn = document.querySelector('.modal__create__btn');
  createBtn.addEventListener('click', function () {
    const addTodoItem = document.querySelector('#content-create');
    let haveError = false;
    // 入力した文字数を検証
    const validateItems = document.querySelectorAll('.maxlength');
    validateItems.forEach((item) => {
      const maxlength = item.getAttribute('data-maxlength');
      if (item.value.length > maxlength) {
        createError(item, 'ERROR：' + maxlength + '文字以内で入力');
        haveError = true;
      } else {
        removeError(item);
      }
    });

    if (!haveError && addTodoItem.value) {
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
      // 入力欄を空にする
      addTodoItem.value = '';
    }
  });
}
