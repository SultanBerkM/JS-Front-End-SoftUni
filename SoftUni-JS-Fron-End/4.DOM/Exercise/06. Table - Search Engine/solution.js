function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchedTxt = document.getElementById("searchField").value;
      const allRows = Array.from(document.querySelectorAll("tbody tr"));

      allRows.forEach((row) => row.className = "");

      allRows.forEach((row) => {
         let currArr = [];
         currArr = Array.from(row.children);
         currArr.forEach((element) => {
            if(element.textContent.includes(searchedTxt)){
               row.classList.add("select");
         }})
      })
      
   }
}