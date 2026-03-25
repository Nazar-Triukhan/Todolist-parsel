import numberTask from "./number"

export default function deleteItem() {
const listRef = document.querySelector('.tasks__list')
listRef.addEventListener('click',(e)=> {
const itemRef = e.target.closest('.tasks__item')

if(e.target.classList.contains('tasks__delete-btn')){
    itemRef.remove()
    numberTask()
}
})
}