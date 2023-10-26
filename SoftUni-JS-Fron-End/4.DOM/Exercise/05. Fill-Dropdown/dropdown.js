function addItem() {
    let text = document.getElementById("newItemText").value;
    let val = document.getElementById("newItemValue").value;
    let menu =document.getElementById("menu");

    let option = document.createElement("option");
    option.setAttribute("value", val);
    option.textContent = text;
    menu.appendChild(option);

    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}
