function extractText() {
    const arrList = Array.from(document.querySelectorAll("#items li"));
    let txtArea = document.getElementById("result");

    arrList.forEach((e) => txtArea.value += e.textContent + '\n');  
}