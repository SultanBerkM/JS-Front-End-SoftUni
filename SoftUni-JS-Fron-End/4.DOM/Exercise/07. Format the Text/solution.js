function solve() {
  let txt = document.getElementById("input").value;
  const sentences = Array.from(txt.split("."));
  let output = document.getElementById("output");
  //for every single string use trim()...
  let result = '';
  let cnt = 0;
  let newSentences = sentences.filter((s) => s.length > 0);
  newSentences.forEach((s) => {
    cnt++;
    result+=s+".";
    if(cnt === 3){
      let p = document.createElement("p");
      p.textContent = result;
      output.appendChild(p);
      cnt = 0;
      result = '';
    }
  })

  if(result !== ""){
    let p = document.createElement("p");
    p.textContent = result;
    output.appendChild(p);
  }
}