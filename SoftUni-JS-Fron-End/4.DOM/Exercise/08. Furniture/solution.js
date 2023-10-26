function solve() {
  const generateBtn = document.querySelector("#exercise button");
  generateBtn.addEventListener("click", uploadingRowsInTable);

  //take all checkboxes and make the enable 
}
function enableCheckBoxes(boxes){
  
}
function uploadingRowsInTable(){
  const textArea = document.querySelector("#exercise textarea").value;
  const objs = JSON.parse(textArea);
  const table = document.querySelector("tbody");
  objs.map((furniture) => {
    const row = document.createElement("tr");

    //adds the firts cell with the image
    const cellImage = document.createElement('td');
    const image = document.createElement('img');
    image.src = furniture.img;
    cellImage.appendChild(image);

    //adds the sec cell with the name
    const nameCell = document.createElement('td');
    const nameP = document.createElement('p');
    nameP.textContent = furniture.name;
    nameCell.appendChild(nameP);

    //adds the third cell with the price
    const priceCell = document.createElement('td');
    const priceP = document.createElement('p');
    priceP.textContent = furniture.price;
    priceCell.appendChild(priceP);

    const factorCell = document.createElement('td');
    const factorP = document.createElement('p');
    factorP.textContent = furniture.decFactor;
    factorCell.appendChild(factorP);

    //check box
    const checkBoxCell = document.createElement('td');
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBoxCell.appendChild(checkBox);

    row.appendChild(cellImage);
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(factorCell);
    row.appendChild(checkBoxCell)
    
    return row;
  }).forEach(r => {
    table.appendChild(r);
  });
}