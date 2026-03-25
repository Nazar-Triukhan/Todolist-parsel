export default function numberTask() {
    const itemsRef = document.querySelectorAll('.tasks__item')
    const namberRef = document.querySelector('.tasks__count')
    namberRef.textContent = itemsRef.length
}



