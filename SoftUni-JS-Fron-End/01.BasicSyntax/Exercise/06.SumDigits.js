function SumDigitsOfNumber(number){
    let result = 0;
    let stringNumber = number.toString();
    for (let i = 0; i < stringNumber.length; i++) {
        result += Number(stringNumber[i]);
    }
    console.log(result);
}
SumDigitsOfNumber(12345)