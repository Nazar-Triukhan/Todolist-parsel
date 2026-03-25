export default function btnRef(creatElem){
    const btnRef = document.querySelector('.tasks__add-btn')
    btnRef.addEventListener('click',() => {
        const text = document.querySelector('.tasks__input').value;
        if(text.trim() === ''){
            alert('Name text')
        } else {
            creatElem(text)

        }
    })
}