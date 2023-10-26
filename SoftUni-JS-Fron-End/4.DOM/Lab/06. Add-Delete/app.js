function addItem() {
    const addTxt = document.getElementById("newItemText").value;
    const addingAres = document.getElementById('items');

    let newLi = document.createElement('li');
    let deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';

    newLi.textContent = addTxt;

    addingAres.appendChild(newLi);
    newLi.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    })
    document.getElementById("newItemText").value = '';
}