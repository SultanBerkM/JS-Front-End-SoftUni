function calc() {
   const inputOne = Number(document.getElementById("num1").value);
   const inputTwo = Number(document.getElementById("num2").value);
   let outputTxt = document.getElementById("sum");

   outputTxt.value = inputOne + inputTwo;
}
