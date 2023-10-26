function subtract() {
    let firstNum = Number(document.getElementById('firstNumber').value);
    let secondNum = Number(document.getElementById('secondNumber').value);
    let output = document.getElementById('result');

    let result = firstNum - secondNum;
    output.textContent = result;

}