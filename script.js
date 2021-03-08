const addBtn = document.querySelector('#added');
const todoBody = document.querySelector('.todo__body');


addBtn.addEventListener('click', () => {
    let input = document.querySelector('#input');
    let value = input.value;

    todoBody.insertAdjacentHTML('afterbegin', `
    <div class="item">
       <input type="text" class = "item__input" value = "${value}" disabled>
       <button class="upButton">&#10004;</button>
       <button class="removeButton">&#10008;</button>
   </div>
    `);
    input.value = "";
});

todoBody.addEventListener('click', (e) => {
    e.target.closest('.removeButton') && e.target.parentElement.remove();
    if (e.target.closest('.upButton')) {
        e.target.style.color = 'lawngreen';
        e.target.parentElement.firstElementChild.classList.add('up');
    }
})

todoBody.addEventListener('dblclick', (e) => {
    if (e.target.closest('.item__input')) e.target.disabled = false;
})


todoBody.addEventListener('keydown', (e) => {
    e.stopPropagation()
    if (e.code == 'Enter') {
        if (e.target.closest('.item__input')) e.target.disabled = true;
    }

})
