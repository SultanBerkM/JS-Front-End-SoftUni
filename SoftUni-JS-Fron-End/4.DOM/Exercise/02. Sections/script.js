function create(words) {
   let content = document.getElementById("content");
   const divs = [];
   words.forEach(word => {
      let div = document.createElement('div');
      let p = document.createElement('p');
      div.appendChild(p);
      p.style.display = "none";
      p.textContent = word;
      divs.push(div);
      content.appendChild(div);
   });

   divs.forEach((div) => {
      div.addEventListener('click', () => div.firstChild.style.display = "block");
   })

   
   
}