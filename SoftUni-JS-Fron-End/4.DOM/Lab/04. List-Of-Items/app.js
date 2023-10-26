function addItem() {
    const addTxt = document.getElementById("newItemText").value;
    const addingAres = document.getElementById('items');

    let newLi = document.createElement('li');
    newLi.textContent = addTxt;
    addingAres.appendChild(newLi);

    document.getElementById("newItemText").value = '';

}