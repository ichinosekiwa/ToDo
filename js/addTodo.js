export function AddTodo() {
  // TODO　作成機能
  const btnOpen = document.querySelector('.btn__add');
  const btnClose = document.querySelector('.modal__close');
  const modal = document.querySelector('.modal');

  // ２回目以降モーダルを開いたときにエラーをリセット(モーダルを初期状態にする)
  const resetErrorModal = () => {
    const validateItems = document.querySelectorAll('.maxlength');
    validateItems.forEach((item) => {
      removeError(item);
    });
  };
  btnOpen.addEventListener('click', () => {
    modal.style.display = 'block';
    // エラーをリセット
    resetErrorModal();
  });
  btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  document.addEventListener('click', (e) => {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  });

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
      // 空白の場合の検証
      if (item.value.trim() === '') {
        createError(item, 'ERROR：入力してください');
        haveError = true;
      } else if (item.value.length > maxlength) {
        createError(item, 'ERROR：' + maxlength + '文字以内で入力してください');
        haveError = true;
      } else {
        removeError(item);
      }

      if (!haveError && addTodoItem.value.trim() !== '') {
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
        modal.style.display = 'none';
      }
    });
  });

  // TODO　編集機能
  const todoList = document.querySelector('.todo__list');
  todoList.addEventListener('click', function (event) {
    if (event.target.classList.contains('icon-edit')) {
      // 編集モーダルを表示
      const modalEdit = document.querySelector('.modal_edit');
      modalEdit.style.display = 'block';
    }
  });
  const modalEdit = document.querySelector('.modal_edit');
  const btnEditClose = document.querySelector('.modal__edit__close');
  btnEditClose.addEventListener('click', () => {
    // 編集モーダルを閉じる
    modalEdit.style.display = 'none';
  });
  /* -------------------
  　　　　　　謎↓
   ------------------- */
  document.addEventListener('click', (e) => {
    // 編集モーダル領域外をクリックしても閉じる
    if (e.target.classList.contains('modal_edit')) {
      modalEdit.style.display = 'none';
    }
  });
}
