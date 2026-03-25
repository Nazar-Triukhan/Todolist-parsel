export default function checkedElem() {
    const listRef = document.querySelector('.tasks__list')
    listRef.addEventListener('click',(e) => {
    const taskItem = e.target.closest('.tasks__item');
    if(e.target.classList.contains('tasks__checkbox') & e.target.checked === true){
        taskItem.classList.add('tasks__item-true')  
    }
    if(e.target.classList.contains('tasks__checkbox') & e.target.checked === false){
        taskItem.classList.remove('tasks__item-true')  
    }

})

}