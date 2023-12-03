export function AddTodo() {
  /* --------------------------------------
  　　　　　　TODO　作成
-------------------------------------- */
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
      }
      // 文字数の検証
      else if (item.value.length > maxlength) {
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
        <img class="icon-edit" src="image/pen.png">
        <img class="icon-trash" src="image/trash.png">
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
  // TODOに打ち消し線を追加する
  const checkboxItem = document.querySelectorAll('.todo__list__item .checkbox');
  checkboxItem.forEach((checkbox) => {
    // チェックボックスで<input>に打ち消し線を引く
    checkbox.addEventListener('change', function () {
      // チェックボックスの次の要素を取得
      const todoLabel = this.nextElementSibling;
      toggleStrikeThrough(todoLabel, this.checked);
    });
  });
  function toggleStrikeThrough(label, checked) {
    if (checked) {
      // 打ち消し線を追加
      label.style.textDecoration = 'line-through';
    } else {
      // 打ち消し線を削除
      label.style.textDecoration = 'none';
    }
  }

  /* --------------------------------------
  　　　　　　TODO　編集
-------------------------------------- */
  const modalEdit = document.querySelector('.modal_edit');
  let editedTodoItem;

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('icon-edit')) {
      const modalEdit = document.querySelector('.modal_edit');
      const currentContentItem = modalEdit.querySelector('#content-edit');
      const todoValue = event.target.parentElement.previousElementSibling;
      // モーダルを表示
      currentContentItem.value = todoValue.textContent;
      resetErrorModal();
      modalEdit.style.display = 'block';

      // 編集した情報を保存
      editedTodoItem = {
        item: todoValue,
        modal: modalEdit,
      };
      const btnEditSave = document.querySelector('.modal__edit__btn');
      btnEditSave.addEventListener('click', function () {
        // 入力を検証
        if (checkEditInput()) {
          editedTodoItem.item.textContent = currentContentItem.value.trim();
          editedTodoItem.modal.style.display = 'none';
        }
      });
    }
  });

  // 編集モーダルを閉じる
  const btnEditClose = document.querySelector('.modal__edit__close');
  btnEditClose.addEventListener('click', () => {
    modalEdit.style.display = 'none';
  });
  document.addEventListener('click', (e) => {
    // 編集モーダル領域外をクリックしても閉じる
    if (e.target.classList.contains('modal_edit')) {
      modalEdit.style.display = 'none';
    }
  });

  function checkEditInput() {
    const editContentInput = document.querySelector('#content-edit');
    const editedContent = editContentInput.value.trim();
    const errorText = document.querySelector('.modal__edit__error');

    // エラーメッセージを初期化
    errorText.textContent = '';
    // 空白の場合の検証
    if (editedContent === '') {
      errorText.textContent = 'ERROR：入力してください';
      return false;
    }
    // 文字数の検証
    if (editedContent.length > 20) {
      errorText.textContent = 'ERROR：20文字以内で入力してください';
      return false;
    }
    return true;
  }
}
