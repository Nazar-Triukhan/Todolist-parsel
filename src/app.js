import deletItem from './js/delete'
import creatItem from './js/creatTasck'
import btnRef from './js/btn'
import checkedElem from './js/checked'
import numberTask from './js/number'


btnRef(creatItem)
deletItem()
checkedElem()
numberTask()

const listRef = document.querySelector('.tasks__list')
listRef.addEventListener('click',(e) => {
    if(e.target.closest('.tasks__edit-btn')){
        alert('функція в розробці')
    }
    
})











