import { nanoid } from 'nanoid'
import numberTask from './number';
function createTaskHTML(text) {
  return `
    <div class="tasks__item" data-id="${nanoid(5)}">
      <div>
        <input type="checkbox" class="tasks__checkbox">
        <span class="tasks__text">${text}</span>
      </div>
      <div class="tasks__width">
        <button class="tasks__edit-btn">rename</button>
        <button class="tasks__delete-btn">delete</button>
      </div>
    </div>
  `;
}

export default function appendTask(text) {
  const listRef = document.querySelector('.tasks__list');
  listRef.insertAdjacentHTML('beforeend', createTaskHTML(text));
  numberTask()
}

